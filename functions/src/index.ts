import * as functions from "firebase-functions";
import * as admin from "firebase-admin";

admin.initializeApp();
const db = admin.firestore();

const ALLOWED_ORIGINS = [
    "http://localhost:5173",
    "http://localhost:5174",
    process.env.FRONTEND_URL || ""
].filter(Boolean);

// Get all events
export const getEvents = functions.https.onRequest(
    async (req, res) => {
        const origin = req.headers.origin || "";
        if (ALLOWED_ORIGINS.includes(origin)) {
            res.set("Access-Control-Allow-Origin", origin);
        }
        res.set("Access-Control-Allow-Methods", "GET, OPTIONS");

        if (req.method === "OPTIONS") {
            res.status(204).send("");
            return;
        }

        try {
            const eventsSnapshot = await db.collection("events").get();
            const events = eventsSnapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            }));
            res.json(events);
        } catch (error) {
            console.error("Error fetching events:", error);
            res.status(500).json({ error: "Failed to fetch events" });
        }
    }
);

// Create event (requires auth token & club_head role)
export const createEvent = functions.https.onRequest(
    async (req, res) => {
        const origin = req.headers.origin || "";
        if (ALLOWED_ORIGINS.includes(origin)) {
            res.set("Access-Control-Allow-Origin", origin);
        }
        res.set("Access-Control-Allow-Methods", "POST, OPTIONS");
        res.set("Access-Control-Allow-Headers", "Content-Type, Authorization");

        if (req.method === "OPTIONS") {
            res.status(204).send("");
            return;
        }

        try {
            const authHeader = req.headers.authorization;
            if (!authHeader || !authHeader.startsWith("Bearer ")) {
                res.status(401).json({ error: "Unauthorized" });
                return;
            }

            const token = authHeader.slice(7);
            const decodedToken = await admin.auth().verifyIdToken(token);
            const uid = decodedToken.uid;

            // Verify user is a club head
            const userDoc = await db.collection("users").doc(uid).get();
            if (!userDoc.exists) {
                res.status(404).json({ error: "User not found" });
                return;
            }

            const userData = userDoc.data();
            if (userData?.role !== "club_head" && userData?.role !== "admin") {
                res.status(403).json({ error: "Only club heads can create events" });
                return;
            }

            const eventData = {
                ...req.body,
                createdBy: uid,
                clubId: userData?.clubId || req.body.clubId,
                attendees: [],
                createdAt: admin.firestore.FieldValue.serverTimestamp(),
            };

            const docRef = await db.collection("events").add(eventData);
            res.json({ id: docRef.id, ...eventData });
        } catch (error) {
            console.error("Error creating event:", error);
            res.status(500).json({ error: "Failed to create event" });
        }
    }
);

// Update event (requires auth token & ownership)
export const updateEvent = functions.https.onRequest(
    async (req, res) => {
        const origin = req.headers.origin || "";
        if (ALLOWED_ORIGINS.includes(origin)) {
            res.set("Access-Control-Allow-Origin", origin);
        }
        res.set("Access-Control-Allow-Methods", "PUT, OPTIONS");
        res.set("Access-Control-Allow-Headers", "Content-Type, Authorization");

        if (req.method === "OPTIONS") {
            res.status(204).send("");
            return;
        }

        try {
            const authHeader = req.headers.authorization;
            if (!authHeader || !authHeader.startsWith("Bearer ")) {
                res.status(401).json({ error: "Unauthorized" });
                return;
            }

            const token = authHeader.slice(7);
            const decodedToken = await admin.auth().verifyIdToken(token);
            const uid = decodedToken.uid;

            const { eventId } = req.query;
            if (!eventId) {
                res.status(400).json({ error: "Event ID required" });
                return;
            }

            const docRef = db.collection("events").doc(eventId as string);
            const doc = await docRef.get();

            if (!doc.exists) {
                res.status(404).json({ error: "Event not found" });
                return;
            }

            if (doc.data()?.createdBy !== uid) {
                res.status(403).json({ error: "Forbidden" });
                return;
            }

            await docRef.update(req.body);
            res.json({ id: eventId, ...req.body });
        } catch (error) {
            console.error("Error updating event:", error);
            res.status(500).json({ error: "Failed to update event" });
        }
    }
);

// Delete event (requires auth token & ownership)
export const deleteEvent = functions.https.onRequest(
    async (req, res) => {
        const origin = req.headers.origin || "";
        if (ALLOWED_ORIGINS.includes(origin)) {
            res.set("Access-Control-Allow-Origin", origin);
        }
        res.set("Access-Control-Allow-Methods", "DELETE, OPTIONS");
        res.set("Access-Control-Allow-Headers", "Authorization");

        if (req.method === "OPTIONS") {
            res.status(204).send("");
            return;
        }

        try {
            const authHeader = req.headers.authorization;
            if (!authHeader || !authHeader.startsWith("Bearer ")) {
                res.status(401).json({ error: "Unauthorized" });
                return;
            }

            const token = authHeader.slice(7);
            const decodedToken = await admin.auth().verifyIdToken(token);
            const uid = decodedToken.uid;

            const { eventId } = req.query;
            if (!eventId) {
                res.status(400).json({ error: "Event ID required" });
                return;
            }

            const docRef = db.collection("events").doc(eventId as string);
            const doc = await docRef.get();

            if (!doc.exists) {
                res.status(404).json({ error: "Event not found" });
                return;
            }

            if (doc.data()?.createdBy !== uid) {
                res.status(403).json({ error: "Forbidden" });
                return;
            }

            await docRef.delete();
            res.json({ success: true });
        } catch (error) {
            console.error("Error deleting event:", error);
            res.status(500).json({ error: "Failed to delete event" });
        }
    }
);

// Promote user to club head (admin only)
export const promoteToClubHead = functions.https.onRequest(
    async (req, res) => {
        const origin = req.headers.origin || "";
        if (ALLOWED_ORIGINS.includes(origin)) {
            res.set("Access-Control-Allow-Origin", origin);
        }
        res.set("Access-Control-Allow-Methods", "POST, OPTIONS");
        res.set("Access-Control-Allow-Headers", "Content-Type, Authorization");

        if (req.method === "OPTIONS") {
            res.status(204).send("");
            return;
        }

        try {
            const authHeader = req.headers.authorization;
            if (!authHeader || !authHeader.startsWith("Bearer ")) {
                res.status(401).json({ error: "Unauthorized" });
                return;
            }

            const token = authHeader.slice(7);
            const decodedToken = await admin.auth().verifyIdToken(token);
            const adminUid = decodedToken.uid;

            // Verify requestor is admin
            const adminDoc = await db.collection("users").doc(adminUid).get();
            if (!adminDoc.exists) {
                res.status(404).json({ error: "Admin not found" });
                return;
            }

            const adminData = adminDoc.data();
            if (adminData?.role !== "admin") {
                res.status(403).json({ error: "Only admins can promote users" });
                return;
            }

            const { userId, clubId } = req.body;
            if (!userId || !clubId) {
                res.status(400).json({ error: "userId and clubId required" });
                return;
            }

            // Update user role to club_head
            await db.collection("users").doc(userId).update({
                role: "club_head",
                clubId: clubId,
                updatedAt: admin.firestore.FieldValue.serverTimestamp()
            });

            res.json({ success: true, message: "User promoted to club head" });
        } catch (error) {
            console.error("Error promoting user:", error);
            res.status(500).json({ error: "Failed to promote user" });
        }
    }
);

// Join club
export const joinClub = functions.https.onRequest(
    async (req, res) => {
        const origin = req.headers.origin || "";
        if (ALLOWED_ORIGINS.includes(origin)) {
            res.set("Access-Control-Allow-Origin", origin);
        }
        res.set("Access-Control-Allow-Methods", "POST, OPTIONS");
        res.set("Access-Control-Allow-Headers", "Content-Type, Authorization");

        if (req.method === "OPTIONS") {
            res.status(204).send("");
            return;
        }

        try {
            const authHeader = req.headers.authorization;
            if (!authHeader || !authHeader.startsWith("Bearer ")) {
                res.status(401).json({ error: "Unauthorized" });
                return;
            }

            const token = authHeader.slice(7);
            const decodedToken = await admin.auth().verifyIdToken(token);
            const uid = decodedToken.uid;

            const { clubId } = req.body;
            if (!clubId) {
                res.status(400).json({ error: "clubId required" });
                return;
            }

            // Add user to club's members
            await db.collection("clubs").doc(clubId).update({
                members: admin.firestore.FieldValue.arrayUnion(uid)
            });

            // Add club to user's joined clubs
            await db.collection("users").doc(uid).update({
                joinedClubs: admin.firestore.FieldValue.arrayUnion(clubId)
            });

            res.json({ success: true, message: "Joined club successfully" });
        } catch (error) {
            console.error("Error joining club:", error);
            res.status(500).json({ error: "Failed to join club" });
        }
    }
);

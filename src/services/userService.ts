import { db } from "../firebase";
import {
    collection,
    doc,
    setDoc,
    getDoc,
    query,
    where,
    getDocs,
    updateDoc,
    Timestamp
} from "firebase/firestore";
import type { UserProfile } from "../types/userRoles";
import { UserRole } from "../types/userRoles";
import { logger } from "../utils/logger";

const USERS_COLLECTION = "users";
const ADMIN_EMAIL_COLLECTION = "adminEmails";

/**
 * Check if an email is registered as admin email
 */
export const isAdminEmail = async (email: string): Promise<boolean> => {
    const normalizedEmail = email.toLowerCase();

    // Default admin email - always authorized
    if (normalizedEmail === "admin@ch.com") {
        return true;
    }

    try {
        const adminSnapshot = await getDoc(
            doc(db, ADMIN_EMAIL_COLLECTION, "authorized")
        );
        if (adminSnapshot.exists()) {
            const authorizedEmails = adminSnapshot.data().emails || [];
            return authorizedEmails.includes(normalizedEmail);
        }
        return false;
    } catch (error) {
        logger.error("Error checking admin email", error);
        return false;
    }
};

/**
 * Check if there's already an admin in the system
 */
export const adminExists = async (): Promise<boolean> => {
    try {
        const q = query(
            collection(db, USERS_COLLECTION),
            where("role", "==", UserRole.ADMIN)
        );
        const snapshot = await getDocs(q);
        return !snapshot.empty;
    } catch (error) {
        console.error("Error checking if admin exists:", error);
        return true; // Default to true for safety
    }
};

/**
 * Create a new user profile in Firestore
 * @param uid - User's Firebase UID
 * @param email - User's email
 * @param displayName - User's display name
 * @param requestedRole - Role requested during signup
 */
export const createUserProfile = async (
    uid: string,
    email: string,
    displayName: string,
    requestedRole: UserRole = UserRole.NORMAL_USER
): Promise<UserProfile> => {
    try {
        console.log("🔨 Creating user profile for UID:", uid, "Email:", email);
        let finalRole: UserRole = UserRole.NORMAL_USER;

        // Check if user is trying to register as admin
        if (requestedRole === UserRole.ADMIN) {
            console.log("🔑 Checking admin authorization for:", email);
            const isAuthorized = await isAdminEmail(email);
            console.log("✅ Admin authorized?", isAuthorized);
            if (!isAuthorized) {
                console.warn("❌ Email not authorized for admin role");
                finalRole = UserRole.NORMAL_USER;
            } else {
                const adminPresent = await adminExists();
                console.log("👤 Admin already exists?", adminPresent);
                if (adminPresent) {
                    console.warn("❌ Admin already exists");
                    finalRole = UserRole.NORMAL_USER;
                } else {
                    console.log("✅ Creating as ADMIN");
                    finalRole = UserRole.ADMIN;
                }
            }
        }

        // Check if user is trying to register as club head
        if (requestedRole === UserRole.CLUB_HEAD) {
            finalRole = UserRole.CLUB_HEAD;
        }

        const userProfile: UserProfile = {
            uid,
            email: email.toLowerCase(),
            role: finalRole,
            displayName,
            createdAt: new Date(),
            updatedAt: new Date()
        };

        console.log("💾 Writing profile document:", userProfile);
        await setDoc(doc(db, USERS_COLLECTION, uid), {
            ...userProfile,
            createdAt: Timestamp.fromDate(userProfile.createdAt),
            updatedAt: Timestamp.fromDate(userProfile.updatedAt)
        });

        console.log("✅ Profile created successfully with role:", finalRole);
        return userProfile;
    } catch (error) {
        console.error("❌ Error creating user profile:", error);
        throw error;
    }
};

/**
 * Get user profile by UID
 */
export const getUserProfile = async (uid: string): Promise<UserProfile | null> => {
    try {
        console.log("🔍 Looking up profile for UID:", uid);
        const docSnapshot = await getDoc(doc(db, USERS_COLLECTION, uid));
        console.log("📄 Document exists?", docSnapshot.exists());
        if (docSnapshot.exists()) {
            const data = docSnapshot.data();
            console.log("✅ Profile data found:", data);
            return {
                ...data,
                createdAt: data.createdAt.toDate(),
                updatedAt: data.updatedAt.toDate()
            } as UserProfile;
        }
        console.warn("❌ No document found in Firestore for UID:", uid);
        return null;
    } catch (error) {
        console.error("❌ Error getting user profile:", error);
        return null;
    }
};

/**
 * Update user role (admin only)
 */
export const updateUserRole = async (
    uid: string,
    newRole: keyof typeof UserRole
): Promise<boolean> => {
    try {
        // Prevent creating additional admins
        if (newRole === "ADMIN") {
            const adminPresent = await adminExists();
            if (adminPresent) {
                console.warn("Cannot create additional admins");
                return false;
            }
        }

        const roleValue = UserRole[newRole];
        await updateDoc(doc(db, USERS_COLLECTION, uid), {
            role: roleValue,
            updatedAt: Timestamp.now()
        });

        return true;
    } catch (error) {
        console.error("Error updating user role:", error);
        return false;
    }
};

/**
 * Promote user to club head (admin or existing club head for approval)
 */
export const promoteToClubHead = async (
    uid: string,
    clubId: string,
    approverRole: UserRole
): Promise<boolean> => {
    try {
        if (approverRole !== UserRole.ADMIN && approverRole !== UserRole.CLUB_HEAD) {
            console.warn("Cannot promote user to club head");
            return false;
        }

        await updateDoc(doc(db, USERS_COLLECTION, uid), {
            role: UserRole.CLUB_HEAD,
            clubId,
            updatedAt: Timestamp.now()
        });

        return true;
    } catch (error) {
        console.error("Error promoting user to club head:", error);
        return false;
    }
};

/**
 * Get all users with a specific role
 */
export const getUsersByRole = async (role: UserRole): Promise<UserProfile[]> => {
    try {
        const q = query(
            collection(db, USERS_COLLECTION),
            where("role", "==", role)
        );
        const snapshot = await getDocs(q);
        return snapshot.docs.map((doc: any) => {
            const data = doc.data();
            return {
                ...data,
                createdAt: data.createdAt.toDate(),
                updatedAt: data.updatedAt.toDate()
            } as UserProfile;
        });
    } catch (error) {
        console.error("Error getting users by role:", error);
        return [];
    }
};

/**
 * Get all users in the system
 */
export const getAllUsers = async (): Promise<UserProfile[]> => {
    try {
        const snapshot = await getDocs(collection(db, USERS_COLLECTION));
        return snapshot.docs.map((doc: any) => {
            const data = doc.data();
            return {
                ...data,
                createdAt: data.createdAt.toDate(),
                updatedAt: data.updatedAt.toDate()
            } as UserProfile;
        });
    } catch (error) {
        console.error("Error getting all users:", error);
        return [];
    }
};

/**
 * Initialize admin email in Firestore
 * This creates the authorized emails document if it doesn't exist
 */
export const initializeAdminEmails = async (): Promise<void> => {
    try {
        const adminRef = doc(db, ADMIN_EMAIL_COLLECTION, "authorized");
        const adminDoc = await getDoc(adminRef);
        if (!adminDoc.exists()) {
            await setDoc(adminRef, {
                emails: ["abc@g.com"]
            });
        } else {
            // Ensure abc@g.com is in the list
            const currentEmails = adminDoc.data().emails || [];
            if (!currentEmails.includes("abc@g.com")) {
                await updateDoc(adminRef, {
                    emails: [...currentEmails, "abc@g.com"]
                });
            }
        }
    } catch (error) {
        console.error("Error initializing admin emails:", error);
    }
};

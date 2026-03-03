import { auth } from "../firebase";

const FUNCTIONS_BASE_URL = (globalThis as any).__VITE_ENV__?.VITE_FUNCTIONS_URL ||
    (import.meta as any).env?.VITE_FUNCTIONS_URL ||
    "https://us-central1-c-hub-bytehunters.cloudfunctions.net";

// Get all events
export const getEvents = async () => {
    const response = await fetch(`${FUNCTIONS_BASE_URL}/getEvents`);
    if (!response.ok) throw new Error("Failed to fetch events");
    return response.json();
};

// Create event
export const createEvent = async (eventData: any) => {
    const user = auth.currentUser;
    if (!user) throw new Error("User not authenticated");

    const token = await user.getIdToken();

    const response = await fetch(`${FUNCTIONS_BASE_URL}/createEvent`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`,
        },
        body: JSON.stringify(eventData),
    });

    if (!response.ok) throw new Error("Failed to create event");
    return response.json();
};

// Update event
export const updateEvent = async (eventId: string, eventData: any) => {
    const user = auth.currentUser;
    if (!user) throw new Error("User not authenticated");

    const token = await user.getIdToken();

    const response = await fetch(
        `${FUNCTIONS_BASE_URL}/updateEvent?eventId=${eventId}`,
        {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`,
            },
            body: JSON.stringify(eventData),
        }
    );

    if (!response.ok) throw new Error("Failed to update event");
    return response.json();
};

// Delete event
export const deleteEvent = async (eventId: string) => {
    const user = auth.currentUser;
    if (!user) throw new Error("User not authenticated");

    const token = await user.getIdToken();

    const response = await fetch(
        `${FUNCTIONS_BASE_URL}/deleteEvent?eventId=${eventId}`,
        {
            method: "DELETE",
            headers: {
                "Authorization": `Bearer ${token}`,
            },
        }
    );

    if (!response.ok) throw new Error("Failed to delete event");
    return response.json();
};

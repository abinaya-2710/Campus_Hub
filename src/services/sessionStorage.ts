/**
 * Session Management Service
 * Handles caching and persistence of user session data
 * Uses both sessionStorage (per-tab, cleared on close) and localStorage (persistent)
 */

import type { UserProfile } from "../types/userRoles";
import { logger } from "../utils/logger";

export interface CachedSession {
    userId: string;
    email: string;
    profile: UserProfile;
    cachedAt: number;
}

const SESSION_KEYS = {
    USER_DATA: "chub:session:user",
    PROFILE_DATA: "chub:session:profile",
    CACHE_TIME: "chub:session:time",
    CACHE_DURATION: 24 * 60 * 60 * 1000 // 24 hours
};

/**
 * Save user session to sessionStorage (fast, per-tab)
 * Also saves to localStorage (persistent across sessions)
 */
export const saveSession = (userId: string, email: string, profile: UserProfile): void => {
    try {
        // Session storage - cleared when tab closes
        sessionStorage.setItem(SESSION_KEYS.USER_DATA, JSON.stringify({ userId, email }));
        sessionStorage.setItem(SESSION_KEYS.PROFILE_DATA, JSON.stringify(profile));
        sessionStorage.setItem(SESSION_KEYS.CACHE_TIME, Date.now().toString());

        // Local storage - persists beyond tab close
        localStorage.setItem(SESSION_KEYS.USER_DATA, JSON.stringify({ userId, email }));
        localStorage.setItem(SESSION_KEYS.PROFILE_DATA, JSON.stringify(profile));
        localStorage.setItem(SESSION_KEYS.CACHE_TIME, Date.now().toString());

        logger.success("Session cached", { userId });
    } catch (error) {
        logger.warn("Failed to save session", error);
    }
};

/**
 * Retrieve session from cache (sessionStorage first, then localStorage)
 */
export const getSession = (): CachedSession | null => {
    try {
        // Check sessionStorage first (faster, same tab only)
        let userStr = sessionStorage.getItem(SESSION_KEYS.USER_DATA);
        let profileStr = sessionStorage.getItem(SESSION_KEYS.PROFILE_DATA);

        // Fallback to localStorage if sessionStorage empty
        if (!userStr || !profileStr) {
            userStr = localStorage.getItem(SESSION_KEYS.USER_DATA);
            profileStr = localStorage.getItem(SESSION_KEYS.PROFILE_DATA);
        }

        if (userStr && profileStr) {
            const user = JSON.parse(userStr);
            const profile = JSON.parse(profileStr);
            const cachedAt = parseInt(
                sessionStorage.getItem(SESSION_KEYS.CACHE_TIME) ||
                localStorage.getItem(SESSION_KEYS.CACHE_TIME) ||
                "0"
            );

            // Check if cache is still fresh
            if (Date.now() - cachedAt < SESSION_KEYS.CACHE_DURATION) {
                return {
                    userId: user.userId,
                    email: user.email,
                    profile,
                    cachedAt
                };
            }
        }
        return null;
    } catch (error) {
        logger.warn("Failed to retrieve session", error);
        return null;
    }
};

/**
 * Clear all session data
 */
export const clearSession = (): void => {
    try {
        // Clear sessionStorage
        sessionStorage.removeItem(SESSION_KEYS.USER_DATA);
        sessionStorage.removeItem(SESSION_KEYS.PROFILE_DATA);
        sessionStorage.removeItem(SESSION_KEYS.CACHE_TIME);

        // Clear localStorage
        localStorage.removeItem(SESSION_KEYS.USER_DATA);
        localStorage.removeItem(SESSION_KEYS.PROFILE_DATA);
        localStorage.removeItem(SESSION_KEYS.CACHE_TIME);

        logger.success("Session cleared");
    } catch (error) {
        logger.warn("Failed to clear session", error);
    }
};

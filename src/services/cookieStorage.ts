/**
 * Cookie-based Session Storage
 * Persists authentication state across browser refreshes
 */

import type { UserProfile } from "../types/userRoles";
import { logger } from "../utils/logger";

const COOKIE_KEYS = {
  AUTH_TOKEN: "chub_auth_token",
  USER_ID: "chub_user_id",
  USER_EMAIL: "chub_user_email",
  USER_PROFILE: "chub_user_profile",
  COOKIE_DURATION: 7 * 24 * 60 * 60 * 1000 // 7 days
};

/**
 * Set a cookie with expiration
 */
const setCookie = (name: string, value: string, expirationMs: number): void => {
  try {
    const expirationDate = new Date(Date.now() + expirationMs);
    document.cookie = `${name}=${encodeURIComponent(value)}; path=/; expires=${expirationDate.toUTCString()}; SameSite=Lax`;
    logger.log("Cookie set", { name });
  } catch (error) {
    logger.warn("Failed to set cookie", error);
  }
};

/**
 * Get a cookie value
 */
const getCookie = (name: string): string | null => {
  try {
    const nameEQ = name + "=";
    const cookies = document.cookie.split(";");
    for (let cookie of cookies) {
      cookie = cookie.trim();
      if (cookie.indexOf(nameEQ) === 0) {
        return decodeURIComponent(cookie.substring(nameEQ.length));
      }
    }
    return null;
  } catch (error) {
    logger.warn("Failed to read cookie", error);
    return null;
  }
};

/**
 * Delete a cookie
 */
const deleteCookie = (name: string): void => {
  try {
    document.cookie = `${name}=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC;`;
    logger.log("Cookie deleted", { name });
  } catch (error) {
    logger.warn("Failed to delete cookie", error);
  }
};

/**
 * Save auth session to cookies
 */
export const saveAuthCookie = (
  userId: string,
  email: string,
  profile: UserProfile,
  firebaseToken: string
): void => {
  try {
    setCookie(COOKIE_KEYS.AUTH_TOKEN, firebaseToken, COOKIE_KEYS.COOKIE_DURATION);
    setCookie(COOKIE_KEYS.USER_ID, userId, COOKIE_KEYS.COOKIE_DURATION);
    setCookie(COOKIE_KEYS.USER_EMAIL, email, COOKIE_KEYS.COOKIE_DURATION);
    setCookie(
      COOKIE_KEYS.USER_PROFILE,
      JSON.stringify(profile),
      COOKIE_KEYS.COOKIE_DURATION
    );
    logger.success("Auth cookies saved", { userId });
  } catch (error) {
    logger.error("Failed to save auth cookies", error);
  }
};

/**
 * Get auth session from cookies
 */
export const getAuthCookie = (): {
  userId: string;
  email: string;
  profile: UserProfile;
  token: string;
} | null => {
  try {
    const token = getCookie(COOKIE_KEYS.AUTH_TOKEN);
    const userId = getCookie(COOKIE_KEYS.USER_ID);
    const email = getCookie(COOKIE_KEYS.USER_EMAIL);
    const profileStr = getCookie(COOKIE_KEYS.USER_PROFILE);

    if (token && userId && email && profileStr) {
      const profile = JSON.parse(profileStr);
      logger.success("Auth restored from cookies", { userId });
      return { userId, email, profile, token };
    }
    return null;
  } catch (error) {
    logger.warn("Failed to read auth cookies", error);
    return null;
  }
};

/**
 * Clear all auth cookies (logout)
 */
export const clearAuthCookies = (): void => {
  try {
    deleteCookie(COOKIE_KEYS.AUTH_TOKEN);
    deleteCookie(COOKIE_KEYS.USER_ID);
    deleteCookie(COOKIE_KEYS.USER_EMAIL);
    deleteCookie(COOKIE_KEYS.USER_PROFILE);
    logger.success("Auth cookies cleared");
  } catch (error) {
    logger.error("Failed to clear auth cookies", error);
  }
};

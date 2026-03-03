import React, { useEffect, useState } from "react";
import { auth } from "../firebase";
import { onAuthStateChanged } from "firebase/auth";
import type { UserProfile } from "../types/userRoles";
import { rolePermissions, UserRole } from "../types/userRoles";
import { getUserProfile, createUserProfile, initializeAdminEmails } from "./userService";
import { saveSession, getSession, clearSession } from "./sessionStorage";
import { saveAuthCookie, getAuthCookie, clearAuthCookies } from "./cookieStorage";
import { AuthContext } from "./authContextType";
import { logger } from "../utils/logger";

type FirebaseUser = any;

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    // Try to restore from cookies first (survives refresh)
    const [cachedProfile] = useState(() => {
        const cookieAuth = getAuthCookie();
        if (cookieAuth) {
            logger.success("Restored from cookies", { userId: cookieAuth.userId });
            return cookieAuth.profile;
        }
        return getSession()?.profile || null;
    });
    const [currentUser, setCurrentUser] = useState<FirebaseUser | null>(null);
    const [userProfile, setUserProfile] = useState<UserProfile | null>(cachedProfile);
    const [isLoading, setIsLoading] = useState(true); // Always start loading to verify auth state

    const logout = async () => {
        try {
            setUserProfile(null);
            clearSession();
            clearAuthCookies();
            logger.success("User logged out");
        } catch (error) {
            logger.error("Error during logout", error);
        }
    };

    useEffect(() => {
        // Initialize admin emails on startup
        initializeAdminEmails().catch(err =>
            logger.error("Error initializing admin emails", err)
        );

        if (cachedProfile) {
            logger.success("Restored from cache");
        }

        // Firebase auth state verification
        const unsubscribe = onAuthStateChanged(auth, async (user: any) => {
            logger.log("Auth state changed", { email: user?.email });
            setCurrentUser(user);

            if (user) {
                try {
                    logger.log("Fetching profile", { uid: user.uid });
                    let profile = await getUserProfile(user.uid);
                    logger.log("Profile fetched", profile);

                    if (!profile) {
                        logger.warn("No profile found - Creating fallback profile", { uid: user.uid });
                        // Create a default profile if it doesn't exist
                        const isAdmin = (user.email?.toLowerCase() === "admin@ch.com");
                        const fallbackRole = isAdmin ? UserRole.ADMIN : UserRole.NORMAL_USER;

                        logger.log("Creating fallback profile", { role: fallbackRole });
                        try {
                            await createUserProfile(
                                user.uid,
                                user.email || "",
                                user.displayName || user.email?.split("@")[0] || "User",
                                fallbackRole
                            );
                            // Wait a moment for Firestore to sync
                            await new Promise(resolve => setTimeout(resolve, 500));
                            profile = await getUserProfile(user.uid);
                            logger.success("Fallback profile created and loaded");
                        } catch (createErr) {
                            logger.error("Failed to create fallback profile", createErr);
                            // Use in-memory profile as last resort
                            profile = {
                                uid: user.uid,
                                email: user.email || "",
                                role: fallbackRole,
                                displayName: user.displayName || user.email?.split("@")[0] || "User",
                                createdAt: new Date(),
                                updatedAt: new Date()
                            };
                            logger.success("Using in-memory fallback profile");
                        }
                    }

                    if (profile) {
                        setUserProfile(profile);
                        saveSession(user.uid, user.email || "", profile);
                        // Save to cookies for persistence across refreshes
                        const token = await user.getIdToken();
                        saveAuthCookie(user.uid, user.email || "", profile, token);
                        logger.success("Session updated from Firebase", { role: profile.role });
                    } else {
                        logger.error("Still no profile after creation attempt - using fallback");
                        // Use minimal fallback profile to prevent infinite loading
                        const isAdmin = (user.email?.toLowerCase() === "admin@ch.com");
                        const fallbackRole = isAdmin ? UserRole.ADMIN : UserRole.NORMAL_USER;
                        const fallbackProfile = {
                            uid: user.uid,
                            email: user.email || "",
                            role: fallbackRole,
                            displayName: user.displayName || user.email?.split("@")[0] || "User",
                            createdAt: new Date(),
                            updatedAt: new Date()
                        };
                        setUserProfile(fallbackProfile);
                        saveSession(user.uid, user.email || "", fallbackProfile);
                        // Save to cookies for persistence
                        try {
                            const token = await user.getIdToken();
                            saveAuthCookie(user.uid, user.email || "", fallbackProfile, token);
                        } catch (tokenErr) {
                            logger.warn("Failed to get ID token for cookie save", tokenErr);
                        }
                    }
                } catch (error) {
                    logger.error("Error fetching user profile", error);
                    // Use fallback profile to prevent loading forever
                    const isAdmin = (user.email?.toLowerCase() === "admin@ch.com");
                    const fallbackRole = isAdmin ? UserRole.ADMIN : UserRole.NORMAL_USER;
                    const fallbackProfile = {
                        uid: user.uid,
                        email: user.email || "",
                        role: fallbackRole,
                        displayName: user.displayName || user.email?.split("@")[0] || "User",
                        createdAt: new Date(),
                        updatedAt: new Date()
                    };
                    setUserProfile(fallbackProfile);
                    saveSession(user.uid, user.email || "", fallbackProfile);
                    // Save to cookies for persistence
                    try {
                        const token = await user.getIdToken();
                        saveAuthCookie(user.uid, user.email || "", fallbackProfile, token);
                    } catch (tokenErr) {
                        logger.warn("Failed to get ID token for cookie save", tokenErr);
                    }
                }
            } else {
                logger.log("User logged out");
                setUserProfile(null);
                clearSession();
                clearAuthCookies();
            }

            setIsLoading(false);
        });

        return unsubscribe;
    }, [cachedProfile]);

    const canPerformAction = (
        action: "canCreateClubs" | "canManageClubs" | "canApproveMembers" | "canCreateEvents" | "canManageAllUsers" | "canDeleteClubs" | "canDeleteUsers"
    ): boolean => {
        if (!userProfile) return false;
        const permissions = rolePermissions[userProfile.role];
        return (permissions as unknown as Record<string, boolean>)[action];
    };

    return (
        <AuthContext.Provider
            value={{
                currentUser,
                userProfile,
                isLoading,
                canPerformAction,
                userRole: userProfile?.role || null,
                logout
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

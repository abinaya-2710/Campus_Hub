import { createContext } from "react";
import type { UserProfile, UserRole } from "../types/userRoles";

type FirebaseUser = any;

export interface AuthContextType {
    currentUser: FirebaseUser | null;
    userProfile: UserProfile | null;
    isLoading: boolean;
    canPerformAction: (
        action:
            | "canCreateClubs"
            | "canManageClubs"
            | "canApproveMembers"
            | "canCreateEvents"
            | "canManageAllUsers"
            | "canDeleteClubs"
            | "canDeleteUsers"
    ) => boolean;
    userRole: UserRole | null;
    logout?: () => Promise<void>;
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

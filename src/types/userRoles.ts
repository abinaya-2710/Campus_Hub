/**
 * User Role Hierarchy
 * - NORMAL_USER: Standard user, can join clubs and attend events
 * - CLUB_HEAD: Can manage their specific club, approve members, organize events
 * - ADMIN: System administrator, can manage all clubs and users (only ONE admin allowed)
 */

export const UserRole = {
    NORMAL_USER: "normal_user",
    CLUB_HEAD: "club_head",
    ADMIN: "admin"
} as const;

export type UserRole = typeof UserRole[keyof typeof UserRole];

export interface UserProfile {
    uid: string;
    email: string;
    role: UserRole;
    displayName?: string;
    clubId?: string; // For club heads, their main club
    createdAt: Date;
    updatedAt: Date;
}

export interface UserPermissions {
    canCreateClubs: boolean;
    canManageClubs: boolean;
    canApproveMembers: boolean;
    canCreateEvents: boolean;
    canManageAllUsers: boolean;
    canDeleteClubs: boolean;
    canDeleteUsers: boolean;
}

// Role-based permissions
export const rolePermissions: Record<UserRole, UserPermissions> = {
    [UserRole.NORMAL_USER]: {
        canCreateClubs: false,
        canManageClubs: false,
        canApproveMembers: false,
        canCreateEvents: false,
        canManageAllUsers: false,
        canDeleteClubs: false,
        canDeleteUsers: false
    },
    [UserRole.CLUB_HEAD]: {
        canCreateClubs: true,
        canManageClubs: true,
        canApproveMembers: true,
        canCreateEvents: true,
        canManageAllUsers: false,
        canDeleteClubs: false,
        canDeleteUsers: false
    },
    [UserRole.ADMIN]: {
        canCreateClubs: true,
        canManageClubs: true,
        canApproveMembers: true,
        canCreateEvents: true,
        canManageAllUsers: true,
        canDeleteClubs: true,
        canDeleteUsers: true
    }
};

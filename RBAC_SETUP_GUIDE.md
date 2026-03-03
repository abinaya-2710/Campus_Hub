# Role-Based Access Control (RBAC) Setup Guide

## Quick Overview
Campus Hub uses three user roles with different permissions:
- **Normal User**: Can join clubs and view events
- **Club Head**: Can create events for their club
- **Admin**: Can manage all users and promote others to club head

## Step 1: Deploy Cloud Functions

The following functions have been created/updated:

### New Functions
1. `promoteToClubHead` - Admin only, promotes users to club head
2. `joinClub` - Allows users to join clubs

### Updated Functions
1. `createEvent` - Now validates user is club head or admin
2. `updateEvent` - Enhanced with role validation
3. `deleteEvent` - Enhanced with role validation

**To deploy:**
```bash
cd functions
firebase deploy --only functions
```

## Step 2: Update Firestore Rules

The `firestore.rules` file includes:
- Role-based read/write permissions
- User profile protection
- Event and club management rules
- Admin-only operations

**To deploy:**
```bash
firebase deploy --only firestore:rules
```

## Step 3: Add Initial Admin User

Set up your first admin (can only be done via Firebase Admin SDK):

```typescript
// In your backend or Firebase CLI
const admin = require('firebase-admin');
const db = admin.firestore();

const adminEmail = 'admin@campushub.edu';
const adminUid = 'uid_of_admin_user'; // From Firebase Auth

// Add to adminEmails
await db.collection('adminEmails').doc(adminEmail).set({
  email: adminEmail,
  created: new Date()
});

// Update user document
await db.collection('users').doc(adminUid).update({
  role: 'admin'
});
```

## Step 4: Test the Flow

### Test 1: Create Normal User
1. Go to `/` (Sign Up page)
2. Fill in name, email, password
3. Accept terms and sign up
4. You're redirected to `/dashboard` with `normal_user` role

### Test 2: Promote to Club Head (Admin Only)
1. Sign in as admin (from Step 3)
2. Go to `/admin`
3. Click "Manage Users" tab
4. Select a normal user
5. Click "Promote to Club Head..." and select a club
6. User is now promoted

### Test 3: Create Event (Club Head)
1. Sign in as club head
2. On `/dashboard`, you'll see "Create Event" button
3. Click it to go to `/create-event`
4. Fill in event details and submit
5. Event is stored in Firestore

### Test 4: Normal User Cannot Create Event
1. Sign in as normal user
2. Go to `/create-event` directly
3. You'll see "Access Denied" message

## Cloud Function Details

### promoteToClubHead
```
POST /promoteToClubHead
Headers:
  Authorization: Bearer {idToken}
  Content-Type: application/json

Body:
{
  "userId": "user_uid",
  "clubId": "club_id"
}

Response:
{ "success": true, "message": "User promoted to club head" }
```

### joinClub
```
POST /joinClub
Headers:
  Authorization: Bearer {idToken}
  Content-Type: application/json

Body:
{
  "clubId": "club_id"
}

Response:
{ "success": true, "message": "Joined club successfully" }
```

### createEvent (Updated)
```
POST /createEvent
Headers:
  Authorization: Bearer {idToken}
  Content-Type: application/json

Body:
{
  "title": "Event Title",
  "description": "Description",
  "date": "2026-03-15",
  "time": "14:30",
  "location": "Location",
  "capacity": 100,
  "clubId": "club_id"
}

Validation:
- User must be authenticated
- User role must be "club_head" or "admin"
- If validation fails: Response 403 "Only club heads can create events"
```

## Frontend Components

### CreateEvent Component
- Route: `/create-event`
- Permission: Club head or admin only
- Features:
  - Event form with title, description, date, time, location, capacity
  - Role validation with access denied message
  - Success notification redirects to `/dashboard`
  - Error handling and loading states

### AdminPanel Component
- Route: `/admin`
- Permission: Admin only
- Features:
  - User tab: Lists all users, allows promoting to club head
  - Club tab: Lists all clubs with member counts
  - Role-based UI updates

### Dashboard Updates
- Shows different quick action cards based on role
- Club heads see "Create Event" button
- Admins see "Admin Panel" button
- Role displayed in welcome section with color coding

## Firestore Collections Structure

### users/{uid}
```json
{
  "uid": "user_uid",
  "email": "user@email.com",
  "displayName": "User Name",
  "role": "normal_user|club_head|admin",
  "clubId": "club_id (if club_head)",
  "joinedClubs": ["club_id1", "club_id2"],
  "createdAt": timestamp,
  "updatedAt": timestamp
}
```

### clubs/{clubId}
```json
{
  "id": "club_id",
  "name": "Club Name",
  "description": "Club description",
  "clubHeadId": "user_uid",
  "members": ["uid1", "uid2"],
  "createdAt": timestamp
}
```

### events/{eventId}
```json
{
  "id": "event_id",
  "title": "Event Title",
  "description": "Description",
  "date": "2026-03-15",
  "time": "14:30",
  "location": "Location",
  "capacity": 100,
  "createdBy": "user_uid",
  "clubId": "club_id",
  "attendees": ["uid1", "uid2"],
  "createdAt": timestamp
}
```

## Troubleshooting

### "Only club heads can create events"
- User trying to create event as normal user
- Solution: Ask admin to promote user to club head first

### 403 Forbidden in Admin Panel
- Non-admin trying to access `/admin`
- Solution: Only admins can access admin panel

### User not created in Firestore
- User signed up but profile not in Firestore
- Check `createUserProfile` in authContext to ensure it's called

### Cloud Function errors
- Check Firebase Logs: `firebase functions:log`
- Verify CORS settings in Cloud Functions
- Ensure idToken is being sent in Authorization header

## Environment Variables

Add to `.env.local`:
```
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_CLOUD_FUNCTION_URL=https://us-central1-your-project.cloudfunctions.net
```

## Summary of Changes

### New Files
1. `src/pages/CreateEvent.tsx` - Event creation page
2. `src/pages/AdminPanel.tsx` - Admin management panel

### Updated Files
1. `functions/src/index.ts` - Added/updated Cloud Functions
2. `src/pages/Dashboard.tsx` - Role-based UI with action buttons
3. `src/app/App.tsx` - Added routes for new pages
4. `firestore.rules` - Role-based Firestore rules (already updated)
5. `src/app/components/SignUpForm.tsx` - Uses React Router

### Key Features
- ✅ Three user roles with distinct permissions
- ✅ Cloud Function role validation
- ✅ Firestore security rules enforcement
- ✅ Admin panel for user management
- ✅ Event creation with role gating
- ✅ Club membership system
- ✅ Role-based UI visibility

## Next Steps

1. **Set up admin users** - Use Firebase Console or Admin SDK
2. **Create sample clubs** - Add clubs to Firestore
3. **Deploy to production** - Deploy Cloud Functions and rules
4. **Test all flows** - Test sign up, login, and role-based features
5. **Monitor logs** - Check Firebase logs for errors

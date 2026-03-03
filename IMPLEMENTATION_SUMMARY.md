# Campus Hub - Role-Based Access Control Implementation

## Overview
Campus Hub now enforces role-based access control (RBAC) with three user types:

### User Roles
1. **Normal User** - Can join clubs and attend events
2. **Club Head** - Can create events for their club and manage members
3. **Admin** - Can manage all users, clubs, and promote users to club head

## Features Implemented

### 1. Authentication & Authorization
- ✅ User roles stored in Firestore (`users` collection)
- ✅ Role-based permissions enforced in Cloud Functions
- ✅ Firestore security rules validate role-based access

### 2. Event Management
- ✅ Only club heads and admins can create events
- ✅ Cloud Function `createEvent` checks user role before allowing creation
- ✅ Events stored in Firestore with creator and club information
- ✅ Event creation form with role-based access control

### 3. Club Membership
- ✅ All users can join clubs via `joinClub` Cloud Function
- ✅ Club heads manage members
- ✅ Admin can promote users to club head

### 4. Admin Panel
- ✅ Admin-only dashboard at `/admin`
- ✅ User management - promote normal users to club head
- ✅ Club management - view and manage clubs
- ✅ Role-based UI visibility in dashboard

### 5. Firestore Rules
- ✅ Users can only read/modify their own profile (except admins)
- ✅ Club heads can only create events for their club
- ✅ All authenticated users can read public data (clubs, events)
- ✅ Admins have full control over all resources

## Database Structure

### Collections
```
users/
  {uid}/
    uid: string
    email: string
    displayName: string
    role: "normal_user" | "club_head" | "admin"
    clubId: string (for club heads)
    joinedClubs: array
    createdAt: timestamp
    updatedAt: timestamp

clubs/
  {clubId}/
    id: string
    name: string
    description: string
    clubHeadId: string (user uid)
    members: array
    createdAt: timestamp

events/
  {eventId}/
    id: string
    title: string
    description: string
    date: string
    time: string
    location: string
    capacity: number
    createdBy: string (user uid)
    clubId: string
    attendees: array
    createdAt: timestamp

adminEmails/
  {document}/
    email: string (Only set via Admin SDK)
```

## API Endpoints (Cloud Functions)

### getEvents
- **Method**: GET
- **Auth**: Optional
- **Permission**: Anyone can read
- **Returns**: List of all public events

### createEvent
- **Method**: POST
- **Auth**: Required (Bearer token)
- **Permission**: Club head or admin only
- **Body**:
  ```json
  {
    "title": "Event Title",
    "description": "Event description",
    "date": "2026-03-15",
    "time": "14:30",
    "location": "Main Hall",
    "capacity": 100,
    "clubId": "club_id"
  }
  ```
- **Returns**: Created event with ID

### updateEvent
- **Method**: PUT
- **Auth**: Required
- **Permission**: Event creator or admin
- **Params**: eventId
- **Returns**: Updated event

### deleteEvent
- **Method**: DELETE
- **Auth**: Required
- **Permission**: Event creator or admin
- **Params**: eventId
- **Returns**: Success confirmation

### promoteToClubHead
- **Method**: POST
- **Auth**: Required
- **Permission**: Admin only
- **Body**:
  ```json
  {
    "userId": "user_uid",
    "clubId": "club_id"
  }
  ```
- **Returns**: Success confirmation

### joinClub
- **Method**: POST
- **Auth**: Required
- **Permission**: Authenticated users
- **Body**:
  ```json
  {
    "clubId": "club_id"
  }
  ```
- **Returns**: Success confirmation

## Frontend Routes

| Route | Component | Permission | Description |
|-------|-----------|-----------|-------------|
| `/` | SignUpForm | Public | User registration |
| `/login` | Login | Public | User login |
| `/dashboard` | Dashboard | Authenticated | Main dashboard with role-based actions |
| `/create-event` | CreateEvent | Club Head/Admin | Event creation form |
| `/admin` | AdminPanel | Admin only | User and club management |
| `/terms-and-policy` | TermsAndPolicy | Public | Terms and privacy policy |

## Usage Flow

### New User Registration
1. User goes to `/` and fills signup form
2. Account created with `normal_user` role
3. Redirected to `/dashboard`

### Joining a Club
1. User views available clubs on dashboard
2. Clicks "Join Club"
3. `joinClub` function adds user to club members
4. User's `joinedClubs` array updated

### Creating an Event
1. Club head goes to `/create-event`
2. Non-club-heads see access denied message
3. Club head fills event form with details
4. `createEvent` function validates role and creates event
5. Event stored in Firestore with creator and club info

### Promoting to Club Head
1. Admin goes to `/admin`
2. Selects user from "Manage Users" tab
3. Chooses club to promote them to
4. `promoteToClubHead` function updates user role
5. User gains event creation permissions

## Security Measures

1. **JWT Validation**: All API endpoints validate Firebase ID tokens
2. **Role Enforcement**: Cloud Functions check user role before actions
3. **Firestore Rules**: Database-level security rules prevent unauthorized access
4. **CORS Protection**: Requests validated against allowed origins
5. **Ownership Validation**: Users can only modify their own resources (except admins)

## Environment Variables

Add to `.env.local`:
```
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_CLOUD_FUNCTION_URL=https://your-region-your-project.cloudfunctions.net
```

## Deployment Notes

### Firebase Setup
1. Create Cloud Functions from `functions/src/index.ts`
2. Deploy Firestore rules from `firestore.rules`
3. Set environment variables in Cloud Functions

### Local Testing
1. Use Firebase Emulator Suite
2. Test with mock user roles
3. Verify Cloud Function responses

## Future Enhancements
- [ ] Email notifications for event registrations
- [ ] Club recommendation system
- [ ] Advanced user search and filtering
- [ ] Event analytics and reporting
- [ ] Two-factor authentication
- [ ] User activity logging

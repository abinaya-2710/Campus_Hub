# ✅ Campus Hub - Admin Features & Database Status

## 🎯 Admin Permission Management

### ✅ Feature: Promote Users to Club Head
The admin can manage user roles from the **Admin Dashboard**.

**How it works:**
1. **Login as Admin** → Click **Admin** button in navbar
2. **Select Users** → Check boxes next to user names
3. **Promote to Club Head** → Click blue button
4. ✅ Selected users now have `role: "club_head"`

**Permissions Granted:**
- Can organize events
- Can manage their club
- Full access to event creation

### ✅ Feature: Demote Users to Normal User
1. **Select Club Heads** → Check boxes next to their names
2. **Demote to Normal User** → Click gray button
3. ✅ Users return to regular member status

---

## 🗄️ Database Status

### Collections Setup (Required Before Testing)

You need to create these collections in Firebase Console:

#### 1. **adminEmails** (Required for Signup)
```json
{
  "admin1": {
    "email": "admin@ch.com"
  }
}
```

#### 2. **users** (Core User Data)
```json
{
  "user1": {
    "displayName": "Admin User",
    "email": "admin@ch.com",
    "role": "admin",
    "createdAt": "2026-03-03T00:00:00Z",
    "updatedAt": "2026-03-03T00:00:00Z",
    "joinedClubs": ["club1"]
  }
}
```

#### 3. **clubs** (Club Listing)
```json
{
  "club1": {
    "name": "Tech Club",
    "description": "For tech enthusiasts",
    "president": "user1",
    "members": ["user1"],
    "createdAt": "2026-03-03T00:00:00Z",
    "updatedAt": "2026-03-03T00:00:00Z"
  }
}
```

#### 4. **events** (Events Display)
```json
{
  "event1": {
    "title": "Tech Workshop",
    "description": "Learn web development",
    "date": "2026-03-15",
    "time": "2:00 PM",
    "location": "Room 101",
    "club": "Tech Club",
    "clubId": "club1",
    "createdBy": "user1",
    "attendees": ["user1"],
    "createdAt": "2026-03-03T00:00:00Z"
  }
}
```

---

## 🚀 Deployment Checklist

### Step 1: Deploy Security Rules ✅ (Ready)
The security rules file (`firestore.rules`) is configured and ready.

**Via Firebase Console:**
1. Go to [Firebase Console](https://console.firebase.google.com/project/c-hub-bytehunters)
2. Navigate to **Firestore Database → Rules**
3. Copy rules from local `firestore.rules` file
4. Paste into editor
5. Click **Publish**

**Via CLI:**
```bash
cd d:\Hushh\Campus_Hub
npx firebase login
npx firebase deploy --only firestore
```

### Step 2: Create Collections & Sample Data ✅ (Manual)
See DATABASE_SETUP_GUIDE.md for detailed instructions

### Step 3: Test Admin Features ✅ (Ready to Test)
Once database is set up, follow these steps:

1. **Signup Process**
   - Go to signup page
   - Enter email: `admin@ch.com`
   - Create password
   - Should auto-detect admin email and create `role: "admin"`

2. **Login & Test Admin Dashboard**
   - Login with admin account
   - Should see **Admin** button in navbar
   - Click Admin → See users list
   - Select any user → Promote to Club Head

3. **Test Events Display**
   - Click **Events** in navbar
   - Should see "Tech Workshop" event
   - Verify date, time, location display

4. **Test Clubs Display**
   - Click **My Clubs** in navbar
   - Click **Explore Clubs** tab
   - Should see "Tech Club"
   - Click **Join Club**

---

## 📋 Admin Dashboard Controls

### User Management Table
| Column | Shows | Editable |
|--------|-------|----------|
| Email | User's email address | No |
| Name | Display name | No (via profile) |
| Role | admin / club_head / normal_user | Yes (checkboxes) |
| Joined | Account creation date | No |

### Action Buttons
- **Promote to Club Head** - Blue button, enables event creation
- **Demote to Normal User** - Gray button, removes event creation access

### Rules Applied
- Admins can only promote/demote non-admin users
- Changes take effect immediately
- User session needs refresh to see new role-based features

---

## 🔐 Role-Based Access

### Admin Role
```
Can:
✅ View all users
✅ Promote/demote users
✅ Create events
✅ View all clubs and events
✅ Access admin dashboard
```

### Club Head Role
```
Can:
✅ Create events
✅ Manage their club
✅ View clubs (own and others)
✅ Join clubs
```

### Normal User Role
```
Can:
✅ See events
✅ See clubs
✅ Join clubs
✅ View profile
```

---

## 🌐 Feature Integration

### Admin Tab in Navbar
The **Admin** button appears on these pages for admin users:
- ✅ Dashboard
- ✅ Events
- ✅ My Clubs
- ✅ My Profile

**Styling:**
- Purple background (distinguishes from Logout)
- Appears only for `role === "admin"`
- Leads to `/admin` route

### Event Registration
Admin can:
1. Create events with title, date, time, location
2. Specify max attendees
3. Track who's attending
4. Edit event details

---

## 🧪 Testing Workflow

### Full End-to-End Test
```
1. Deploy Firestore rules
2. Create sample collections
3. Signup as admin@ch.com
4. Login & verify Admin button appears
5. Go to Admin dashboard
6. Create test user via signup
7. Promote test user to Club Head
8. Login as test user
9. Create an event
10. Login as admin
11. View event in Events list
```

---

## 📞 Support

### Common Issues

**Q: Admin button doesn't appear**
A: Make sure your user account has `role: "admin"` in Firestore `users` collection

**Q: Can't promote users**
A: Verify Firestore rules are deployed and adminEmails collection exists

**Q: Events don't show up**
A: Check that:
- Event date is in future (or equals today)
- Event document has all required fields
- User is authenticated

**Q: Permission denied error**
A: Complete Step 1 (deploy rules) first

---

## ✨ Next Features to Add

- Event RSVP management for attendees
- Club member management
- Event attendance tracking
- Admin analytics dashboard
- Email notifications
- Bulk CSV import for users

---

**Status**: ✅ Ready for Testing
**Last Updated**: March 3, 2026
**Firebase Project**: c-hub-bytehunters

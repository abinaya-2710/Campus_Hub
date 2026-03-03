# Campus Hub - Database Setup Guide

## ✅ Current Status
- Firebase Project: **c-hub-bytehunters** (configured)
- Firestore Database: **Created** (nam5 region)
- Security Rules: **Ready** (in `firestore.rules`)
- Indexes: **Ready** (in `firestore.indexes.json`)

## 🚀 Step 1: Deploy Security Rules

### Option A: Using Firebase Console (Easiest)
1. Go to [Firebase Console](https://console.firebase.google.com)
2. Select project **c-hub-bytehunters**
3. Go to **Firestore Database → Rules**
4. Copy contents from `firestore.rules` file
5. Paste into the Rules editor
6. Click **Publish**

### Option B: Using Firebase CLI (Recommended)
```bash
cd d:\Hushh\Campus_Hub
npx firebase login  # If not already logged in
npx firebase deploy --only firestore
```

---

## 🚀 Step 2: Add Sample Collections & Data

### Option A: Manual Entry (Via Firebase Console)
Go to **Firestore Database → Data** tab:

#### 1. Create `adminEmails` Collection
- Click **Start collection** → Name: `adminEmails`
- Add document ID: `admin1`
- Add field: `email` (string) = `admin@ch.com`
- Click **Save**

#### 2. Create `users` Collection  
- Click **Start collection** → Name: `users`
- Add document ID: `user1` (or your Firebase Auth UID)
- Add fields:
  ```
  displayName: "Admin User" (string)
  email: "admin@ch.com" (string)
  role: "admin" (string)
  createdAt: March 3, 2026, 00:00:00 UTC (timestamp)
  updatedAt: March 3, 2026, 00:00:00 UTC (timestamp)
  joinedClubs: [] (array)
  ```
- Click **Save**

#### 3. Create `clubs` Collection
- Click **Start collection** → Name: `clubs`
- Add document ID: `club1`
- Add fields:
  ```
  name: "Tech Club" (string)
  description: "For tech enthusiasts" (string)
  president: "user1" (string)
  members: ["user1"] (array)
  createdAt: March 3, 2026, 00:00:00 UTC (timestamp)
  updatedAt: March 3, 2026, 00:00:00 UTC (timestamp)
  ```
- Click **Save**

#### 4. Create `events` Collection
- Click **Start collection** → Name: `events`
- Add document ID: `event1`
- Add fields:
  ```
  title: "Tech Workshop" (string)
  description: "Learn web development" (string)
  date: "2026-03-15" (string)
  time: "2:00 PM" (string)
  location: "Room 101" (string)
  club: "Tech Club" (string)
  clubId: "club1" (string)
  createdBy: "user1" (string)
  attendees: ["user1"] (array)
  maxAttendees: null or omit (number)
  createdAt: March 3, 2026, 00:00:00 UTC (timestamp)
  ```
- Click **Save**

---

### Option B: Automatic Seed (Via JavaScript)
You can run this code in the browser console or create a seed script:

```javascript
// Add this to a browser console or Node.js script
import { db } from './src/firebase';
import { collection, doc, setDoc, serverTimestamp } from 'firebase/firestore';

async function seedDatabase() {
  try {
    const now = new Date();
    
    // 1. Add admin user
    await setDoc(doc(db, 'users', 'user1'), {
      displayName: 'Admin User',
      email: 'admin@ch.com',
      role: 'admin',
      createdAt: now,
      updatedAt: now,
      joinedClubs: []
    });
    
    // 2. Add tech club
    await setDoc(doc(db, 'clubs', 'club1'), {
      name: 'Tech Club',
      description: 'For tech enthusiasts',
      president: 'user1',
      members: ['user1'],
      createdAt: now,
      updatedAt: now
    });
    
    // 3. Add sample event
    await setDoc(doc(db, 'events', 'event1'), {
      title: 'Tech Workshop',
      description: 'Learn web development',
      date: '2026-03-15',
      time: '2:00 PM',
      location: 'Room 101',
      club: 'Tech Club',
      clubId: 'club1',
      createdBy: 'user1',
      attendees: ['user1'],
      createdAt: now
    });
    
    console.log('✅ Database seeded successfully!');
  } catch (error) {
    console.error('❌ Error seeding database:', error);
  }
}

seedDatabase();
```

---

## ✅ Step 3: Test Admin Functionality

### Test User Role Management
1. **Sign up** a normal user (or use the admin account)
2. **Login as admin** → Click **Admin** button in navbar
3. **Select a user** → Click **Promote to Club Head**
4. ✅ User should now have "club_head" role

### Test Events Display
1. **Logout** → **Login** as any user
2. Click **Events** in dashboard or navbar
3. ✅ You should see "Tech Workshop" event displayed

### Test Clubs Display
1. Click **My Clubs**
2. ✅ "Tech Club" should appear in "Explore Clubs"
3. **Join** the club
4. ✅ It now appears in "My Clubs" tab

---

## 📋 Database Schema Reference

### `users` Collection
```json
{
  "uid": {
    "displayName": "string",
    "email": "string",
    "role": "admin|club_head|normal_user",
    "createdAt": "timestamp",
    "updatedAt": "timestamp",
    "joinedClubs": ["string"],
    "phone": "string (optional)",
    "bio": "string (optional)"
  }
}
```

### `clubs` Collection
```json
{
  "clubId": {
    "name": "string",
    "description": "string",
    "president": "string (uid)",
    "members": ["string (uid)"],
    "createdAt": "timestamp",
    "updatedAt": "timestamp",
    "icon": "string (optional)"
  }
}
```

### `events` Collection
```json
{
  "eventId": {
    "title": "string",
    "description": "string",
    "date": "string (YYYY-MM-DD)",
    "time": "string (HH:MM AM/PM)",
    "location": "string",
    "club": "string (club name)",
    "clubId": "string",
    "createdBy": "string (uid)",
    "attendees": ["string (uid)"],
    "maxAttendees": "number (optional)",
    "createdAt": "timestamp"
  }
}
```

### `adminEmails` Collection
```json
{
  "documentId": {
    "email": "string (email to be promoted to admin)"
  }
}
```

---

## 🔐 Security Model

### User Roles
- **admin**: Full access to user management, can promote/demote users
- **club_head**: Can create events, manage their club
- **normal_user**: Can join clubs, attend events

### Collection Access
| Collection | Read | Create | Update | Delete |
|-----------|------|--------|--------|--------|
| users | Self only | Self | Self (except role) | Admin only |
| clubs | Authenticated | ??? | Club head | Admin only |
| events | Authenticated | Club head+ | Creator | Admin only |
| adminEmails | Admin SDK only | Admin SDK | Admin SDK | Admin SDK |

---

## ✔️ Verification Checklist

- [ ] Rules deployed to Firestore
- [ ] Indexes deployed to Firestore
- [ ] `adminEmails` collection created with admin emails
- [ ] `users` collection created with admin user
- [ ] `clubs` collection created with sample club
- [ ] `events` collection created with sample events
- [ ] Can sign up and login
- [ ] Admin can promote users to club head
- [ ] Users can see clubs and events
- [ ] Page refresh doesn't log out user (cookies working)

---

## 🆘 Troubleshooting

### Issue: Events page shows "No upcoming events"
**Solution**: 
- Make sure events have a future date (or change date to March 15, 2026)
- Check that event data matches the schema above
- Verify Firestore rules are deployed

### Issue: Admin button doesn't appear
**Solution**:
- Make sure your user has `role: "admin"` in Firestore
- Check browser console for errors
- Logout and login again

### Issue: "Permission denied" error in console
**Solution**:
- Deploy the security rules first
- Make sure adminEmails collection is set up (for signup)
- Check that your user role is correct in Firestore

---

## Next Steps
1. Deploy security rules (Step 1)
2. Create collections and sample data (Step 2)
3. Test all functionality (Step 3)
4. Create more clubs and events as needed

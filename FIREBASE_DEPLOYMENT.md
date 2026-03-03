# Firebase Deployment Guide

## Prerequisites
Make sure you have:
1. Firebase CLI installed: `npm install -g firebase-tools`
2. Logged in to Firebase: `firebase login`
3. Your Firebase project configured locally

## Deployment Steps

### Option 1: Deploy Everything (Recommended)
Run this command from the project root:

```bash
firebase deploy
```

This will deploy:
- ✅ Firestore Security Rules
- ✅ Firestore Indexes
- ✅ Cloud Functions (if any)
- ✅ Hosting (dist folder)

### Option 2: Deploy Only Firestore Resources
If you only want to update Firestore rules and indexes:

```bash
firebase deploy --only firestore
```

### Option 3: Deploy Only Specific Components
```bash
# Deploy only security rules
firebase deploy --only firestore:rules

# Deploy only indexes
firebase deploy --only firestore:indexes

# Deploy functions
firebase deploy --only functions

# Deploy hosting
firebase deploy --only hosting
```

## What Gets Deployed

### 1. **Security Rules** (`firestore.rules`)
- Enhanced validation for users, clubs, and events
- Role-based access control (normal_user, club_head, admin)
- Timestamp validation for data integrity
- Field validation for required properties

### 2. **Database Indexes** (`firestore.indexes.json`)
Performance indexes for faster queries:
- Events by club and date
- Events by creator and date
- Clubs by creation date
- Users by role and creation date

### 3. **Firebase Functions** (if deployed)
Located in `functions/` folder

## After Deployment

### Verify Deployment
1. Go to [Firebase Console](https://console.firebase.google.com)
2. Select your project `c-hub-bytehunters`
3. Check **Firestore Database** → **Rules** tab (should show your new rules)
4. Check **Firestore Database** → **Indexes** tab (should show the new indexes)

### Monitor Deployment Progress
- New composite indexes can take 5-30 minutes to build
- You'll see "Building" status in the Firestore Console
- Queries will be available once indexes are "Enabled"

## Troubleshooting

### Rules Validation Error
If you get a validation error when deploying:
```bash
firebase deploy --only firestore:rules --debug
```
This shows detailed error messages

### Index Deployment Issues
Check the Firestore console for:
- Status of each index (Creating, Enabled, etc.)
- Error details if any fail

### Rolling Back Changes
If something breaks, you can revert to previous rules:
1. Go to Firebase Console → Firestore → Rules
2. Click "Revisions" tab
3. Select a previous version
4. Click "Restore"

## Security Rules Explained

### User Access
- Users can read their own profile
- Admins can read/write any user profile and change roles
- Role changes are restricted to admin only

### Club Access
- All authenticated users can read clubs
- Only club_head and admin can create clubs
- Club presidents can update their club
- Only admins can delete clubs

### Event Access
- All authenticated users can read events
- Only club_head and admin can create events
- Event creators and admins can update events
- Only admins can delete events

### Data Validation
- All timestamps must be valid and not in the future
- Required fields are validated (name, title, date, etc.)
- Created fields are immutable (cannot be changed)

## Next Steps (Optional Enhancements)

1. **Email Verification**
   - Enable in Firebase Auth settings

2. **Cloud Storage (for images)**
   ```
   Rules for gs://your-project.appspot.com/
   ```

3. **Cloud Functions for Notifications**
   - Send emails on event creation
   - Clean up old data

4. **Backups**
   - Set automatic daily/weekly backups in Console

## Need Help?

Run this to test rules locally before deploying:
```bash
firebase emulators:start --only firestore
```

This starts a local Firestore emulator for testing your rules without affecting production.

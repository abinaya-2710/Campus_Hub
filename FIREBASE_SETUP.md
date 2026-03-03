# Firebase Setup Instructions

## Step 1: Install Firebase CLI Globally

```bash
npm install -g firebase-tools
```

If you get PowerShell execution policy errors on Windows, use Command Prompt (cmd.exe) instead of PowerShell.

## Step 2: Login to Firebase

```bash
firebase login
```

This will open a browser to authenticate. Make sure you're logged into the Google account that owns the Firebase project.

## Step 3: Initialize Firebase in Your Project

From the project root directory, run:

```bash
firebase init firestore
```

When prompted:
- **"Which Firebase features do you want to setup?"** → Select `Firestore` (space to select, Enter to confirm)
- **"Do you want to use the default project?"** → Choose your project `c-hub-bytehunters`
- **"What file should be used for Firestore Rules?"** → Press Enter (default `firestore.rules`)
- **"What file should be used for Firestore indexes?"** → Press Enter (default `firestore.indexes.json`)

This will create a `.firebaserc` file in your project root.

## Step 4: Deploy to Firebase

### Option A: Deploy Everything
```bash
firebase deploy
```

### Option B: Deploy Only Firestore
```bash
firebase deploy --only firestore
```

## What Gets Deployed

✅ **Security Rules** - Enhanced rules with validation and role-based access
✅ **Database Indexes** - Performance indexes for faster queries
✅ **Emulator Config** - Local testing support

## Deployment Timeline

- **Security Rules**: 🟢 Instant (5-10 seconds)
- **Indexes**: 🟡 Building (5-30 minutes depending on data size)
- **Status Check**: Firebase Console → Firestore → Indexes tab

## Verify Deployment

1. Go to [Firebase Console](https://console.firebase.google.com)
2. Select project `c-hub-bytehunters`
3. Go to **Firestore Database** → **Rules** tab
   - You should see your new enhanced rules code
4. Go to **Firestore Database** → **Indexes** tab
   - You should see indexes being built (Status: Creating → Enabled)

## Rollback (If Needed)

If something breaks after deployment:

1. Firebase Console → Firestore → **Rules** tab
2. Click **Revisions** (in the Rules editor)
3. Select a previous working version
4. Click **Restore**

## Common Issues

### "Project alias 'default' does not exist"
Run: `firebase init firestore` and select your project

### "Cannot find module 'firebase-tools'"
Run: `npm install -g firebase-tools`

### "You are not signed in"
Run: `firebase login`

### "Rules validation failed"
Run: `firebase deploy --only firestore:rules --debug` for detailed errors

## Next Steps (Optional)

1. **Enable Email Verification**
   - Firebase Console → Authentication → Email/Password
   - Enable "Email verify"

2. **Set Up Cloud Storage for Images**
   - Create `gs://c-hub-bytehunters.appspot.com` bucket rules

3. **Create Cloud Functions**
   - For email notifications, scheduled cleanup, etc.

4. **Enable Backups**
   - Firestore → Settings → Backups → Create daily/weekly schedules

## Configuration Files Reference

- `.firebaserc` - Firebase CLI configuration (created by init)
- `firebase.json` - Deployment configuration
- `firestore.rules` - Security rules for Firestore
- `firestore.indexes.json` - Query indexes for performance

---

**Questions?** Check Firebase Documentation:
- [Security Rules Guide](https://firebase.google.com/docs/firestore/security/get-started)
- [Indexes & Queries](https://firebase.google.com/docs/firestore/query-data/indexing)
- [Firebase CLI Reference](https://firebase.google.com/docs/cli)

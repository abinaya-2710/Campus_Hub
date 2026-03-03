# 🔧 Admin Operations Quick Reference

## 📍 Accessing Admin Dashboard

### From Any Page (for admins only):
1. Look for purple **Admin** button in top-right navbar
2. Click it → Goes to Admin Dashboard (`/admin`)

### Navigation Routes:
- Test URL: `http://localhost:5173/admin` (if running locally)
- Only accessible if `role === "admin"`
- Auto-redirects non-admins back to dashboard

---

## 🎛️ Admin Dashboard Controls

### User List
Shows all users in your Campus Hub

| Field | Info |
|-------|------|
| Email | User's email address |
| Name | Display name |
| Role | admin / club_head / normal_user |
| Joined | Date account was created |

### Select Users
- Use checkboxes to select one or more users
- **Check All** checkbox at the top to select all users

### Bulk Operations

#### Promote Users to Club Head
1. **Select** one or more users (checkbox)
2. Click **Promote to Club Head** (blue button)
3. ✅ Success message shows
4. Users now have `role: "club_head"`
5. They can now create events

#### Demote Users to Normal User
1. **Select** one or more club heads (checkbox)
2. Click **Demote to Normal User** (gray button)
3. ✅ Success message shows
4. Users return to `role: "normal_user"`
5. They lose event creation access

---

## 👥 User Role Reference

### Admin (`role: "admin"`)
```
Access:
- Admin Dashboard (this page)
- User management
- Can promote/demote anyone
- Can create events
- Full database access
```

### Club Head (`role: "club_head"`)
```
Access:
- Create events
- Manage their club
- View all events and clubs
- Cannot manage other users
```

### Normal User (`role: "normal_user"`)
```
Access:
- View events
- View clubs
- Join clubs
- View profile
- Cannot create events
```

---

## 💾 Database Operations

### What Happens When You Promote?
```
BEFORE:
{
  "users/user123": {
    "role": "normal_user",
    "email": "john@example.com",
    ...
  }
}

AFTER: (Click "Promote")
{
  "users/user123": {
    "role": "club_head",  ← CHANGED
    "email": "john@example.com",
    ...
  }
}
```

### What Happens When You Demote?
```
BEFORE:
{
  "users/user123": {
    "role": "club_head",
    ...
  }
}

AFTER: (Click "Demote")
{
  "users/user123": {
    "role": "normal_user",  ← CHANGED
    ...
  }
}
```

---

## 🎯 Common Admin Tasks

### Task: Make Someone able to create events
1. Go to Admin Dashboard
2. Find user in list
3. ☑️ Check their checkbox
4. Click **Promote to Club Head** button
5. ✅ Done! They can now create events

### Task: Remove event creation access
1. Go to Admin Dashboard
2. Find club head in list
3. ☑️ Check their checkbox
4. Click **Demote to Normal User** button
5. ✅ Done! They can no longer create events

### Task: Check when someone joined
1. Go to Admin Dashboard
2. Look at **Joined** column
3. Shows the date they signed up

### Task: See all emails on system
1. Go to Admin Dashboard
2. **Email** column shows all user emails
3. Can use for contact/communication

---

## ⚡ Keyboard Shortcuts

| Action | How |
|--------|-----|
| Refresh users | F5 (reload page) |
| Search user | Ctrl+F (browser find) |
| Sort table | Click column header |
| Select all | Click checkbox in header |
| Deselect all | Click checkbox again |

---

## 🚨 Important Notes

⚠️ **CANNOT be undone automatically**
- If you demote someone, they lose event creation access immediately
- Changes take effect in Firestore instantly

⚠️ **User must refresh browser**
- After role change, user needs to reload page to see updated permissions
- Or logout/login again

⚠️ **Admin actions are recorded**
- All changes are saved in Firestore with timestamps
- Can be audited in `users` collection

---

## 🔐 Security

### What you CANNOT do:
❌ Cannot demote yourself as admin
❌ Cannot edit user email through admin panel
❌ Cannot delete users (not implemented)
❌ Cannot create new users (only via signup)

### What you CAN do:
✅ Promote/demote any user
✅ View all user information
✅ Create events
✅ See complete user list with timestamps

---

## 🧪 Testing Scenarios

### Scenario 1: Give Friend Event Creation Rights
```
1. Friend signs up normally
2. Friend has role: "normal_user"
3. You: Go to Admin → Find friend
4. You: Select checkbox → Click "Promote to Club Head"
5. Friend: Refresh browser → Now can create events
```

### Scenario 2: Remove Event Creation From Club Head
```
1. Club head created events
2. You need to remove their access
3. You: Go to Admin → Find club head
4. You: Select checkbox → Click "Demote to Normal User"
5. Club head: Loses ability to create new events
```

### Scenario 3: Audit User List
```
1. Need to see who joined when
2. Go to Admin Dashboard
3. See all users with "Joined" dates
4. Can sort by clicking column headers
```

---

## 💡 Pro Tips

**Tip 1**: Use checkboxes at top to select/deselect all users quickly

**Tip 2**: Keep list organized by promoting regularly (promotes show as "club_head" in role column)

**Tip 3**: Check "Joined" column to see when users signed up (newest first)

**Tip 4**: If events aren't showing, check that club head created them (check `createdBy` field)

**Tip 5**: Always refresh your browser after role changes to see new permissions take effect

---

## 📊 Operation Counts

| Operation | Time | Revert |
|-----------|------|--------|
| Promote 1 user | <1 sec | Demote |
| Demote 1 user | <1 sec | Promote |
| View 100 users | ~2 sec | N/A |
| Bulk promote 10 users | ~1 sec | Demote all |

---

## ✅ Verification

**After promoting someone, verify they can:**
- ✅ See "Create Event" button on dashboard
- ✅ Navigate to `/create-event` page
- ✅ Fill out event form
- ✅ See their event in events list

**After demoting someone, verify they:**
- ✅ See "Create Event" button is gone
- ✅ Cannot access `/create-event` page (redirects)
- ✅ Still can view/join clubs and events

---

**Last Updated**: March 3, 2026
**For Support**: See STATUS_SUMMARY.md
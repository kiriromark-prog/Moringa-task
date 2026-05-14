# MoringaTaskFlow

This file explains what the project is and how it works.

MoringaTaskFlow is a simple web app for managing student tasks.
People can sign up, log in, add tasks, see a calendar of deadlines, and update their profile.
The app keeps information in the browser, so it works without a server.

## Main features

- Login and signup flow using browser localStorage
- Dashboard with task summary and quick actions
- Task management page with filters, completion toggles, and deletion
- Calendar view showing tasks by due date
- Profile page for editing the user name and deleting the account

## Project structure

- `src/main.jsx` — application entry point that renders `App`
- `src/App.jsx` — top-level router mapping URLs to pages
- `src/components/Sidebar.jsx` — shared navigation sidebar for authenticated pages
- `src/pages/Login.jsx` — login and signup page
- `src/pages/Home.jsx` — dashboard page
- `src/pages/Tasks.jsx` — create and manage tasks
- `src/pages/Calendar.jsx` — view tasks in a calendar layout
- `src/pages/Profile.jsx` — user profile and account settings

## How to run

1. Install dependencies:

```bash
npm install
```

2. Start the development server:

```bash
npm run dev
```

3. Open the app in your browser at the address shown in the terminal.

## Notes for presentation

- The app does not require a backend; data persistence is handled locally.
- The login page doubles as a signup page for first-time users.
- The sidebar links show how the pages are connected.
- The profile page includes a "Danger Zone" section to explain account deletion.

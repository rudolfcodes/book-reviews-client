# Swiss Book Club – Web App

Web app for finding, creating and joining local book clubs in Switzerland. Members sign up with email verification, create a club through a multi-step form and view club pages with reading details, a location map and organiser info.

Built with **Next.js 14 (App Router), TypeScript, React Query, React Hook Form, Tailwind CSS + DaisyUI, Leaflet and Tiptap**. It talks to the [book-reviews-backend-api](https://github.com/rudolfcodes/book-reviews-backend-api).

## Why

Book clubs are hard to find. Most live in closed chat groups, so newcomers to a city don't know they exist. This app makes clubs discoverable by location, language and genre, and gives organisers an easy way to set one up.

Technical highlights:
- Server state via React Query, forms with React Hook Form + Yup validation
- Full auth flow: register, OTP verification, login, forgot and reset password
- Multi-step "create club" form
- Rich-text club descriptions (Tiptap editor)
- Interactive club location map with Leaflet
- Mobile-first, responsive layout

## Getting started

**Requirements:** Node.js 18+ and the backend API running locally (see its README).

1. Install dependencies:
   ```bash
   npm install
   ```
2. Create a `.env.local` file in the project root:
   ```env
   NEXT_PUBLIC_API_URL=http://localhost:5000/
   ```
   If you leave this out, the app uses `http://localhost:5000/`.
3. Start the dev server:
   ```bash
   npm run dev
   ```
4. Open **http://localhost:3000**.

## Tests

Unit and component tests (Jest + React Testing Library):
```bash
npm test
```

End-to-end tests for the auth flow (Cypress, specs in `cypress/e2e`). These need both the frontend and the backend running, plus a test account:

1. Copy `cypress.env.example.json` to `cypress.env.json` and fill in your test account details.
2. Run:
   ```bash
   npx cypress open
   ```

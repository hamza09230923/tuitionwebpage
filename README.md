# tuitionwebpage
# LevelUp GCSE – Roadmap & Setup

LevelUp GCSE is a React-based landing page and future platform for GCSE tutoring, built to launch quickly and then scale with Node.js and Google Cloud. [web:15]

## Phase 1 – Static Launch (Immediate)

**Goal:** Get `Homepage.jsx` live on a custom domain so you can start marketing. [web:15]

### 1. Setup the repo

- Initialize a new Vite + React project:
- Install Tailwind CSS as the styling engine. [web:15]
- Install `lucide-react` for icons. [web:15]
- Replace `src/App.jsx` with the `Homepage.jsx` code. [web:15]

### 2. Deployment (serverless)

**Recommended hosts:** Firebase Hosting (stays in Google ecosystem) or Vercel (fastest for React). [web:15]

- Create a new repo on GitHub and push the Vite project. [web:15]
- In your hosting dashboard, create a new project and connect your GitHub repo so it auto-deploys from `main`. [web:11]
- Configure the framework as Vite/React and deploy. [web:11]
- Result: every push to `main` triggers an automatic deployment. [web:11]

**Cost:** £0/month on free tiers. [web:15]

### 3. “No‑code” backend (temporary)

- **Booking**
- Create a Calendly account and set up a consultation event. [web:15]
- In your React code (e.g. navbar and hero buttons), update the `href` (lines 48 & 67) to your Calendly URL. [web:15]

- **Payments**
- Create a Stripe account and use **Stripe Payment Links**. [web:15]
- Generate a link for: `Term Bundle (£350)`.
- After the consultation, send this link manually via email.
- Do not build a custom checkout flow yet. [web:15]

## Phase 2 – Engineer’s Scale‑Up (Months 2–6)

**Goal:** Introduce Node.js & Google Cloud without rewriting the frontend. [web:15]

### 1. Add a backend

- Initialize Firebase Functions (Node.js environment). [web:15]
- Implement callable functions, e.g. `exports.releasePaper = onCall(...)`. [web:15]
- Call these from the React frontend using the Firebase SDK for server-side tasks. [web:15]

### 2. Add authentication

- Enable **Firebase Auth**. [web:15]
- Add a “Login” button to the navbar in `Homepage.jsx`. [web:15]
- This will act as the gatekeeper for a future **Student Dashboard**. [web:15]

### 3. Database structure

- Enable **Cloud Firestore** and create a `users` collection. [web:15]
- Example document structure:
- Use this to track roles, enrolled subjects, and assigned papers. [web:15]

## Weekend Checklist

- [ ] Buy a `.co.uk` domain on Namecheap or Google Domains. [web:16]
- [ ] Set up local React environment & paste the code into `src/App.jsx`. [web:15]
- [ ] Deploy to Vercel or Firebase Hosting. [web:11]
- [x] Calendly integration complete - See setup instructions below

## Calendly Integration Setup

**Status:** ✅ Calendly popup widget is integrated into all "Book Consultation" buttons.

### Step 1: Add Your Calendly Event URL

1. Open `src/Home.jsx`
2. Find the `openCalendlyPopup` function (around line 15-30)
3. Replace `'YOUR_CALENDLY_EVENT_URL'` with your actual Calendly event URL
   - Example: `'https://calendly.com/myschola/free-20-minute-gcse-parent-consultation'`

### Step 2: Configure Calendly Event Questions

Go to your Calendly dashboard → Your event type ("Free 20-minute GCSE Parent Consultation") → "Invitee Questions"

Add these as **REQUIRED** questions:

1. **Parent full name** (Text field)
2. **Parent email address** (Email field - Calendly collects this by default, but make it required)
3. **Parent phone number** (Phone field)
4. **Child's school year** (Dropdown: Year 9, Year 10, Year 11)
5. **Subjects interested in** (Multiple choice: Maths, English Language, English Literature, Combined Science, Triple Science)
6. **"How did you hear about MySchola?"** (Text field or dropdown)
7. **Consent checkbox:** "I agree to be contacted about this consultation by email, phone and/or WhatsApp."
8. **Consent checkbox:** "I agree to receive occasional marketing emails from MySchola (I can unsubscribe at any time)."

### What Calendly Does Automatically

- Stores all responses in your Calendly dashboard
- Sends confirmation emails to parents
- Adds events to your connected calendar (Google Calendar, Outlook, etc.)
- Sends reminder emails before the consultation
- Handles cancellations and rescheduling

**Note:** Your website only needs the embed code (already added in `index.html`) and the popup function (already in `Home.jsx`). No backend code needed!

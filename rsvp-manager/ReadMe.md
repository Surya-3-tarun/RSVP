# 🧠 Gametime Hero – Team RSVP Manager

This project is a small, modular RSVP management service built as part of the Gametime Hero coding challenge. It is designed to be clean, scalable, and testable, following modern development best practices in TypeScript.

## Challenge Overview


Based on the challenge description, this service:

- Accepts player RSVPs using typed interfaces
- Can add or update RSVP status
- Returns all confirmed attendees
- Counts total, confirmed, and declined responses

RSVP status options are: `"Yes"`, `"No"`, or `"Maybe"`

---

## Tech Stack

- TypeScript
- Vitest (for unit testing)
- Node.js

---

## Features

- ✅ Add or update a player's RSVP
- ✅ Get a list of confirmed attendees
- ✅ Count total, confirmed, and declined responses
- ✅ Uses pure functions and clean architecture
- ✅ Dependency injection for the logger
- ✅ Strong typing with reusable interfaces
- ✅ Fully tested with unit tests (Vitest)

---

## Project Structure

<pre> rsvp-manager/ ├── src/ │ ├── interfaces/ │ │ └── types.ts # Type definitions: Player, RsvpEntry, RsvpStatus │ ├── services/ │ │ ├── RsvpService.ts # Core RSVP logic (add, update, count, get confirmed) │ │ └── RsvpService.test.ts # Unit tests using Vitest │ ├── utils/ │ │ └── Logger.ts # Simple injectable logger │ └── index.ts # Sample usage of RsvpService ├── dist/ # (Generated) Compiled JavaScript output ├── node_modules/ # (Generated) Installed dependencies ├── package.json # Project dependencies and scripts ├── tsconfig.json # TypeScript configuration └── README.md # Project overview and instructions </pre>


---

## Getting Started

### 1. Install dependencies

npm install

### 2. Run the app
npx ts-node src/index.ts

### 3. Compile the TypeScript to JavaScript
npx tsc
node dist/index.js

### 4. Run unit tests
npx vitest run

# Notes App (React + Node.js + Axios)

A minimal full‑stack notes app to satisfy **Problem 3** of the assessment:
- **Backend (Node + Express)** with in‑memory storage and two endpoints.
- **Frontend (React + Vite)** that uses **Axios** to fetch and create notes.

---

## 🚀 Tech Stack
- **Frontend:** React (Vite), Axios
- **Backend:** Node.js, Express, CORS
- **Runtime:** Node.js ≥ 18 (npm included)

---

## 📁 Directory Structure
```
notes-app/
├─ backend/
│  ├─ package.json
│  └─ src/
│     └─ server.js
└─ frontend/
   ├─ package.json
   ├─ vite.config.js
   ├─ index.html
   └─ src/
      ├─ main.jsx
      ├─ App.jsx
      ├─ api.js
      └─ components/
         ├─ NotesList.jsx
         └─ AddNote.jsx
```

---

## ✅ Features required by the assignment
- **Backend**
  - `GET /notes` → returns `[ { id: 1, title: "Test", content: "Demo" } ]`
  - `POST /notes` → accepts `{ title, content }` and appends to an in‑memory array
- **Frontend**
  - `NotesList` fetches notes on mount with Axios and displays them
  - `AddNote` has two inputs (`title`, `content`) and posts a new note, then refreshes the list

---

## 🔧 Prerequisites
1. **Install Node.js (LTS)** – includes `npm`.
2. Verify in a new terminal (PowerShell on Windows/macOS Terminal/Linux shell):
   ```sh
   node -v
   npm -v
   ```

> If `npm` is not recognized on Windows, reinstall Node.js and ensure **“Add to PATH”** is checked.

---

## 🏁 Quick Start

### 1) Clone or create the folder
```sh
mkdir notes-app && cd notes-app
```

### 2) Backend setup
```sh
cd backend
npm install
npm run start      # or: npm run dev (with nodemon)
# Backend runs at http://localhost:4000
```

### 3) Frontend setup (new terminal)
```sh
cd ../frontend
npm install
npm run dev
# Vite prints a URL like http://localhost:5173/
```

Open the printed **Local** URL in your browser. You should see the app with the default note.

---

## 🔌 API Reference (Backend)

Base URL: `http://localhost:4000`

### `GET /notes`
**Response 200:**
```json
[
  { "id": 1, "title": "Test", "content": "Demo" }
]
```

### `POST /notes`
**Request Body:**
```json
{ "title": "My Note", "content": "Hello world" }
```
**Responses:**
- `201 Created` + created note
- `400 Bad Request` when `title` or `content` is missing

**Example with curl:**
```sh
curl -X POST http://localhost:4000/notes \
  -H "Content-Type: application/json" \
  -d '{"title":"My Note","content":"Hello world"}'
```

---

## 🧪 Testing with Postman (optional)
1. `GET http://localhost:4000/notes` → expect the default array.
2. `POST http://localhost:4000/notes`
   - Body → **raw JSON**:
     ```json
     { "title": "Second", "content": "From Postman" }
     ```
   - Expect `201` and the created note.
3. Refresh the frontend page to see the new note appear.

---

## ⚙️ Frontend Configuration
`frontend/src/api.js` sets Axios base URL:
```js
export const api = axios.create({
  baseURL: 'http://localhost:4000',
  headers: { 'Content-Type': 'application/json' }
});
```
> If you change the backend port, update this `baseURL` accordingly.

**Optional (avoid CORS):** Use a Vite proxy in `vite.config.js`.
```js
export default {
  server: {
    proxy: {
      '/notes': 'http://localhost:4000'
    }
  }
}
```
Then call `api` without the base URL or use relative paths.

---

## 🧰 Scripts

### Backend
- `npm run start` → start Express server
- `npm run dev` → start with `nodemon` (auto‑restart)

### Frontend
- `npm run dev` → start Vite dev server

---

## ▶️ Run both with one command (optional)
At the **project root** (`notes-app/`), add this `package.json`:

```json
{
  "name": "notes-app-root",
  "private": true,
  "scripts": {
    "install-all": "npm --prefix backend install && npm --prefix frontend install",
    "dev": "concurrently \"npm --prefix backend run start\" \"npm --prefix frontend run dev\""
  },
  "devDependencies": {
    "concurrently": "^8.2.2"
  }
}
```

Then run:
```sh
npm install
npm run install-all
npm run dev
```

---

## 🐛 Troubleshooting
- **`npm` not recognized (Windows):** Reinstall Node.js (LTS) and ensure **Add to PATH** is checked; open a new PowerShell.
- **CORS error in browser:** Ensure backend has `cors()` enabled (provided) or configure a dev proxy in Vite.
- **Port already in use:** Change the port (backend `PORT` env var or Vite `--port`) or stop the conflicting process.

---

## 📜 License
This project is for educational use as part of the assessment. You’re free to modify and extend it.

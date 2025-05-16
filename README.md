# Express Players API

## Live Demo: https://players-app-65sg.onrender.com/

A simple Express.js + TypeScript backend exposing player data via REST endpoints, using both local JSON and an external API.

---

## Getting Started

### Prerequisites

- Node.js (v16+ recommended)
- npm (comes with Node.js)

---

## Installation & Setup

1. **Clone the repository**

```bash
git clone https://github.com/parikshitbarua/express-players-app
cd <your-repo-folder>
````

2. **Install dependencies**

```bash
npm install
```

3. **(Optional) Add environment variables**

Create a `.env` file in the root directory with the following variables:

```env
PORT=3000
ENV=DEV
```

* `PORT`: The port the server will listen on (default: 3000)
* `ENV`: Environment mode (optional, e.g., `DEV` `QA` `UAT` `PROD`)

---

## Available Scripts

| Command                   | Description                                           |
| ------------------------- | ----------------------------------------------------- |
| `npm run dev`             | Start the development server with hot reload          |
| `npm run build`           | Build the TypeScript source files into JavaScript     |
| `npm run test`            | Run Jest test suites                                  |
| `npm run prettier-format` | Format source files using Prettier                    |
| `npm run prettier-watch`  | Watch files and format on change using Prettier       |
| `npm run lint`            | Run ESLint to check for linting issues                |
| `npm run lint-and-fix`    | Run ESLint and automatically fix fixable issues       |
| `npm run prepare`         | Setup Husky git hooks (runs automatically on install) |

---

## API Endpoints

### 1. Get all players from local JSON (sorted by player ID)

* **Method:** GET
* **URL:** `/players/json`
* **Response:**

  ```json
  {
    "message": "Players data fetched successfully from JSON",
    "players": [ /* array of players sorted by id */ ]
  }
  ```

---

### 2. Get single player by ID from local JSON

* **Method:** GET
* **URL:** `/players/json/:id`
* **Response:**

  ```json
  {
    "message": "Player data fetched successfully",
    "player": { /* player object matching the id */ }
  }
  ```

---

### 3. Get all players from external API (sorted by player ID)

* **Method:** GET
* **URL:** `/players`
* **Response:**

  ```json
  {
    "message": "Players data fetched successfully from external API",
    "players": [ /* array of players sorted by id */ ]
  }
  ```

---

### 4. Get single player by ID from external API

* **Method:** GET
* **URL:** `/players/:id`
* **Response:**

  ```json
  {
    "message": "Player data fetched successfully",
    "player": { /* player object matching the id */ }
  }
  ```

---

## Notes

* All responses include a `message` describing the result.
* Error scenarios return appropriate HTTP status codes (e.g., 404 if player not found, 500 for server errors).
* The external API URL used:
  `https://eurosportdigital.github.io/eurosport-node-developer-recruitment/headtohead.json`

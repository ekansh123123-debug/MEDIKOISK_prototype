# MediKiosk Backend Services

Welcome to the **MediKiosk** backend service workspace. This folder is reserved for the server-side API, database connectors, ABDM/ABHA gateway integration, and queue management services.

---

## Architecture Overview

MediKiosk is designed as an intelligent OPD check-in and queue triage system for hospitals. The backend can provide:
1. **ABDM / ABHA Gateway Integration**: M1/M2/M3 compliance, patient demographic discovery, OTP generation and consent artifact management.
2. **FHIR R4 Bundle Validation & Persistence**: Longitudinal EHR storage, Ayush terminology cross-mapping, and audit log tracking.
3. **Queue & Triage Engine**: Real-time counter assignment, emergency priority queuing, and doctor station synchronization.
4. **Prescription OCR & AI Engine**: Document parsing, drug-interaction screening, and voice transcription pipelines.

---

## Getting Started: Choose Your Stack

You can initialize this backend using whatever technology stack fits your architecture best:

### Option A: Node.js / Express (or NestJS / Fastify)

To initialize with Node.js + TypeScript:
```bash
cd backend
npm init -y
npm install express cors dotenv
npm install -D typescript @types/node @types/express @types/cors ts-node-dev
npx tsc --init
```

Add the following scripts to `backend/package.json`:
```json
"scripts": {
  "dev": "ts-node-dev --respawn --transpile-only src/server.ts",
  "build": "tsc",
  "start": "node dist/server.js"
}
```

Now `npm run dev:backend` or `npm run dev` from the project root will automatically run your backend.

---

### Option B: Python (FastAPI / Flask)

To initialize with Python + FastAPI:
```bash
cd backend
python -m venv venv
# On Windows:
.\venv\Scripts\Activate.ps1
# On Linux/macOS:
source venv/bin/activate

pip install fastapi uvicorn pydantic python-dotenv
pip freeze > requirements.txt
```

Create `backend/src/main.py`:
```python
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(title="MediKiosk API", version="1.0.0")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/health")
def health_check():
    return {"status": "healthy", "service": "MediKiosk Backend"}
```

Run with:
```bash
uvicorn src.main:app --reload --port 8000
```

---

## Suggested Folder Layout

```
backend/
├── src/
│   ├── config/          # Environment & database configuration
│   ├── controllers/     # HTTP route handlers
│   ├── routes/          # API endpoint declarations
│   ├── services/        # Business logic (ABDM, FHIR, Triage, Queue)
│   ├── models/          # Database schemas / TypeScript interfaces
│   ├── middleware/      # Auth, rate limiting, error handlers
│   └── utils/           # Helper functions & logger
├── .env.example         # Template for required environment variables
├── README.md            # This documentation
└── package.json (or requirements.txt)
```

---

## Environment Configuration

Copy or create `.env` in `backend/` with the required keys:
```env
PORT=5000
NODE_ENV=development
# ABDM Gateway credentials (Sandbox / Production)
ABDM_CLIENT_ID=
ABDM_CLIENT_SECRET=
ABDM_BASE_URL=https://dev.abdm.gov.in/gateway
# Database
DATABASE_URL=
# CORS
CORS_ORIGIN=http://localhost:5173
```

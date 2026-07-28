# 🤖 AI Agent Pipeline

A production-style AI Agent Pipeline built using **React, Node.js, Express, and Groq LLM**.

This project demonstrates:
- ✅ Multi-Agent Workflow
- ✅ Token Optimization
- ✅ AI Cost Reduction
- ✅ Debugging Strategy
- ✅ CI/CD using GitHub Actions
- ✅ Deployment using Render & Vercel

---

# 🌐 Live Demo

### Frontend (Vercel)

https://ai-agent-pipeline-mu.vercel.app/

### Backend API (Render)

https://ai-agent-pipeline.onrender.com

### GitHub Repository

https://github.com/ashok-8081/ai-agent-pipeline

---

# 📌 Project Overview

This project simulates a production AI pipeline where multiple AI agents work together to answer user queries.

Instead of sending everything directly to the LLM, the pipeline first retrieves relevant information, summarizes it, formats the response, and tracks token usage to reduce API cost while maintaining response quality.

---

# 🏗 Architecture

```
                React Frontend
                       │
                       ▼
              Express Backend API
                       │
                       ▼
              Retriever Agent
                       │
                       ▼
               Summary Agent
                       │
                       ▼
              Formatter Agent
                       │
                       ▼
                 Groq LLM API
```

---

# 🚀 Features

- AI Question Answering
- Multi-Agent Architecture
- Retriever Agent
- Summary Agent
- Formatter Agent
- Token Counter
- Conversation Memory
- Logging
- Token Optimization
- Metrics Dashboard
- GitHub Actions CI
- Render Deployment
- Vercel Deployment

---

# 🛠 Tech Stack

## Frontend

- React
- Axios
- CSS

## Backend

- Node.js
- Express.js
- Groq SDK
- dotenv

## Deployment

- GitHub
- GitHub Actions
- Render
- Vercel

---

# 📂 Folder Structure

```
ai-agent-pipeline/

│
├── backend/
│   ├── src/
│   │   ├── agents/
│   │   ├── routes/
│   │   ├── services/
│   │   ├── memory/
│   │   ├── utils/
│   │   ├── knowledge/
│   │   └── index.js
│
├── frontend/
│   ├── src/
│   ├── public/
│   └── App.jsx
│
└── .github/
    └── workflows/
```

---

# ⚙ Installation

## Clone Repository

```bash
git clone https://github.com/ashok-8081/ai-agent-pipeline.git

cd ai-agent-pipeline
```

---

## Backend

```bash
cd backend

npm install

npm start
```

Backend runs on:

```
http://localhost:5000
```

---

## Frontend

```bash
cd frontend

npm install

npm run dev
```

Frontend runs on:

```
http://localhost:5173
```

---

# 📡 API

## POST /ask

Example Request

```json
{
  "question": "Explain Docker"
}
```

Example Response

```json
{
  "success": true,
  "answer": "Docker is a containerization platform...",
  "metrics": {
    "optimized": true,
    "contextTokens": 25,
    "summaryTokens": 11,
    "finalTokens": 11,
    "latencyMs": 1800
  }
}
```

---

# 🎯 Token Optimization

Initially, the pipeline sent large amounts of context to the LLM, increasing token usage and latency.

Two optimizations were implemented:

## Optimization 1 — Context Filtering

Only relevant documents are sent to the LLM instead of the entire knowledge base.

Benefits:

- Reduced input tokens
- Faster responses
- Lower API cost

---

## Optimization 2 — LLM Fallback

The local knowledge base is searched first.

The LLM is called only if no relevant document is found.

Benefits:

- Avoids unnecessary LLM calls
- Reduces cost
- Maintains answer quality

---

# 📊 Sample Results

| Metric | Before | After |
|---------|--------|-------|
| Context Tokens | 540 | 25 |
| Summary Tokens | 45 | 11 |
| Final Tokens | 38 | 11 |
| Latency | 3200 ms | 1800 ms |

---

# 🐞 Debugging Process

During development the following issues were encountered and resolved:

- Git authentication using Personal Access Token
- GitHub Actions workflow configuration
- Render deployment failures
- Missing npm dependencies
- Groq SDK integration issues
- Incorrect API request parameters
- Summary Agent returning null
- Formatter Agent errors
- Frontend and backend connectivity
- CORS configuration
- Environment variable management

---

# 🔄 CI/CD

GitHub Actions automatically:

- Installs dependencies
- Runs ESLint
- Validates code quality
- Ensures successful build before deployment

---

# 🚀 Deployment

## Backend

Hosted on Render

https://ai-agent-pipeline.onrender.com

---

## Frontend

Hosted on Vercel

https://YOUR-VERCEL-URL.vercel.app

---

# 📸 Project Screenshots

(Add screenshots here if desired)

- Home Page
- AI Response
- Metrics Dashboard
- GitHub Actions
- Render Deployment
- Vercel Deployment

---

# 👨‍💻 Author

Ashok Kumar Dubey

GitHub:

https://github.com/ashok-8081

---

# 📄 License

This project was developed as part of an AI Internship Assignment for educational and evaluation purposes.
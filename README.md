# DevLinker

A full-stack developer-matching platform built with **React**, **Node.js**, **Docker**, and **CI/CD**. This project is designed to help me learn modern DevOps practices while building a real, production-ready application.

---

##  Features

* React frontend (Create React App)
* Node.js + Express backend
* Environment variables for frontend & backend
* Docker containers for each service
* Docker Compose for orchestration
* ESLint for clean code
* GitHub repository structured for CI/CD

---


##  Environment Variables

### **Frontend (`client/.env`)**

```
REACT_APP_API_URL=http://localhost:5000
```

### **Backend (`server/.env`)**

```
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret
```

Make sure all `.env` files are **ignored by Git**.

---

##  Docker Setup

### **Frontend Dockerfile**

Builds a static React production bundle and serves it via Nginx.

### **Backend Dockerfile**

Runs the Node.js Express server.

### **docker-compose.yml**

Starts both containers and sets up environment variables.

To run everything:

```bash
docker-compose up --build
```

---

##  Development (no Docker)

### Frontend

```bash
cd client
npm install
npm start
```

### Backend

```bash
cd server
npm install
npm run dev
```

---

##  ESLint

The project includes ESLint presets for consistent, cle

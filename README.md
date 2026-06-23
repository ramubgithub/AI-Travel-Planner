# ✈️ AI Travel Planner

![React](https://img.shields.io/badge/React-19-blue)
![Node.js](https://img.shields.io/badge/Node.js-Express-green)
![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-success)
![JWT](https://img.shields.io/badge/Auth-JWT-orange)
![Gemini](https://img.shields.io/badge/AI-Google%20Gemini-purple)
![License](https://img.shields.io/badge/License-MIT-red)

An AI-powered Travel Planning Application built using the MERN Stack. Users can register, log in securely, generate personalized travel itineraries using AI, estimate travel budgets, discover hotel recommendations, and manage previously generated trips.

---

## 📑 Table of Contents

- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Architecture](#-architecture)
- [Project Structure](#-project-structure)
- [Installation](#-installation)
- [Environment Variables](#-environment-variables)
- [Running Locally](#-running-locally)
- [API Documentation](#-api-documentation)
- [Frontend Screens](#-frontend-screens)
- [Responsive Design](#-responsive-design)
- [Security Features](#-security-features)
- [Deployment](#-deployment)
- [Future Enhancements](#-future-enhancements)
- [Author](#-author)

---

# 🚀 Features

### Authentication

- User Registration
- User Login
- JWT Authentication
- Protected Routes
- Password Encryption using bcrypt

### AI Trip Planning

- AI Generated Travel Itineraries
- Destination Based Planning
- Budget-Based Recommendations
- Interest-Based Suggestions
- Multi-Day Trip Generation

### Budget Estimation

- Flight Cost
- Accommodation Cost
- Food Cost
- Activity Cost
- Total Budget Calculation

### Hotel Recommendations

- Budget Hotels
- Mid-range Hotels
- Luxury Hotels
- Hotel Ratings

### Dashboard

- View Previous Trips
- Travel History
- Trip Details

### Responsive UI

- Mobile First Design
- CSS Flexbox
- CSS Media Queries
- Responsive Cards
- Responsive Forms
- Responsive Navigation

---

# 🛠 Tech Stack

## Frontend

- React.js
- React Router DOM
- Redux Toolkit
- React Redux
- Axios
- CSS3
- Flexbox
- Media Queries
- Vite

## Backend

- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- JWT
- bcryptjs
- Helmet
- Morgan
- Express Rate Limit

## AI Services

- Google Gemini API

---

# 🏗 Architecture

```text
Frontend (React + Redux)
        │
        ▼
Backend API (Express)
        │
        ▼
Authentication Layer (JWT)
        │
        ▼
Business Logic Layer
        │
        ▼
MongoDB Atlas
        │
        ▼
Google Gemini AI
```

---

# 📂 Project Structure

```bash
AI-Travel-Planner/
│
├── backend/
│   │
│   ├── src/
│   │   ├── config/
│   │   │   ├── db.js
│   │   │   └── gemini.js
│   │   │
│   │   ├── controllers/
│   │   │   ├── auth.controller.js
│   │   │   └── trip.controller.js
│   │   │
│   │   ├── middlewares/
│   │   │   ├── auth.middleware.js
│   │   │   ├── error.middleware.js
│   │   │   └── rateLimiter.middleware.js
│   │   │
│   │   ├── models/
│   │   │   ├── User.js
│   │   │   └── Trip.js
│   │   │
│   │   ├── repositories/
│   │   │   ├── user.repository.js
│   │   │   └── trip.repository.js
│   │   │
│   │   ├── routes/
│   │   │   ├── auth.routes.js
│   │   │   └── trip.routes.js
│   │   │
│   │   ├── services/
│   │   │   ├── ai.service.js
│   │   │   ├── budget.service.js
│   │   │   └── hotel.service.js
│   │   │
│   │   ├── utils/
│   │   │   └── apiResponse.js
│   │   │
│   │   ├── app.js
│   │   └── server.js
│   │
│   ├── package.json
│   └── .env
│
├── frontend/
│   │
│   ├── src/
│   │   ├── app/
│   │   │   └── store.js
│   │   │
│   │   ├── features/
│   │   │   ├── auth/
│   │   │   └── trips/
│   │   │
│   │   ├── components/
│   │   │   ├── Navbar.jsx
│   │   │   ├── TripForm.jsx
│   │   │   ├── BudgetCard.jsx
│   │   │   ├── HotelCard.jsx
│   │   │   ├── ItineraryCard.jsx
│   │   │   └── ProtectedRoute.jsx
│   │   │
│   │   ├── pages/
│   │   │   ├── Login.jsx
│   │   │   ├── Register.jsx
│   │   │   ├── Dashboard.jsx
│   │   │   └── TripPlanner.jsx
│   │   │
│   │   ├── services/
│   │   │   └── api.js
│   │   │
│   │   ├── styles/
│   │   │   ├── login.css
│   │   │   ├── register.css
│   │   │   ├── navbar.css
│   │   │   ├── dashboard.css
│   │   │   ├── tripForm.css
│   │   │   ├── hotelCard.css
│   │   │   ├── budgetCard.css
│   │   │   └── itineraryCard.css
│   │   │
│   │   ├── App.jsx
│   │   └── main.jsx
│   │
│   └── package.json
│
└── README.md
```

---

# ⚙️ Installation

## Clone Repository

```bash
git clone https://github.com/yourusername/AI-Travel-Planner.git

cd AI-Travel-Planner
```

---

# 📦 Backend Setup

```bash
cd backend

npm install
```

## Backend Packages

```bash
npm install express
npm install mongoose
npm install dotenv
npm install cors
npm install bcryptjs
npm install jsonwebtoken
npm install helmet
npm install morgan
npm install express-rate-limit
npm install @google/generative-ai
```

### Development Dependency

```bash
npm install -D nodemon
```

---

# 🎨 Frontend Setup

```bash
cd frontend

npm install
```

## Frontend Packages

```bash
npm install react-router-dom

npm install axios

npm install @reduxjs/toolkit

npm install react-redux
```

---

# 🔐 Environment Variables

Create `.env` file inside backend folder:

```env
PORT=5000

MONGO_URI=your_mongodb_connection_string

JWT_SECRET=your_jwt_secret_key

GEMINI_API_KEY=your_gemini_api_key
```

---

# ▶️ Running Locally

## Backend

```bash
npm run dev
```

Output:

```bash
MongoDB Connected
Server running on port 5000
```

---

## Frontend

```bash
npm run dev
```

Output:

```bash
Local:
http://localhost:5173
```

---

# 📚 API Documentation

## Authentication

### Register

```http
POST /api/auth/register
```

Request Body:

```json
{
  "name": "John",
  "email": "john@gmail.com",
  "password": "123456"
}
```

---

### Login

```http
POST /api/auth/login
```

Request Body:

```json
{
  "email": "john@gmail.com",
  "password": "123456"
}
```

---

## Trips

### Generate Trip

```http
POST /api/trips/generate
```

Headers

```http
Authorization: Bearer TOKEN
```

Body

```json
{
  "destination": "Tokyo",
  "days": 5,
  "budgetType": "Medium",
  "interests": [
    "Food",
    "Culture",
    "Shopping"
  ]
}
```

---

### Get All Trips

```http
GET /api/trips/my-trips
```

---

### Get Trip By Id

```http
GET /api/trips/:id
```

---

### Delete Trip

```http
DELETE /api/trips/:id
```

---

# 📱 Responsive Design

Supported Devices

| Device | Width |
|----------|----------|
| Mobile | 320px - 767px |
| Tablet | 768px - 1023px |
| Laptop | 1024px - 1439px |
| Desktop | 1440px+ |

### Built Using

- CSS Flexbox
- Media Queries
- Mobile First Development
- Responsive Components
- Fluid Layouts

---

# 🔒 Security Features

### JWT Authentication

Secure token-based authentication system.

### Password Hashing

Passwords encrypted using bcryptjs.

### Helmet

Secure HTTP Headers.

### Rate Limiting

Protection against API abuse.

### Protected Routes

Frontend route protection for authenticated users.

---

# 🚀 Deployment

## Frontend

Deploy using:

- Vercel
- Netlify

## Backend

Deploy using:

- Render
- Railway
- VPS

## Database

- MongoDB Atlas

---

# 🔮 Future Enhancements

- Google Maps Integration
- Weather API
- Flight Booking API
- Hotel Booking API
- PDF Export
- Dark Mode
- Trip Sharing
- Favorites
- AI Chat Assistant

---

# 👨‍💻 Author

## Ramu Battula

Full Stack Developer

### Skills

- React.js
- Redux Toolkit
- Node.js
- Express.js
- MongoDB
- REST APIs
- Gemini AI

---

# ⭐ Support

If you found this project useful:

```text
⭐ Star the Repository

🍴 Fork the Repository

🚀 Contribute to the Project
```

---

## 📄 License

This project is licensed under the MIT License.

---

### Built with ❤️ using React, Node.js, MongoDB, Express & Google Gemini AI
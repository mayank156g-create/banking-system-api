# Banking System API

A RESTful Banking System API built with **Node.js**, **Express.js**, **MongoDB**, and **JWT Authentication**. This project is being developed incrementally to simulate the backend of a banking system.

> **Project Status:** 🚧 In Progress

---

## Features Implemented

### Authentication

- User Registration
- User Login
- Password Hashing using bcrypt
- JWT Authentication
- Cookie-based Authentication
- Email Validation
- Duplicate Email Validation

### Database

- MongoDB Atlas Integration
- Mongoose ODM
- Environment Variable Configuration

---

## Tech Stack

- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- JSON Web Token (JWT)
- bcryptjs
- cookie-parser
- dotenv
- Nodemon

---

## Project Structure

```
src/
├── config/
│   └── db.js
│
├── controllers/
│   └── auth.controllers.js
│
├── models/
│   └── user.models.js
│
├── routes/
│   └── auth.routes.js
│
└── app.js

server.js
```

---

## Installation

Clone the repository

```bash
git clone https://github.com/<your-username>/banking-system-api.git
```

Move into the project directory

```bash
cd banking-system-api
```

Install dependencies

```bash
npm install
```

Create a `.env` file using the values from `.env.example`.

Start the development server

```bash
npm run dev
```

---

## Environment Variables

Create a `.env` file in the root directory.

```env
PORT=3000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
NODE_ENV=development
```

---

## API Endpoints

### Register User

```
POST /api/auth/register
```

Example Request

```json
{
    "name": "John Doe",
    "email": "john@example.com",
    "password": "password123"
}
```

---

### Login User

```
POST /api/auth/login
```

Example Request

```json
{
    "email": "john@example.com",
    "password": "password123"
}
```

---

## Upcoming Features

- Nodemailer Integration
- Registration Email
- Account Creation
- Authentication Middleware
- Banking Transactions
- Ledger System
- Balance API
- Money Transfer
- Logout with Token Blacklisting
- Project Deployment

---

## Learning Goals

This project is being built to learn and practice:

- REST API Development
- Authentication & Authorization
- MongoDB Data Modeling
- Secure Password Storage
- JWT-based Authentication
- Express Middleware
- Banking System Backend Design

---

## License

This project is intended for educational and learning purposes.

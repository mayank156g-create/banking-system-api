# Banking System API

A RESTful Banking System API built with **Node.js, Express.js, MongoDB, and JWT Authentication**. This project is being developed incrementally to simulate the backend of a real-world banking system.

> **Project Status:** 🚧 In Progress

---

# Features Implemented

## Authentication

- User Registration
- User Login
- Password Hashing using bcryptjs
- JWT Authentication
- Cookie-based Authentication
- Email Validation
- Duplicate Email Validation

---

## Authorization

- JWT Verification Middleware
- Protected Routes
- User Authentication using Cookies or Bearer Token

---

## Account Management

- Create Bank Account
- One Account Per User
- Account Status
  - Active
  - Frozen
  - Inactive
- Default Currency (INR)
- Initial Balance
- User & Account Relationship using MongoDB ObjectId

---

## Database

- MongoDB Atlas Integration
- Mongoose ODM
- User Schema
- Account Schema
- Environment Variable Configuration

---

# Tech Stack

- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- JWT (jsonwebtoken)
- bcryptjs
- cookie-parser
- dotenv
- Nodemon

---

# Project Structure

```text
src/
├── config/
│   └── db.js
│
├── controllers/
│   ├── auth.controllers.js
│   └── account.controller.js
│
├── middleware/
│   └── auth.middleware.js
│
├── models/
│   ├── user.models.js
│   └── account.model.js
│
├── routes/
│   ├── auth.routes.js
│   └── account.routes.js
│
└── app.js

server.js
```

---

# Installation

Clone the repository

```bash
git clone https://github.com/<your-username>/banking-system-api.git
```

Move into the project

```bash
cd banking-system-api
```

Install dependencies

```bash
npm install
```

Create a `.env` file

```env
PORT=3000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
NODE_ENV=development
```

Start the development server

```bash
npm run dev
```

---

# API Endpoints

## Register User

**POST**

```http
/api/auth/register
```

Example

```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "password123"
}
```

---

## Login User

**POST**

```http
/api/auth/login
```

Example

```json
{
  "email": "john@example.com",
  "password": "password123"
}
```

---

## Logout User

**POST**

```http
/api/auth/logout
```

---

## Create Account (Protected)

**POST**

```http
/api/account
```

Requires a valid JWT token (Cookie or Authorization header).

---

# Upcoming Features

- Banking Transactions
- Deposit Money
- Withdraw Money
- Money Transfer
- Transaction History
- Ledger System
- Balance API
- Account Freeze & Unfreeze
- Refresh Tokens
- Token Blacklisting
- Nodemailer Integration
- Email Verification
- Password Reset
- Rate Limiting
- API Documentation (Swagger)

---

# Learning Goals

This project is being built to learn and practice:

- REST API Development
- Authentication & Authorization
- Express Middleware
- MongoDB Data Modeling
- JWT Security
- Banking Backend Design
- Mongoose Relationships
- Backend Project Architecture

---

# License

This project is intended for educational and learning purposes.

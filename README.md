#  Login–Signup Authentication System (JWT)

This project is a **basic authentication system** built to understand how real-world authentication works using **JWT (JSON Web Tokens)**. It covers signup, login, token generation, validation, and protected routes using a clean backend structure.

This project is intentionally kept **simple and focused on fundamentals**, without OAuth, refresh tokens, or SSR.

---

## Features

* User Signup with validation
* User Login with password hashing
* JWT-based authentication (stateless)
* Protected routes using middleware
* Role-ready user schema (can be extended)
* Clean MVC-based backend structure

---

##  Tech Stack

### Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* bcrypt (password hashing)
* jsonwebtoken (JWT)
* Joi (request validation)
* dotenv

### Frontend (basic integration)

* React
* React Router
* Axios

---

## 📁 Backend Folder Structure

```
backend/
│
├── models/
│   └── user.js
│
├── controllers/
│   └── AuthController.js
│
├── routes/
│   └── AuthRoutes.js
│
├── middlewares/
│   ├── AuthValidation.js
│   └── AuthMiddleware.js
│
├── config/
│   └── db.js
│
├── .env
├── app.js
└── server.js
```

---

##  Authentication Flow

### Signup

1. User sends name, email, password
2. Input validated using Joi
3. Password hashed using bcrypt
4. User stored in MongoDB

### Login

1. User sends email and password
2. Password compared using bcrypt
3. JWT generated on successful login
4. Token sent to frontend

### Protected Routes

1. Frontend sends JWT in `Authorization` header
2. Backend middleware verifies token
3. Request proceeds only if token is valid

---

##  JWT Details

* JWT is **stateless** (no session storage on server)
* Token payload contains:

  * user id
  * email
* Token expiry: `24 hours`

Example payload:

```json
{
  "email": "user@example.com",
  "id": "mongodb_user_id"
}
```

---

##  Environment Variables

Create a `.env` file in the backend root:
ask me instead 

```
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

---

##  How to Run the Project

### Backend

```bash
npm install
npm start
```

### Frontend

```bash
npm install
npm run dev
```

---

##  API Endpoints

### Auth Routes

| Method | Endpoint     | Description            |
| ------ | ------------ | ---------------------- |
| POST   | /auth/signup | Register a new user    |
| POST   | /auth/login  | Login user and get JWT |

### Protected Example

| Method | Endpoint | Description                    |
| ------ | -------- | ------------------------------ |
| GET    | /home    | Protected route (JWT required) |

---

##  Security Notes

* Passwords are **never stored in plain text**
* JWT secret is stored in environment variables
* Authentication middleware protects private routes
* Frontend auth is only for UX; backend enforces security

---

##  What This Project Does NOT Include 

* OAuth (Google/GitHub login)
* Refresh tokens
* Session-based authentication
* Role-based authorization (RBAC)
* CI/CD

These can be added later once fundamentals are strong.

---

##  Learning Outcomes

By completing this project, I understood:

* How authentication works internally
* Difference between authentication and authorization
* Stateless auth using JWT
* Middleware-based request protection
* Common auth bugs and pitfalls

---

##  Possible Extensions

* Add refresh tokens
* Store JWT in httpOnly cookies
* Implement RBAC (admin/user)
* Add MFA (OTP)
* Add CI/CD pipeline

---

##  Author

**SAI VINYAS BS**
Built as a learning project to understand backend authentication deeply.

---

##  Final Note

This project is not about quantity of features — it is about **clarity of fundamentals**. If you understand everything in this repo, you understand authentication at a real-world level.

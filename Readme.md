
# School Management API

A Node.js project to manage school data with APIs for adding new schools and retrieving a list of schools sorted by proximity to a given location. Built using **TypeScript**, **Express**, **MySQL**, and **Redis**, following clean code architecture.

---

## Features
- Add new schools to the database.
- List schools sorted by proximity to a user-specified location.
- Input validation using Zod.
- Caching for optimized performance with Redis.
- Global error handling for standardized responses.
- API rate limiting.

---

## Prerequisites
Ensure you have the following installed:
- Node.js (>= 16.0)
- MySQL
- Redis
- npm or yarn

---
## folder Structure
src/
├── config/             # Configuration files (e.g., database, Redis)
├── controller/         # Controllers for handling API requests
├── middleware/         # Middlewares (e.g., rate limiter, error handlers)
├── model/              # Database models
├── repository/         # Database queries and interaction
├── routes/             # API routes
├── service/            # Business logic
├── utils/              # Utility functions (e.g., validation schemas)
└── app.ts              # Application entry point

## Setup

### 1. Clone the Repository
```bash
git clone https://github.com/yourusername/school-management-api.git
cd school-management-api

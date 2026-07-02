1. API Overview

The Ideathon Portal exposes a set of RESTful APIs that allow users to register, authenticate, submit ideas, upload supporting documents, interact with ideas, and retrieve leaderboard information.

The APIs are developed using Node.js, Express.js, and MongoDB, while authentication is handled using JWT (JSON Web Token).

2. Base URL

During development, the backend server runs on:

http://localhost:5000

All API endpoints are prefixed with:

http://localhost:5000/api


4. HTTP Status Codes
Status Code	Meaning
200	Request Successful
201	Resource Created Successfully
400	Bad Request
401	Unauthorized
404	Resource Not Found
500	Internal Server Error

| Method | Endpoint                  | Authentication | Description          |
| ------ | ------------------------- | -------------- | -------------------- |
| POST   | `/api/auth/register`      | No             | Register a new user  |
| POST   | `/api/auth/login`         | No             | Authenticate user    |
| GET    | `/api/ideas`              | No             | Retrieve all ideas   |
| POST   | `/api/ideas`              | Yes            | Submit a new idea    |
| PATCH  | `/api/ideas/:id/upvote`   | Yes            | Upvote an idea       |
| PATCH  | `/api/ideas/:id/downvote` | Yes            | Downvote an idea     |
| POST   | `/api/ideas/:id/comment`  | Yes            | Add a comment        |
| PATCH  | `/api/ideas/:id/status`   | Yes            | Update idea status   |
| GET    | `/api/ideas/leaderboard`  | No             | Retrieve leaderboard |

6. Authentication APIs

Register User
Endpoint
POST /api/auth/register
Description

Registers a new user account.

Headers
Content-Type: application/json
Request Body
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "password123"
}
Success Response (201)
{
  "message": "User registered successfully"
}
Error Responses
{
  "message": "User already exists"
}

6.2 Login User

Endpoint
POST /api/auth/login
Description

Authenticates a registered user and returns a JWT token.

Headers
Content-Type: application/json
Request Body
{
  "email": "john@example.com",
  "password": "password123"
}
Success Response (200)
{
  "token": "<JWT_TOKEN>",
  "user": {
    "id": "user_id",
    "name": "John Doe",
    "email": "john@example.com"
  }
}
Error Responses
{
  "message": "Invalid email or password"
}

7. Idea Management APIs
7.1 Get All Ideas
Endpoint
GET /api/ideas
Description

Returns all submitted ideas sorted by newest first.

Authentication

Not Required

Success Response
[
  {
    "_id": "...",
    "title": "Smart Attendance System",
    "description": "...",
    "ideaType": "Process Improvement",
    "votes": 12
  }
]
7.2 Submit New Idea
Endpoint
POST /api/ideas
Description

Creates a new idea with an optional document attachment.

Authentication

Required

Headers
Authorization: Bearer <JWT_TOKEN>
Content-Type: multipart/form-data
Form Data
Field	Type
ideaType	String
title	String
description	String
file	Document
Success Response (201)
{
  "_id": "...",
  "title": "Smart Attendance System",
  "votes": 0
}
Possible Errors
{
  "message": "An idea with this title already exists."
}
{
  "message": "Only PDF, DOC, DOCX, PPT and PPTX files are allowed."
}
{
  "message": "File size should not exceed 10 MB."
}
7.3 Upvote Idea
Endpoint
PATCH /api/ideas/:id/upvote
Description

Increments the vote count of an idea.

Authentication

Required

Success Response
{
  "_id": "...",
  "votes": 15
}
7.4 Downvote Idea
Endpoint
PATCH /api/ideas/:id/downvote
Description

Decrements the vote count if greater than zero.

Authentication

Required

Success Response
{
  "_id": "...",
  "votes": 14
}
7.5 Add Comment
Endpoint
POST /api/ideas/:id/comment
Description

Adds a new comment to an idea.

Authentication

Required

Headers
Authorization: Bearer <JWT_TOKEN>
Request Body
{
  "comment": "This is a great idea!"
}
Success Response
{
  "comments": [
    "This is a great idea!"
  ]
}
Possible Errors
{
  "message": "Comment cannot be empty."
}
7.6 Update Idea Status
Endpoint
PATCH /api/ideas/:id/status
Description

Updates the evolution stage of an idea.

Authentication

Required

Request Body
{
  "status": "Approved"
}
Allowed Status Values
Submitted
Under Review
Approved
Implemented
Success Response
{
  "_id": "...",
  "evolutionStatus": "Approved"
}
7.7 Leaderboard
Endpoint
GET /api/ideas/leaderboard
Description

Returns all ideas sorted by highest votes.

Authentication

Not Required

Success Response
[
  {
    "title": "Smart Attendance System",
    "votes": 25
  }
]
8. Error Handling

The API returns meaningful error messages for invalid requests.

Error	Description
400	Invalid request data
401	Authentication failed
404	Resource not found
500	Internal server error

Example:

{
  "message": "Idea not found"
}
9. Postman Testing

All API endpoints were tested using Postman during development.

The following scenarios were verified:

User Registration
User Login
JWT Authentication
Protected Routes
Submit New Idea
File Upload
Duplicate Idea Validation
Upvote
Downvote
Add Comment
Update Idea Status
Leaderboard Retrieval
Invalid File Upload
Empty Input Validation

Each endpoint returned the expected HTTP status codes and responses under both valid and invalid input conditions.

10. Conclusion

The Ideathon Portal API provides a secure and well-structured RESTful interface for managing users and ideas. JWT authentication secures protected endpoints, while Socket.IO enables real-time synchronization across connected clients. The API also incorporates validation for duplicate ideas, empty inputs, and file uploads, ensuring reliable and consistent application behavior.
Project Title

Ideathon Portal – Collaborative Innovation Management System


1. Introduction

1.1 Purpose

The purpose of this Software Requirements Specification (SRS) is to define the functional and non-functional requirements of the Ideathon Portal. This document serves as a reference for developers, project guides, and evaluators by describing the system's expected behavior and overall design.

1.2 Project Overview

The Ideathon Portal is a web-based platform that enables users to submit innovative ideas, collaborate through voting and comments, upload supporting documents, and monitor the progress of ideas. The application provides secure authentication and real-time synchronization using Socket.IO.

1.3 Intended Audience

This document is intended for:

Developers
Project Guide
Testers
Project Evaluators
End Users
2. Overall Description
2.1 Product Perspective

The Ideathon Portal is a standalone web application developed using the MERN stack.

It consists of:

React frontend
Express.js backend
MongoDB database
Socket.IO server
JWT Authentication
Multer for file uploads
2.2 Product Functions

The system allows users to:

Register an account
Log in securely
Submit ideas
Upload supporting documents
Search ideas
Filter ideas by category
Vote on ideas
Comment on ideas
Track idea progress
View the leaderboard
Receive real-time updates
2.3 User Classes
Guest
Register
Login
View public ideas
Registered User
Submit ideas
Upload documents
Vote
Comment
View leaderboard
Track idea evolution
2.4 Operating Environment

Frontend

React
Tailwind CSS
Vite

Backend

Node.js
Express.js

Database

MongoDB

Operating System

Windows
Linux
macOS

Supported Browsers

Google Chrome
Microsoft Edge
Mozilla Firefox
3. System Features
3.1 User Registration
Description

Allows new users to create an account.

Inputs
Name
Email
Password
Output

User account created successfully.

3.2 User Login
Description

Allows registered users to authenticate using email and password.

Inputs
Email
Password
Output

JWT token generated.

3.3 Submit Idea
Description

Allows authenticated users to submit innovative ideas.

Inputs
Idea Title
Description
Category
Supporting Document
Output

Idea stored in MongoDB.

3.4 Upload Supporting Documents

Supported file formats:

PDF
DOC
DOCX
PPT
PPTX

Maximum file size:

10 MB
3.5 Search Ideas

Users can search ideas using keywords from:

Title
Description
3.6 Category Filter

Users can filter ideas by category.

Example:

Process Improvement
New Revenue
3.7 Voting System

Users can:

Upvote ideas
Downvote ideas

Votes update instantly using Socket.IO.

3.8 Comment System

Users can:

View comments
Add comments

New comments appear instantly.

3.9 Leaderboard

Ideas are ranked according to total votes.

Highest voted ideas appear first.

3.10 Idea Evolution

Each idea moves through four stages:

Submitted
Under Review
Approved
Implemented
3.11 Real-Time Updates

Socket.IO broadcasts:

New ideas
Vote changes
Comments
Status updates

without requiring users to refresh the page.

4. External Interface Requirements
4.1 User Interface

The system provides:

Responsive dashboard
Navigation bar
Sidebar
Login page
Registration page
Idea submission form
Leaderboard page
Search bar
Category filter
Timeline visualization
4.2 Software Interface

Frontend communicates with backend through REST APIs.

Real-time communication uses Socket.IO.

4.3 Database Interface

MongoDB stores:

Users
Ideas
Comments
Votes
Uploaded file information
5. Non-Functional Requirements
Performance
Response time below 2 seconds.
Real-time updates with minimal delay.
Security
JWT Authentication
Password hashing using bcrypt
Protected routes
File validation
Duplicate idea validation
Reliability
Stable API responses
Proper exception handling
Scalability
Support multiple simultaneous users.
Easy to extend with additional modules.
Availability

System should be available whenever the backend server is running.

Maintainability

Code follows modular architecture using:

Controllers
Routes
Models
Middleware
6. System Architecture

The application follows a three-tier architecture.

+----------------------+
| React Frontend       |
+----------+-----------+
           |
        REST API
           |
+----------v-----------+
| Express.js Backend   |
| JWT Authentication   |
| Socket.IO Server     |
| Multer               |
+----------+-----------+
           |
+----------v-----------+
| MongoDB Database     |
+----------------------+
7. Database Requirements
User Collection

Attributes

Name
Email
Password
Idea Collection

Attributes

Idea Type
Title
Description
File
Votes
Comments
Evolution Status
Created At
Updated At
8. Software Requirements
Frontend
React
Tailwind CSS
Axios
React Router
React Icons
Socket.IO Client
Backend
Node.js
Express.js
Socket.IO
Multer
JWT
bcrypt
Database
MongoDB
Mongoose
Development Tools
Visual Studio Code
Git
GitHub
MongoDB Compass
Postman
9. Hardware Requirements

Minimum:

Processor

Intel Core i3 or equivalent

RAM

4 GB

Storage

1 GB free space

Internet

Required for real-time communication
10. Assumptions and Constraints
Assumptions
Users have internet access.
MongoDB server is available.
Uploaded files are safe.
Modern browsers are used.
Constraints
Academic project timeline.
Local development environment.
File upload limited to 10 MB.
Supported document formats only.

11. Future Enhancements

Possible future improvements include:

Admin Dashboard
User Profile Management
Email Notifications
AI-based Idea Recommendation
Cloud File Storage
Drag-and-Drop Uploads
Advanced Analytics Dashboard
Role-Based Access Control

12. Conclusion

The Ideathon Portal provides a secure and collaborative environment for collecting and evaluating innovative ideas. By integrating user authentication, document uploads, real-time communication, voting, commenting, and idea lifecycle tracking, the system demonstrates the practical implementation of modern full-stack web development concepts. The modular architecture and scalable design also allow future enhancements to be incorporated with minimal changes to the existing system.
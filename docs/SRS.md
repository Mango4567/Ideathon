Software Requirement Specification (SRS)

Project Title:-

Ideathon Portal – Collaborative Innovation Management System

Functional Requirements:-

User Registration

Users shall be able to create a new account.

User Login

Registered users shall be able to log in securely using JWT authentication.

Submit Idea

Authenticated users shall be able to submit new ideas.

Upload Supporting Documents

Users shall be able to upload PDF, DOC, DOCX, PPT, and PPTX files while submitting ideas.

View Ideas

Users shall be able to browse all submitted ideas.

Search and Filter Ideas

Users shall be able to search ideas by keywords and filter them by category.

Vote on Ideas

Users shall be able to upvote and downvote submitted ideas.

Add Comments

Users shall be able to comment on ideas.

Leaderboard

The system shall display ideas ranked according to vote count.

Idea Evolution Timeline

Users shall be able to track the progress of ideas through different implementation stages.

Real-Time Updates

Users shall receive instant updates when ideas are submitted, voted on, commented on, or updated.

Non-Functional Requirements:-

Security

JWT-based authentication
Password hashing using bcrypt
Protected routes
Input validation
File type and size validation

Performance

Response time below 2 seconds under normal load
Real-time synchronization using Socket.IO
Scalability
Support multiple concurrent users
Efficient handling of real-time events

Reliability

Stable application behavior
Secure database operations
Usability
Responsive user interface
Simple and intuitive navigation
Easy idea submission workflow

Technology Stack

Frontend
React.js
React Router
Tailwind CSS
Axios
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
Postman
Git
GitHub
MongoDB Compass
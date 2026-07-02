Project Title

Ideathon Portal – Collaborative Innovation Management System

1. Executive Summary

The Ideathon Portal is a web-based collaborative platform that enables organizations or educational institutions to collect, evaluate, and manage innovative ideas submitted by users. The system encourages participation by allowing authenticated users to submit ideas, upload supporting documents, vote on ideas, comment on submissions, and monitor the progress of ideas through different implementation stages.

The application incorporates real-time communication using Socket.IO, allowing all connected users to instantly receive updates whenever an idea is submitted, voted on, commented on, or its status changes.

2. Business Problem

Organizations often struggle to collect and manage innovative ideas efficiently due to:

Lack of a centralized idea submission platform.
Duplicate idea submissions.
Limited collaboration between contributors.
Difficulty tracking the progress of submitted ideas.
Delayed communication regarding idea updates.
Inefficient evaluation of ideas based on community feedback.

These issues reduce employee engagement and slow down the innovation process.

3. Business Objectives

The Ideathon Portal aims to:

Provide a centralized platform for idea submission.
Encourage collaboration through voting and commenting.
Prevent duplicate idea submissions.
Enable secure user authentication.
Support document attachments for ideas.
Display idea rankings using a leaderboard.
Track the lifecycle of ideas.
Deliver real-time updates to all connected users.
4. Project Scope
In Scope
User Registration
User Login
JWT Authentication
Protected Routes
Submit New Ideas
Upload Supporting Documents
Search Ideas
Filter Ideas by Category
Upvote and Downvote Ideas
Add Comments
Leaderboard
Idea Evolution Timeline
Real-Time Updates using Socket.IO
Out of Scope
Email Notifications
Admin Dashboard
AI-Based Idea Recommendations
Cloud File Storage
Social Media Integration
Mobile Application
5. Stakeholders
Stakeholder	Role
Users	Submit and interact with ideas
Development Team	Design and develop the application
Project Guide	Review project progress
College/University	Evaluate project implementation
6. Functional Requirements
FR-1 User Registration

Users shall be able to create an account.

FR-2 User Login

Users shall authenticate securely using JWT.

FR-3 Submit Idea

Authenticated users shall be able to submit new ideas.

FR-4 Upload Supporting Documents

Users shall be able to attach PDF, DOC, DOCX, PPT, and PPTX files while submitting ideas.

FR-5 View Ideas

Users shall be able to browse all submitted ideas.

FR-6 Search Ideas

Users shall be able to search ideas using keywords.

FR-7 Filter Ideas

Users shall be able to filter ideas based on idea categories.

FR-8 Vote on Ideas

Users shall be able to upvote and downvote ideas.

FR-9 Add Comments

Users shall be able to comment on submitted ideas.

FR-10 Leaderboard

The system shall display ideas ranked according to votes.

FR-11 Track Idea Evolution

Users shall be able to view the progress of ideas through predefined stages:

Submitted
Under Review
Approved
Implemented
FR-12 Real-Time Notifications

All connected users shall receive real-time updates when:

A new idea is submitted
Votes are updated
Comments are added
Idea status changes
7. Non-Functional Requirements
Performance
System response time should remain below 2 seconds under normal load.
Security
JWT-based authentication.
Password hashing using bcrypt.
Protected API routes.
File type validation.
File size restrictions.
Reliability
Stable application behavior.
Secure database transactions.
Scalability
Support multiple concurrent users using Socket.IO.
Usability
Responsive and user-friendly interface.
Simple navigation.
Easy idea submission workflow.
8. Business Rules
Every user must register before submitting ideas.
Only authenticated users can create ideas.
Idea titles must be unique.
Empty idea titles are not allowed.
Empty comments are not allowed.
Uploaded files must be PDF, DOC, DOCX, PPT, or PPTX.
Maximum upload size is 10 MB.
Votes cannot be negative.
Every idea belongs to one category.
9. Assumptions
Users have internet connectivity.
Users provide valid information during registration.
MongoDB server remains available.
Uploaded documents are non-malicious.
Modern web browsers are used.
10. Constraints
Developed within an academic project timeline.
Uses MongoDB for data storage.
Runs locally during development.
Real-time communication depends on Socket.IO connectivity.
Authentication relies on JWT tokens.
11. Risks
Risk	Impact
Database Failure	High
Authentication Failure	High
File Upload Errors	Medium
Network Connectivity Issues	Medium
Socket.IO Connection Loss	Medium
Duplicate Requests	Low
12. Success Criteria

The project will be considered successful if:

Users can register and log in successfully.
JWT authentication works correctly.
Ideas can be submitted successfully.
Duplicate ideas are prevented.
Supporting documents upload correctly.
Ideas can be searched and filtered.
Voting and commenting function properly.
Leaderboard ranks ideas accurately.
Idea evolution timeline updates correctly.
Real-time updates are delivered without page refresh.
13. Technology Stack
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
14. Conclusion

The Ideathon Portal provides a centralized and interactive platform for idea management by combining secure authentication, real-time collaboration, document uploads, voting, commenting, and idea lifecycle tracking. The project demonstrates the practical application of full-stack web development concepts using the MERN stack along with modern technologies such as JWT, Socket.IO, and Multer. It offers an efficient solution for collecting, evaluating, and managing innovative ideas while encouraging collaboration among users.
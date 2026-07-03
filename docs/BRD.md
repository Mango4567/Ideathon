BUSINESS REQUIREMENT DOCUMENT (BRD)
Project Title

Ideathon Portal – Collaborative Innovation Management System

1. Executive Summary

The Ideathon Portal is a web-based collaborative innovation platform designed to help organizations and educational institutions collect, evaluate, and manage innovative ideas submitted by users. The platform enables authenticated users to submit ideas, upload supporting documents, vote on submissions, comment on ideas, and monitor their progress through different implementation stages.

To improve collaboration, the application integrates Socket.IO, allowing all connected users to receive real-time updates whenever ideas are submitted, voted on, commented on, or their implementation status changes.

2. Business Problem

Many organizations face challenges in managing innovative ideas due to:

Lack of a centralized idea submission platform
Duplicate idea submissions
Limited collaboration between contributors
Difficulty tracking the progress of submitted ideas
Delayed communication regarding idea updates
Inefficient evaluation of ideas based on community feedback

These issues reduce employee engagement and slow down the innovation process.

3. Business Objectives

The primary objectives of the Ideathon Portal are:

Provide a centralized platform for idea submission
Encourage collaboration through voting and commenting
Prevent duplicate idea submissions
Enable secure user authentication
Support document attachments for ideas
Display idea rankings through a leaderboard
Track the lifecycle of submitted ideas
Deliver real-time updates to all connected users

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
Users	Submit ideas, vote, comment, and track idea progress
Development Team	Design, develop, and maintain the application
Project Guide	Review project progress and provide guidance
College / University	Evaluate the project for academic purposes

6. Functional Requirements
FR-1 User Registration

Users shall be able to create a new account.

FR-2 User Login

Users shall authenticate securely using JWT.

FR-3 Submit Idea

Authenticated users shall be able to submit innovative ideas.

FR-4 Upload Supporting Documents

Users shall be able to upload PDF, DOC, DOCX, PPT, and PPTX files while submitting ideas.

FR-5 View Ideas

Users shall be able to browse all submitted ideas.

FR-6 Search Ideas

Users shall be able to search ideas using keywords.

FR-7 Filter Ideas

Users shall be able to filter ideas based on categories.

FR-8 Vote on Ideas

Users shall be able to upvote and downvote submitted ideas.

FR-9 Add Comments

Users shall be able to comment on ideas.

FR-10 Leaderboard

The system shall display ideas ranked according to vote count.

FR-11 Track Idea Evolution

Users shall be able to monitor the progress of ideas through the following stages:

Submitted
Under Review
Approved
Implemented
FR-12 Real-Time Updates

The system shall notify all connected users whenever:

A new idea is submitted
Votes are updated
Comments are added
Idea status changes

7. Non-Functional Requirements
Category	Requirement
Performance	System response time should remain below 2 seconds under normal load.
Security	JWT authentication, password hashing using bcrypt, protected routes, file validation, and input validation.
Reliability	Stable application behavior and secure database transactions.
Scalability	Support multiple concurrent users using Socket.IO.
Usability	Responsive interface, intuitive navigation, and simple idea submission workflow.

8. Business Rules
Every user must register before submitting ideas.
Only authenticated users can submit ideas.
Idea titles must be unique.
Empty idea titles are not permitted.
Empty comments are not permitted.
Uploaded files must be in PDF, DOC, DOCX, PPT, or PPTX format.
Maximum upload size is 10 MB.
Vote count cannot become negative.
Every idea must belong to one category.

9. Assumptions
Users have internet connectivity.
Users provide valid registration information.
MongoDB remains available during application usage.
Uploaded files are free from malicious content.
Users access the system through modern web browsers.

10. Constraints
Developed within an academic project timeline.
Uses MongoDB as the database.
Runs locally during development.
Real-time functionality depends on Socket.IO connectivity.
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

User registration functions correctly.
Login and JWT authentication work successfully.
Ideas can be submitted without errors.
Duplicate idea submissions are prevented.
Supporting documents upload successfully.
Search and category filtering work correctly.
Voting and commenting function properly.
Leaderboard ranks ideas accurately.
Idea evolution timeline updates correctly.
Real-time updates are delivered without refreshing the page.

13. Technology Stack
Layer	Technologies
Frontend	React.js, React Router, Tailwind CSS, Axios, React Icons, Socket.IO Client
Backend	Node.js, Express.js, Socket.IO, Multer, JWT, bcrypt
Database	MongoDB, Mongoose
Development Tools	Visual Studio Code, Postman, Git, GitHub, MongoDB Compass

14. Conclusion

The Ideathon Portal provides a centralized and interactive solution for idea management by integrating secure authentication, real-time collaboration, document uploads, voting, commenting, and idea lifecycle tracking. Built using the MERN stack, the project demonstrates the practical application of modern web development technologies, including JWT, Socket.IO, and Multer. It offers an efficient platform for collecting, evaluating, and managing innovative ideas while encouraging collaboration and user engagement.
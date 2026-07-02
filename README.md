Ideathon Portal

Ideathon Portal is a full-stack MERN application developed to provide a collaborative platform where users can submit innovative ideas, discuss them through comments, vote on the best ideas, and track their progress from submission to implementation.

The application also supports real-time updates using Socket.IO, so all connected users instantly see newly submitted ideas, vote changes, comments, and status updates without refreshing the page.


# Features

# User Authentication
- Register new users
- Secure login using JWT
- Password hashing with bcrypt
- Protected routes
- Logout functionality

# Idea Management
- Submit new ideas
- Upload supporting documents (PDF, DOC, DOCX, PPT, PPTX)
- Prevent duplicate idea submissions
- View all submitted ideas
- Search ideas by title or description
- Filter ideas by category

# Collaboration
- Upvote and downvote ideas
- Comment on ideas
- Real-time vote updates
- Real-time comment updates

# Idea Progress Tracking
Each idea moves through the following stages:

- Submitted
- Under Review
- Approved
- Implemented

# Leaderboard
Ideas are ranked automatically based on the number of votes received.

# Real-Time Updates
Socket.IO is used to broadcast:

- New ideas
- Vote updates
- New comments
- Status changes

without requiring users to refresh the page.



# Tech Stack

# Frontend

- React
- React Router
- Tailwind CSS
- Axios
- React Icons
- Socket.IO Client

# Backend

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication
- bcrypt
- Multer
- Socket.IO



# Project Structure


Ideathon/
│
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── socket/
│   ├── uploads/
│   ├── server.js
│   └── package.json
│
├── frontend/
│   ├── src/
│   ├── components/
│   ├── pages/
│   ├── services/
│   ├── layouts/
│   ├── routes.jsx
│   └── package.json
│
├── README.md
└── .gitignore


# Getting Started

# Clone the repository

bash
git clone https://github.com/your-username/Ideathon.git



# Backend

Navigate to the backend folder.

bash
cd backend

Install dependencies.

bash
npm install


Create a `.env` file and add:

env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key


Start the backend server.

```bash
npm run dev

# Frontend

Navigate to the frontend folder.

bash
cd frontend

Install dependencies.

bash
npm install

Run the React application.

bash
npm run dev

The frontend will start on:

http://localhost:5173

# API Endpoints

# Authentication

| Method | Endpoint | Description |
|---------|----------|-------------|
| POST | `/api/auth/register` | Register a new user |
| POST | `/api/auth/login` | Login user |

# Ideas

| Method | Endpoint | Description |
|---------|----------|-------------|
| GET | `/api/ideas` | Get all ideas |
| POST | `/api/ideas` | Submit an idea |
| PATCH | `/api/ideas/:id/upvote` | Upvote an idea |
| PATCH | `/api/ideas/:id/downvote` | Downvote an idea |
| POST | `/api/ideas/:id/comment` | Add a comment |
| PATCH | `/api/ideas/:id/status` | Update idea status |
| GET | `/api/ideas/leaderboard` | Get leaderboard |

# Security

The application includes basic security measures such as:

- JWT-based authentication
- Password hashing using bcrypt
- Protected routes
- File type validation
- File size validation
- Input validation for titles and comments

# Screenshots

Add screenshots here before submission.

screenshots/
    login.png
    home.png
    submit-idea.png
    leaderboard.png

Example:
markdown
![Home](screenshots/home.png)

# Future Improvements

Some features that could be added in future versions:

- User profiles
- Admin dashboard
- Email notifications
- Bookmark ideas
- AI-powered idea recommendations
- Cloud storage for uploaded files
- Drag-and-drop file uploads

# License

This project was developed as part of the **Advanced Software Engineering** course.

It is intended for educational purposes only.
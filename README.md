Ideathon Portal

Ideathon Portal is a full-stack MERN application developed to provide a collaborative platform where users can submit innovative ideas, discuss them through comments, vote on the best ideas, and track their progress from submission to implementation.

The application also supports real-time updates using Socket.IO, so all connected users instantly see newly submitted ideas, vote changes, comments, and status updates without refreshing the page.


 Features

 User Authentication
- Register new users
- Secure login using JWT
- Password hashing with bcrypt
- Protected routes
- Logout functionality

 Idea Management
- Submit new ideas
- Upload supporting documents (PDF, DOC, DOCX, PPT, PPTX)
- Prevent duplicate idea submissions
- View all submitted ideas
- Search ideas by title or description
- Filter ideas by category

 Collaboration
- Upvote and downvote ideas
- Comment on ideas
- Real-time vote updates
- Real-time comment updates

 Idea Progress Tracking
Each idea moves through the following stages:

- Submitted
- Under Review
- Approved
- Implemented

 Leaderboard
Ideas are ranked automatically based on the number of votes received.

 Real-Time Updates
Socket.IO is used to broadcast:

- New ideas
- Vote updates
- New comments
- Status changes

without requiring users to refresh the page.



Tech Stack

Frontend

- React
- React Router
- Tailwind CSS
- Axios
- React Icons
- Socket.IO Client

Backend

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication
- bcrypt
- Multer
- Socket.IO


Project Structure

## Project Structure

```text
Ideathon/
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── socket/
│   ├── uploads/
│   ├── .env.example
│   ├── server.js
│   └── package.json
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── layouts/
│   │   ├── pages/
│   │   ├── services/
│   │   └── routes.jsx
│   └── package.json
│
├── docs/
│   ├── BRD.md
│   ├── SRS.md
│   ├── API_Documentation.md
│   ├── ER_Diagram.png
│   └── Screenshots/
│
├── README.md
└── .gitignore
```

 Getting Started

 Clone the repository

bash
git clone https://github.com/your-username/Ideathon.git

Running the Project
Backend

Open a terminal and navigate to the backend folder.

cd backend
npm install
npm run dev

The backend server runs on:

http://localhost:5000
Frontend

Open another terminal and navigate to the frontend folder.

cd frontend
npm install
npm run dev

The frontend runs on:

http://localhost:5173

Create a `.env` file and add:

env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key

## API Endpoints

### Authentication

- `POST /api/auth/register` – Register a new user
- `POST /api/auth/login` – Authenticate a user

### Ideas

- `GET /api/ideas` – Retrieve all ideas
- `POST /api/ideas` – Submit a new idea
- `PATCH /api/ideas/:id/upvote` – Upvote an idea
- `PATCH /api/ideas/:id/downvote` – Downvote an idea
- `POST /api/ideas/:id/comment` – Add a comment
- `PATCH /api/ideas/:id/status` – Update the idea status
- `GET /api/ideas/leaderboard` – View ideas ranked by votes

Security Features

The application includes:

JWT authentication
Password hashing with bcrypt
Protected routes
File type and file size validation
Input validation for idea submissions and comments
Future Enhancements

Possible improvements for future versions include:

User profile management
Administrative dashboard
Email notifications
Bookmark or favourite ideas
AI-assisted idea recommendations
Cloud storage for uploaded files
Drag-and-drop file uploads

License

This project was developed as part of the Advanced Software Engineering course and is intended for educational purposes.
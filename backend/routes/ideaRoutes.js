const express = require("express");

const router = express.Router();

const upload = require("../middleware/upload");

const { protect } = require("../middleware/authMiddleware");

const {
  createIdea,
  getIdeas,
  upvoteIdea,
  downvoteIdea,
  addComment,
  getLeaderboard,
  updateIdeaStatus,
} = require("../controllers/ideaController");

// Leaderboard
router.get("/leaderboard", getLeaderboard);

// Get All Ideas
router.get("/", getIdeas);

// Create Idea (with File Upload)
router.post("/", upload.single("file"),protect, createIdea);

// Upvote Idea
router.patch("/:id/upvote",protect, upvoteIdea);

// Downvote Idea
router.patch("/:id/downvote",protect, downvoteIdea);

// Add Comment
router.post("/:id/comment",protect, addComment);

// Update Idea Status
router.patch("/:id/status",protect, updateIdeaStatus);

module.exports = router;
const Idea = require("../models/Idea");
const { getIO } = require("../socket/socket");

// Create New Idea
const createIdea = async (req, res) => {
  try {
    // Validate title
    if (!req.body.title || !req.body.title.trim()) {
      return res.status(400).json({
        message: "Idea title cannot be empty.",
      });
    }

    // Check for duplicate title (case-insensitive)
    const existingIdea = await Idea.findOne({
      title: {
        $regex: new RegExp(`^${req.body.title.trim()}$`, "i"),
      },
    });

    if (existingIdea) {
      return res.status(400).json({
        message: "An idea with this title already exists.",
      });
    }

    const newIdea = new Idea({
      ideaType: req.body.ideaType,
      title: req.body.title.trim(),
      description: req.body.description,
      file: req.file ? req.file.filename : "",
    });

    const savedIdea = await newIdea.save();

    // Real-time update
    getIO().emit("ideaCreated", savedIdea);

    res.status(201).json(savedIdea);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// Get All Ideas
const getIdeas = async (req, res) => {
  try {
    // Newest ideas first
    const ideas = await Idea.find().sort({ createdAt: -1 });

    res.status(200).json(ideas);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// Upvote Idea
const upvoteIdea = async (req, res) => {
  try {
    const idea = await Idea.findById(req.params.id);

    if (!idea) {
      return res.status(404).json({
        message: "Idea not found",
      });
    }

    idea.votes += 1;

    await idea.save();

    // Real-time update
    getIO().emit("voteUpdated", idea);

    res.status(200).json(idea);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// Downvote Idea
const downvoteIdea = async (req, res) => {
  try {
    const idea = await Idea.findById(req.params.id);

    if (!idea) {
      return res.status(404).json({
        message: "Idea not found",
      });
    }

    if (idea.votes > 0) {
      idea.votes -= 1;
    }

    await idea.save();

    // Real-time update
    getIO().emit("voteUpdated", idea);

    res.status(200).json(idea);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// Add Comment
const addComment = async (req, res) => {
  try {
    const { comment } = req.body;

    const idea = await Idea.findById(req.params.id);

    if (!idea) {
      return res.status(404).json({
        message: "Idea not found",
      });
    }

    idea.comments.push(comment);

    await idea.save();

    // Real-time update
    getIO().emit("commentAdded", idea);

    res.status(200).json(idea);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// Leaderboard
const getLeaderboard = async (req, res) => {
  try {
    const leaderboard = await Idea.find().sort({ votes: -1 });

    res.status(200).json(leaderboard);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// Update Idea Status
const updateIdeaStatus = async (req, res) => {
  try {
    const { status } = req.body;

    const idea = await Idea.findById(req.params.id);

    if (!idea) {
      return res.status(404).json({
        message: "Idea not found",
      });
    }

    idea.evolutionStatus = status;

    await idea.save();

    // Real-time update
    getIO().emit("statusUpdated", idea);

    res.status(200).json(idea);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  createIdea,
  getIdeas,
  upvoteIdea,
  downvoteIdea,
  addComment,
  getLeaderboard,
  updateIdeaStatus,
};
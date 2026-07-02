const express = require("express");
const cors = require("cors");
const path = require("path");
const http = require("http");
require("dotenv").config();

const connectDB = require("./config/db");
const ideaRoutes = require("./routes/ideaRoutes");
const authRoutes = require("./routes/authRoutes");
const { initializeSocket } = require("./socket/socket");

const app = express();

// Create HTTP Server
const server = http.createServer(app);

// Initialize Socket.IO
initializeSocket(server);

// Connect Database
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Serve Uploaded Files
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// Routes
app.use("/api/ideas", ideaRoutes);
app.use("/api/auth", authRoutes);

// Test Route
app.get("/", (req, res) => {
  res.send("🚀 Ideathon Backend with Socket.IO is Running...");
});

// Global Error Handler
app.use((err, req, res, next) => {
  console.error(err);

  // Multer File Size Error
  if (err.code === "LIMIT_FILE_SIZE") {
    return res.status(400).json({
      message: "File size should not exceed 10 MB.",
    });
  }

  // Multer File Type Error
  if (err.message === "Only PDF, DOC, DOCX, PPT and PPTX files are allowed.") {
    return res.status(400).json({
      message: err.message,
    });
  }

  // Default Error
  res.status(500).json({
    message: err.message || "Internal Server Error",
  });
});

// Start Server
const PORT = process.env.PORT || 5000;

server.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
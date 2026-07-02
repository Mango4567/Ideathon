const multer = require("multer");
const path = require("path");

// Storage Configuration
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },

  filename: (req, file, cb) => {
    const uniqueName =
      Date.now() + path.extname(file.originalname).toLowerCase();

    cb(null, uniqueName);
  },
});

// Allowed MIME Types
const allowedMimeTypes = [
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  "application/vnd.ms-powerpoint",
  "application/vnd.openxmlformats-officedocument.presentationml.presentation",
];

// File Filter
const fileFilter = (req, file, cb) => {
  if (allowedMimeTypes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(
      new Error(
        "Only PDF, DOC, DOCX, PPT and PPTX files are allowed."
      ),
      false
    );
  }
};

const upload = multer({
  storage,
  fileFilter,

  // Maximum file size: 10 MB
  limits: {
    fileSize: 10 * 1024 * 1024,
  },
});

module.exports = upload;
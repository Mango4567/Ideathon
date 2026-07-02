const mongoose = require("mongoose");

const ideaSchema = new mongoose.Schema(
  {
    ideaType: {
      type: String,
      required: true,
    },

    title: {
      type: String,
      required: true,
    },

    description: {
      type: String,
      required: true,
    },

    file: {
      type: String,
      default: "",
    },

    votes: {
      type: Number,
      default: 0,
    },

    comments: {
      type: [String],
      default: [],
    },

    evolutionStatus: {
      type: String,
      enum: [
        "Submitted",
        "Under Review",
        "Approved",
        "Implemented",
      ],
      default: "Submitted",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Idea", ideaSchema);
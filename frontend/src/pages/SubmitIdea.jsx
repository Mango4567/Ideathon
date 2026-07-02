import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaPaperclip } from "react-icons/fa";
import api from "../services/api";

function SubmitIdea() {
  const [ideaType, setIdeaType] = useState("Process Improvement");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState(null);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();

      formData.append("ideaType", ideaType);
      formData.append("title", title);
      formData.append("description", description);

      if (file) {
        formData.append("file", file);
      }

      await api.post("/ideas", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      alert("Idea submitted successfully!");

      setTitle("");
      setDescription("");
      setFile(null);
      setIdeaType("Process Improvement");

      navigate("/");
    } catch (error) {
      console.error(error);

      alert(
        error.response?.data?.message ||
        "Failed to submit idea."
      );
    }
  };

  return (
    <div className="max-w-3xl mx-auto bg-white shadow-md rounded-xl p-8">

      <h1 className="text-3xl font-bold mb-8">
        Submit New Idea
      </h1>

      <form onSubmit={handleSubmit} className="space-y-6">

        {/* Idea Type */}

        <div>
          <label className="block font-semibold mb-2">
            Idea Type
          </label>

          <select
            className="w-full border rounded-lg p-3"
            value={ideaType}
            onChange={(e) => setIdeaType(e.target.value)}
          >
            <option>Process Improvement</option>
            <option>New Revenue</option>
          </select>
        </div>

        {/* Title */}

        <div>
          <label className="block font-semibold mb-2">
            Idea Title
          </label>

          <input
            type="text"
            placeholder="Enter idea title"
            className="w-full border rounded-lg p-3"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>

        {/* Description */}

        <div>
          <label className="block font-semibold mb-2">
            Description
          </label>

          <textarea
            rows="5"
            placeholder="Describe your idea..."
            className="w-full border rounded-lg p-3"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>

        {/* File Upload */}

        <div>
          <label className="block font-semibold mb-3">
            Attach File (PDF, DOC, DOCX, PPT, PPTX)
          </label>

          <label
            htmlFor="file-upload"
            className="flex flex-col items-center justify-center gap-3 cursor-pointer border-2 border-dashed border-blue-400 rounded-xl p-8 hover:bg-blue-50 transition duration-300"
          >
            <FaPaperclip className="text-4xl text-blue-600" />

            <span className="text-lg font-medium text-gray-700">
              {file ? file.name : "Click here to choose a file"}
            </span>

            <span className="text-sm text-gray-500">
              PDF • DOC • DOCX • PPT • PPTX
            </span>
          </label>

          <input
            id="file-upload"
            type="file"
            accept=".pdf,.doc,.docx,.ppt,.pptx"
            className="hidden"
            onChange={(e) => setFile(e.target.files[0])}
          />

          {file ? (
            <p className="mt-3 text-green-600 font-medium">
              ✅ Ready to upload: {file.name}
            </p>
          ) : (
            <p className="mt-3 text-gray-500">
              No file selected.
            </p>
          )}
        </div>

        {/* Submit */}

        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition"
        >
          Submit Idea
        </button>

      </form>

    </div>
  );
}

export default SubmitIdea;
import { useState } from "react";
import { FaPaperPlane } from "react-icons/fa";
import api from "../../services/api";

function CommentSection({ id, comments = [] }) {
  const [newComment, setNewComment] = useState("");

  const addComment = async () => {
    if (!newComment.trim()) return;

    try {
      await api.post(`/ideas/${id}/comment`, {
        comment: newComment,
      });

      // Socket.IO will update the comments list
      setNewComment("");
    } catch (error) {
      console.error("Failed to add comment:", error);
    }
  };

  return (
    <div className="mt-8 border-t pt-6">

      <h3 className="text-xl font-bold mb-5">
        Comments
      </h3>

      <div className="space-y-3 mb-5">

        {comments.length === 0 ? (
          <p className="text-gray-500">
            No comments yet.
          </p>
        ) : (
          comments.map((comment, index) => (
            <div
              key={index}
              className="bg-gray-100 rounded-lg p-3"
            >
              {comment}
            </div>
          ))
        )}

      </div>

      <div className="flex gap-3">

        <input
          type="text"
          placeholder="Write a comment..."
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          className="flex-1 border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <button
          onClick={addComment}
          className="bg-blue-600 hover:bg-blue-700 text-white px-5 rounded-lg flex items-center gap-2"
        >
          <FaPaperPlane />
          Post
        </button>

      </div>

    </div>
  );
}

export default CommentSection;
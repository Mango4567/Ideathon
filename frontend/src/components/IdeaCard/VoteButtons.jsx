import { FaThumbsUp, FaThumbsDown } from "react-icons/fa";
import api from "../../services/api";

function VoteButtons({ id, votes }) {

  const upVote = async () => {
    try {
      await api.patch(`/ideas/${id}/upvote`);
    } catch (error) {
      console.error("Upvote failed:", error);
    }
  };

  const downVote = async () => {
    try {
      await api.patch(`/ideas/${id}/downvote`);
    } catch (error) {
      console.error("Downvote failed:", error);
    }
  };

  return (
    <div className="flex items-center justify-between mt-6">

      <div className="flex gap-4">

        <button
          onClick={upVote}
          className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-lg transition"
        >
          <FaThumbsUp />
          Upvote
        </button>

        <button
          onClick={downVote}
          className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-5 py-2 rounded-lg transition"
        >
          <FaThumbsDown />
          Downvote
        </button>

      </div>

      <div className="text-lg font-bold text-blue-700">
        {votes} Votes
      </div>

    </div>
  );
}

export default VoteButtons;
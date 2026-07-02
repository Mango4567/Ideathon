import { useNavigate } from "react-router-dom";
import VoteButtons from "./VoteButtons";
import CommentSection from "./CommentSection";
import EvolutionTimeline from "./EvolutionTimeline";

function IdeaCard({
  id,
  title,
  category,
  description,
  author,
  votes,
  comments,
  evolutionStatus,
  file,
}) {
  const navigate = useNavigate();

  // Temporary debugging (remove later)
  console.log("File received:", file);

  const badgeColor =
    category === "Process Improvement"
      ? "bg-green-100 text-green-700"
      : "bg-orange-100 text-orange-700";

  return (
    <div
      onClick={() => navigate("/idea-details")}
      className="bg-white rounded-xl shadow-md p-7 mb-8 border border-gray-200 hover:shadow-xl hover:scale-[1.01] transition cursor-pointer"
    >
      {/* Header */}

      <div className="flex justify-between items-start">
        <div>
          <h2 className="text-3xl font-bold text-gray-800">
            {title}
          </h2>

          <span
            className={`inline-block mt-3 px-3 py-1 rounded-full text-sm font-semibold ${badgeColor}`}
          >
            {category}
          </span>
        </div>

        <div className="text-gray-500">
          💬 {comments.length} Comments
        </div>
      </div>

      {/* Description */}

      <p className="mt-6 text-gray-600 leading-7">
        {description}
      </p>

      {/* Author */}

      <div className="mt-6 flex items-center gap-2 text-gray-500">
        👤
        <span>{author}</span>
      </div>

      {/* Attachment */}

      {file && (
        <div className="mt-6">
          <p className="font-semibold text-gray-700 mb-2">
            📎 Attachment
          </p>

          <a
            href={`http://localhost:5000/uploads/${file}`}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="text-blue-600 hover:text-blue-800 hover:underline break-all"
          >
            📄 {file}
          </a>
        </div>
      )}

      {/* Voting */}

      <div
        className="mt-6"
        onClick={(e) => e.stopPropagation()}
      >
        <VoteButtons
          id={id}
          votes={votes}
        />
      </div>

      {/* Comments */}

      <div onClick={(e) => e.stopPropagation()}>
        <CommentSection
          id={id}
          comments={comments}
        />
      </div>

      {/* Idea Evolution */}

      <div onClick={(e) => e.stopPropagation()}>
        <EvolutionTimeline
          status={evolutionStatus || "Submitted"}
        />
      </div>
    </div>
  );
}

export default IdeaCard;
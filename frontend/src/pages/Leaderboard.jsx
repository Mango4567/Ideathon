import { useEffect, useState } from "react";
import LeaderboardCard from "../components/Leaderboard/LeaderboardCard";
import api from "../services/api";

function Leaderboard() {
  const [ideas, setIdeas] = useState([]);

  useEffect(() => {
    fetchLeaderboard();
  }, []);

  const fetchLeaderboard = async () => {
    try {
      const response = await api.get("/ideas/leaderboard");
      setIdeas(response.data);
    } catch (error) {
      console.error("Error fetching leaderboard:", error);
    }
  };

  return (
    <div className="max-w-5xl mx-auto">

      <h1 className="text-4xl font-bold mb-2">
        🏆 Leaderboard
      </h1>

      <p className="text-gray-500 mb-8">
        Top ideas ranked by community votes.
      </p>

      {ideas.length === 0 ? (
        <p className="text-gray-500">
          No ideas available.
        </p>
      ) : (
        ideas.map((idea, index) => (
          <LeaderboardCard
            key={idea._id}
            rank={index + 1}
            name={idea.title}
            points={idea.votes}
          />
        ))
      )}

    </div>
  );
}

export default Leaderboard;
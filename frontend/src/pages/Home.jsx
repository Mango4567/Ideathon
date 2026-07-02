import { useEffect, useState } from "react";
import IdeaCard from "../components/IdeaCard/IdeaCard";
import api from "../services/api";
import socket from "../services/socket";

function Home() {
  const [ideas, setIdeas] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const fetchIdeas = async () => {
    try {
      const response = await api.get("/ideas");
      setIdeas(response.data);
    } catch (error) {
      console.error("Error fetching ideas:", error);
    }
  };

  // Fetch ideas when page loads
  useEffect(() => {
    fetchIdeas();
  }, []);

  // Listen for Socket.IO events
  useEffect(() => {
    // New Idea
    socket.on("ideaCreated", (newIdea) => {
      console.log("📢 New idea received:", newIdea);

      setIdeas((prevIdeas) => [newIdea, ...prevIdeas]);
    });

    // Vote Updated
    socket.on("voteUpdated", (updatedIdea) => {
      console.log("👍 Vote updated:", updatedIdea);

      setIdeas((prevIdeas) =>
        prevIdeas.map((idea) =>
          idea._id === updatedIdea._id ? updatedIdea : idea
        )
      );
    });

    // Comment Added
    socket.on("commentAdded", (updatedIdea) => {
      console.log("💬 Comment added:", updatedIdea);

      setIdeas((prevIdeas) =>
        prevIdeas.map((idea) =>
          idea._id === updatedIdea._id ? updatedIdea : idea
        )
      );
    });

    // Status Updated
    socket.on("statusUpdated", (updatedIdea) => {
      console.log("🔄 Status updated:", updatedIdea);

      setIdeas((prevIdeas) =>
        prevIdeas.map((idea) =>
          idea._id === updatedIdea._id ? updatedIdea : idea
        )
      );
    });

    return () => {
      socket.off("ideaCreated");
      socket.off("voteUpdated");
      socket.off("commentAdded");
      socket.off("statusUpdated");
    };
  }, []);

  // Search + Category Filter
  const filteredIdeas = ideas.filter((idea) => {
    const matchesSearch =
      idea.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      idea.description.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesCategory =
      selectedCategory === "All" ||
      idea.ideaType === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <div>
      <h1 className="text-4xl font-bold mb-8">
        🔥 Trending Ideas
      </h1>

      {/* Search Bar */}

      <div className="mb-6">
        <input
          type="text"
          placeholder="🔍 Search ideas..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Category Filter */}

      <div className="mb-8">
        <label className="block font-semibold mb-2">
          Filter by Category
        </label>

        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="All">All</option>
          <option value="Process Improvement">
            Process Improvement
          </option>
          <option value="New Revenue">
            New Revenue
          </option>
        </select>
      </div>

      {/* Ideas List */}

      {filteredIdeas.length === 0 ? (
        <p className="text-gray-500 text-lg">
          No ideas found.
        </p>
      ) : (
        filteredIdeas.map((idea) => (
          <IdeaCard
            key={idea._id}
            id={idea._id}
            title={idea.title}
            category={idea.ideaType}
            description={idea.description}
            author="Anonymous"
            votes={idea.votes || 0}
            comments={idea.comments || []}
            evolutionStatus={idea.evolutionStatus}
            file={idea.file}
          />
        ))
      )}
    </div>
  );
}

export default Home;
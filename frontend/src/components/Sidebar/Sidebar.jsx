import { NavLink } from "react-router-dom";
import {
  FaHome,
  FaLightbulb,
  FaTrophy,
} from "react-icons/fa";

function Sidebar() {
  return (
    <aside className="w-64 min-h-screen bg-white shadow-lg p-6">

      <h2 className="text-2xl font-bold mb-8">
        Dashboard
      </h2>

      <nav className="flex flex-col gap-4">

        <NavLink
          to="/"
          className={({ isActive }) =>
            `flex items-center gap-3 p-3 rounded-lg ${
              isActive
                ? "bg-blue-100 text-blue-700 font-semibold"
                : "hover:bg-gray-100"
            }`
          }
        >
          <FaHome />
          Home
        </NavLink>

        <NavLink
          to="/submit-idea"
          className={({ isActive }) =>
            `flex items-center gap-3 p-3 rounded-lg ${
              isActive
                ? "bg-blue-100 text-blue-700 font-semibold"
                : "hover:bg-gray-100"
            }`
          }
        >
          <FaLightbulb />
          Submit Idea
        </NavLink>

        <NavLink
          to="/leaderboard"
          className={({ isActive }) =>
            `flex items-center gap-3 p-3 rounded-lg ${
              isActive
                ? "bg-blue-100 text-blue-700 font-semibold"
                : "hover:bg-gray-100"
            }`
          }
        >
          <FaTrophy />
          Leaderboard
        </NavLink>

      </nav>

    </aside>
  );
}

export default Sidebar;
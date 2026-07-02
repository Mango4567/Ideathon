import { NavLink, useNavigate } from "react-router-dom";
import { FaLightbulb } from "react-icons/fa";

function Navbar() {
  const navigate = useNavigate();

  const token = localStorage.getItem("token");
  const user = JSON.parse(localStorage.getItem("user"));

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    alert("Logged out successfully.");

    navigate("/login");
  };

  return (
    <nav className="bg-blue-700 text-white shadow-lg">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-4">

        {/* Logo */}

        <div className="flex items-center gap-3">

          <FaLightbulb className="text-3xl text-yellow-300" />

          <h1 className="text-3xl font-bold">
            Ideathon
          </h1>

        </div>

        {/* Navigation */}

        <ul className="flex items-center gap-8 font-medium">

          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "text-yellow-300" : ""
              }
            >
              Home
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/submit-idea"
              className={({ isActive }) =>
                isActive ? "text-yellow-300" : ""
              }
            >
              Submit Idea
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/leaderboard"
              className={({ isActive }) =>
                isActive ? "text-yellow-300" : ""
              }
            >
              Leaderboard
            </NavLink>
          </li>

          {!token ? (
            <>
              <li>
                <NavLink
                  to="/login"
                  className={({ isActive }) =>
                    isActive ? "text-yellow-300" : ""
                  }
                >
                  Login
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/register"
                  className={({ isActive }) =>
                    isActive ? "text-yellow-300" : ""
                  }
                >
                  Register
                </NavLink>
              </li>
            </>
          ) : (
            <>
              <li className="text-yellow-300 font-semibold">
                Welcome, {user?.name}
              </li>

              <li>
                <button
                  onClick={logout}
                  className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded-lg"
                >
                  Logout
                </button>
              </li>
            </>
          )}

        </ul>

      </div>
    </nav>
  );
}

export default Navbar;
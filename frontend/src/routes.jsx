import { createBrowserRouter } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";

import Home from "./pages/Home";
import SubmitIdea from "./pages/SubmitIdea";
import IdeaDetails from "./pages/IdeaDetails";
import Leaderboard from "./pages/Leaderboard";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ProtectedRoute from "./components/ProtectedRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "submit-idea",
        element: <ProtectedRoute>
        <SubmitIdea />
        </ProtectedRoute>,
      },
      {
        path: "idea-details",
        element: <IdeaDetails />,
      },
      {
        path: "leaderboard",
        element: <Leaderboard />,
      },
      {
        path:"login",
        element:<Login />,
      },
      {
        path:"register",
        element:<Register />,
      },
    ],
  },
]);

export default router;
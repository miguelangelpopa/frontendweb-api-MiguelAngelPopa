// src/main.jsx
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { createBrowserRouter, Navigate } from "react-router";
import { RouterProvider } from "react-router/dom";

import NotFound from "./pages/NotFound.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import Homepage from "./pages/Homepage.jsx";
import About from "./pages/about/About.jsx";

import WorkerDashboard from "./pages/Worker/WorkerDashboard.jsx";
import WorkerHours from "./pages/Worker/WorkerHours.jsx";
import WorkerMessages from "./pages/Worker/WorkerMessages.jsx";
import WorkerAddHours from "./pages/Worker/WorkerAddHours.jsx";

import BossDashboard from "./pages/Boss/BossDashboard.jsx";
import BossMessages from "./pages/Boss/BossMessages.jsx";
import BossPeople from "./pages/Boss/BossPeople.jsx";
import BossHourReview from "./pages/Boss/BossHourReview.jsx";

import ProfileSettings from "./pages/ProfileSettings.jsx";
import Layout from "./pages/Layout.jsx";

import ThemeProvider from "./contexts/Theme.context.jsx";
import { AuthProvider } from "./contexts/Auth.context.jsx";
import PrivateRoute from "./components/PrivateRoute.jsx"; 



const router = createBrowserRouter([
  {
    Component: Layout,
    children: [
      {
        path: "/",
        element: <Navigate replace to="/home" />,
      },

  
      { path: "/home", Component: Homepage },
      { path: "/login", Component: Login },
      { path: "/register", Component: Register },

    
      {
        path: "/boss",
        Component: PrivateRoute,
        children: [
          { index: true, Component: BossDashboard },
          { path: "dashboard", Component: BossDashboard },
          { path: "messages", Component: BossMessages },
          { path: "people", Component: BossPeople },
          { path: "hours/:id", Component: BossHourReview },
        ],
      },

      {
        path: "/worker",
        Component: PrivateRoute,
        children: [
          { index: true, Component: WorkerDashboard },
          { path: "dashboard", Component: WorkerDashboard },
          { path: "hours", Component: WorkerHours },
          { path: "add-hours", Component: WorkerAddHours },
          { path: "messages", Component: WorkerMessages },
        ],
      },
      {
        path: "/profile",
        Component: PrivateRoute,
        children: [{ index: true, Component: ProfileSettings }],
      },

      { path: "*", Component: NotFound },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <ThemeProvider>
        <RouterProvider router={router} />
      </ThemeProvider>
    </AuthProvider>
  </StrictMode>
);

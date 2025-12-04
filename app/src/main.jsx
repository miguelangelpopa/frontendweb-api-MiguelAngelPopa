import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router";



import NotFound from "./pages/NotFound.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import Homepage from "./pages/Homepage.jsx";
import WorkerDashboard from "./pages/WorkerDashboard.jsx";
import WorkerHours from "./pages/WorkerHours.jsx";
import BossDashboard from "./pages/BossDashboard.jsx";
import BossMessages from "./pages/BossMessages.jsx";
import WorkerMessages from "./pages/WorkerMessages.jsx";
import WorkerAddHours from "./pages/WorkerAddHours.jsx";
import Layout from "./pages/Layout.jsx";
import BossPeople from "./pages/BossPeople.jsx";

const router = createBrowserRouter([
  // Layout público
  {
    Component: Layout,
    children: [
      { path: "/", Component: Homepage },
      { path: "login", Component: Login },
      { path: "register", Component: Register },
      //Boss
        { path: "bossDashboard", Component: BossDashboard },
      { path: "bossMessages", Component: BossMessages },
      { path: "bossPeople", Component: BossPeople },
      //Worker
       { path: "workerDashboard", Component: WorkerDashboard },
      { path: "workerHours", Component: WorkerHours },
      { path: "workerMessages", Component: WorkerMessages },
       { path: "workerAddHours", Component: WorkerAddHours  },
      //
       { path: "*", Component: NotFound },
    ],
  },

 
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);

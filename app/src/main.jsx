import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router';
// Páginas/Componentes
import Layout from './pages/Layout.jsx';
import NotFound from './pages/NotFound.jsx';
import Login from './pages/Login.jsx';
import Register from './pages/Register.jsx';
import Homepage from './pages/Homepage.jsx';
import WorkerDashboard from './pages/WorkerDashboard.jsx';
import WorkerHours from './pages/WorkerHours.jsx';
import BossDashboard from './pages/BossDashboard.jsx';
import BossMessages from './pages/BossMessages.jsx';



const router = createBrowserRouter([
  {
    Component: Layout, 
    children: [
      { path: '/', Component: Homepage },
        
    ],
  },

  { path: '*', Component: NotFound },
  { path: 'homepage', Component: Homepage },
  { path: 'login', Component: Login },
  { path: 'register', Component: Register },
  { path: 'workerDashboard', Component: WorkerDashboard },
 { path: 'workerHours', Component: WorkerHours },
  { path: 'bossDashboard', Component: BossDashboard },
{ path: 'bossMessages', Component: BossMessages },

]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);

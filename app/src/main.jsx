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
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);

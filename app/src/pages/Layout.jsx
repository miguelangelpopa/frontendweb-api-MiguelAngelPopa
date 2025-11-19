import { Outlet } from 'react-router';
import Footer from '../components/Footer/Footer';
import { ScrollRestoration } from 'react-router';
import Navbar from '../components/NavBar/NavBar';

export default function Layout() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="grow">
        <Outlet />
      </main>

      <Footer />

      <ScrollRestoration />
    </div>
  );
}

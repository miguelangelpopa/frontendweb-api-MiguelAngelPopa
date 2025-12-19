import { Link, useLocation, useNavigate } from "react-router";

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const path = location.pathname;

  const isHome = path === "/";
  const isBoss = path.startsWith("/boss");
  const isWorker = path.startsWith("/worker");

  const handleLogout = () => {
    navigate("/"); 
  };

  return (
    <nav
      className={`${isHome ? "fixed" : "static"} top-0 left-0 w-full z-50 bg-white/90 backdrop-blur border-b-2 border-black shadow-sm`}
    >
      <div className="container mx-auto flex items-center justify-between px-6 py-3">
 {/* ---------- Logo ---------- */}
        <Link to="/" className="flex items-center space-x-3">
          <img src="src/images/logo.jpg" alt="Logo" className="h-10 w-auto" />
          <span className="hidden sm:inline text-blue-800 font-bold tracking-wide">
            Clavimial Technical Solutions
          </span>
        </Link>

        {/* ---------- Menu ---------- */}
        <div className="hidden md:flex space-x-8 font-semibold">
          {isHome && (
            <>
              <a href="#home" className="hover:text-blue-900 transition">Home</a>
              <a href="#about" className="hover:text-blue-900 transition">About</a>
              <a href="#services" className="hover:text-blue-900 transition">Diensten</a>
              <a href="#projects" className="hover:text-blue-900 transition">Projecten</a>
              <a href="#contact" className="hover:text-blue-900 transition">Contact</a>
              <a href="#contactForm" className="hover:text-blue-900 transition">Contacteer ons</a>
            </>
          )}
        {/* ---------- Boss ---------- */}
          {isBoss && (
            <>
              <Link to="/bossDashboard" className="hover:text-blue-900 transition">Dashboard</Link>
              <Link to="/bossMessages" className="hover:text-blue-900 transition">Messages</Link>
              <Link to="/bossPeople" className="hover:text-blue-900 transition">Contact</Link>
            </>
          )}
         {/* ---------- Worker ---------- */}
          {isWorker && (
            <>
              <Link to="/workerDashboard" className="hover:text-blue-900 transition">Dashboard</Link>
              <Link to="/workerHours" className="hover:text-blue-900 transition">Summary</Link>
              <Link to="/workerAddHours" className="hover:text-blue-900 transition">Add hours</Link>
              <Link to="/workerMessages" className="hover:text-blue-900 transition">Messages</Link>
            </>
          )}
        </div>

        {/* ---------- LOGIN / LOGOUT ---------- */}
        <div>
          {(isBoss || isWorker) ? (
            <button
              onClick={handleLogout}
              className="font-semibold bg-red-600 text-white px-4 py-2 rounded hover:bg-red-800 transition text-sm"
            >
              Log out
            </button>
          ) : path === "/login" ? (
            <Link
              to="/"
              className="font-semibold border border-blue-700 text-blue-700 px-4 py-2 rounded hover:bg-blue-50 transition text-sm"
            >
              Back to Home
            </Link>
          ) : (
            <Link
              to="/login"
              className="font-semibold bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-900 transition text-sm"
            >
              Login
            </Link>
          )}
        </div>

      </div>
    </nav>
  );
};

export default Navbar;

import { Link, useLocation, useNavigate } from "react-router";
import { useState } from "react";
import { useTheme } from "../../contexts";
import { useAuth } from "../../contexts/auth";

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const path = location.pathname;

  const [open, setOpen] = useState(false);

  const { darkmode, toggleDarkmode } = useTheme();
  const { isAuthed, logout } = useAuth();

  const isHome = path === "/home" || path === "/";
  const isBoss = path.startsWith("/boss");
  const isWorker = path.startsWith("/worker");
  const isAuthPage = path === "/login" || path === "/register";

  const handleLogout = async () => {
    await logout();
    navigate("/login");
  };

  // --- NAVBAR MINIMAL PARA LOGIN / REGISTER ---
  if (isAuthPage) {
    return (
      <nav className="sticky top-0 left-0 z-50 w-full bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border-b border-neutral-200 dark:border-slate-700">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <Link to="/home" className="flex items-center gap-3">
              <img
                src="src/images/logo.jpg"
                alt="Logo"
                className="h-9 w-auto rounded-md shadow-sm"
              />
              <span className="hidden sm:inline text-sm font-semibold tracking-tight text-neutral-900 dark:text-slate-100">
                Clavimial Technical Solutions
              </span>
            </Link>

            {/* Back to Home */}
            <Link
              to="/home"
              className="inline-flex items-center gap-2 rounded-full border border-neutral-800 dark:border-slate-200 px-4 py-2 text-xs font-semibold text-neutral-900 dark:text-slate-100 hover:bg-neutral-100 dark:hover:bg-slate-800 active:scale-95 transition"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </nav>
    );
  }

  // --- LINKS ---
  const homeLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#services", label: "Diensten" },
    { href: "#projects", label: "Projecten" },
    { href: "#contact", label: "Contact" },
    { href: "#contactForm", label: "Contacteer ons" },
  ];

  const bossLinks = [
    { to: "/boss/dashboard", label: "Dashboard" },
    { to: "/boss/messages", label: "Messages" },
    { to: "/boss/people", label: "Contact" },
    { to: "/profile", label: "Profile" },
  ];

  const workerLinks = [
    { to: "/worker/dashboard", label: "Dashboard" },
    { to: "/worker/hours", label: "Summary" },
    { to: "/worker/add-hours", label: "Add hours" },
    { to: "/worker/messages", label: "Messages" },
    { to: "/profile", label: "Profile" },
  ];

  const renderLinks = () => {
    if (isHome) {
      return homeLinks.map((link) => (
        <a
          key={link.href}
          href={link.href}
          className="relative text-sm font-medium text-neutral-700 dark:text-slate-200 hover:text-black dark:hover:text-white transition group"
        >
          {link.label}
          <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-black dark:bg-white transition-all group-hover:w-full" />
        </a>
      ));
    }
    const arr = isBoss ? bossLinks : workerLinks;
    return arr.map((link) => (
      <Link
        key={link.to}
        to={link.to}
        className={`relative text-sm font-medium transition group ${
          path === link.to
            ? "text-black dark:text-white"
            : "text-neutral-700 dark:text-slate-200 hover:text-black dark:hover:text-white"
        }`}
      >
        {link.label}
        <span
          className={`absolute left-0 -bottom-1 h-0.5 rounded-full bg-black dark:bg-white transition-all ${
            path === link.to ? "w-full" : "w-0 group-hover:w-full"
          }`}
        />
      </Link>
    ));
  };

  const AuthButton = () => {
    if (isAuthed && (isBoss || isWorker)) {
      return (
        <button
          onClick={handleLogout}
          className="inline-flex items-center gap-2 rounded-full bg-neutral-900 dark:bg-slate-100 px-4 py-2 text-xs font-semibold text-white dark:text-slate-900 shadow-sm hover:bg-black dark:hover:bg-white active:scale-95 transition"
        >
          <span>Log out</span>
        </button>
      );
    }
    return (
      <Link
        to="/login"
        className="inline-flex items-center gap-2 rounded-full bg-neutral-900 dark:bg-slate-100 px-4 py-2 text-xs font-semibold text-white dark:text-slate-900 shadow-sm hover:bg-black dark:hover:bg-white active:scale-95 transition"
      >
        <span>Login</span>
      </Link>
    );
  };

  return (
    <nav
      className={`${
        isHome ? "fixed" : "sticky"
      } top-0 left-0 z-50 w-full bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border-b border-neutral-200 dark:border-slate-700`}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/home" className="flex items-center gap-3">
            <img
              src="src/images/logo.jpg"
              alt="Logo"
              className="h-9 w-auto rounded-md shadow-sm"
            />
            <span className="hidden sm:inline text-sm font-semibold tracking-tight text-neutral-900 dark:text-slate-100">
              Clavimial Technical Solutions
            </span>
          </Link>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center gap-4">
            <div className="flex items-center gap-6 text-sm">
              {renderLinks()}
            </div>

            {/* Botón tema con emojis */}
            <button
              type="button"
              onClick={toggleDarkmode}
              className="inline-flex items-center justify-center rounded-full border border-neutral-300 dark:border-slate-600 px-3 py-1.5 text-sm bg-white dark:bg-slate-800 hover:bg-neutral-100 dark:hover:bg-slate-700 transition"
            >
              <span className="leading-none">
                {darkmode ? "☀️" : "🌙"}
              </span>
            </button>

            <AuthButton />
          </div>

          {/* Mobile button */}
          <button
            className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-neutral-800 dark:text-slate-100 hover:bg-neutral-100 dark:hover:bg-slate-800 transition"
            onClick={() => setOpen((o) => !o)}
          >
            <span className="sr-only">Open menu</span>
            <div className="flex flex-col gap-1.5">
              <span className="h-0.5 w-5 bg-neutral-900 dark:bg-slate-100 rounded" />
              <span className="h-0.5 w-4 bg-neutral-900 dark:bg-slate-100 rounded" />
              <span className="h-0.5 w-5 bg-neutral-900 dark:bg-slate-100 rounded" />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile panel */}
      {open && (
        <div className="md:hidden border-t border-neutral-200 dark:border-slate-700 bg-white/95 dark:bg-slate-900/95 backdrop-blur">
          <div className="mx-auto max-w-6xl px-4 py-3 space-y-2">
            {isHome &&
              homeLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-md px-2 py-1 text-sm font-medium text-neutral-800 dark:text-slate-100 hover:bg-neutral-100 dark:hover:bg-slate-800 hover:text-black dark:hover:text-white transition"
                >
                  {link.label}
                </a>
              ))}
            {!isHome &&
              (isBoss ? bossLinks : workerLinks).map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setOpen(false)}
                  className={`block rounded-md px-2 py-1 text-sm font-medium transition ${
                    path === link.to
                      ? "bg-neutral-100 dark:bg-slate-800 text-black dark:text-white"
                      : "text-neutral-800 dark:text-slate-100 hover:bg-neutral-100 dark:hover:bg-slate-800 hover:text-black dark:hover:text-white"
                  }`}
                >
                  {link.label}
                </Link>
              ))}

            {/* Toggle tema + auth en mobile */}
            <div className="pt-2 flex items-center justify-between gap-3">
              <button
                type="button"
                onClick={toggleDarkmode}
                className="inline-flex items-center justify-center rounded-full border border-neutral-300 dark:border-slate-600 px-3 py-1.5 text-sm bg-white dark:bg-slate-800 hover:bg-neutral-100 dark:hover:bg-slate-700 transition"
              >
                <span className="leading-none">
                  {darkmode ? "☀️" : "🌙"}
                </span>
              </button>
              <AuthButton />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

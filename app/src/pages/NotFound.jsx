import { Link } from "react-router";

const NotFound = () => {
  return (
    <div className="h-screen w-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-slate-200 dark:from-slate-950 dark:to-slate-900 text-slate-900 dark:text-slate-100 px-4">
      <div className="bg-white/90 dark:bg-slate-900/90 p-8 rounded-2xl shadow-2xl w-full max-w-sm flex flex-col items-center space-y-6 border border-slate-200 dark:border-slate-700">
        <h1 className="text-7xl font-extrabold tracking-tighter text-indigo-600 dark:text-indigo-400">
          404
        </h1>
        <p className="text-center text-sm text-slate-600 dark:text-slate-300">
          The page you are trying to access does not exist or has been moved.
        </p>

        <Link
          to="/"
          className="px-6 py-2.5 rounded-full bg-indigo-600 text-white text-sm font-semibold hover:bg-indigo-700 active:scale-95 transition shadow-md shadow-indigo-500/30"
        >
          Go back to homepage
        </Link>
      </div>
    </div>
  );
};

export default NotFound;

import { Link } from "react-router";

const NotFound = () => {
  return (
  <div className="h-screen w-screen flex items-center justify-center bg-gray-100 text-blue-700">
            <div className="bg-white p-8 rounded-xl shadow-lg w-80 flex flex-col items-center space-y-6">  
      <h1 className="text-7xl font-bold mb-4">404</h1>
      <p className="text-lg mb-6">
       The page you are trying to access does not exist!
      </p>

      <Link
        to="/"
        className="px-6 py-3 rounded-full bg-blue-600 text-white font-semibold hover:bg-blue-700 transition shadow-md"
      >
         Go back to homepage
      </Link>
 </div>
 </div>
  );
};

export default NotFound;

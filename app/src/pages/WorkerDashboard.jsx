import { Link } from "react-router";
export default function WorkerDashboard() {
  const name = localStorage.getItem("username") || "Worker";

  return (
  
    <div className="min-h-screen bg-gray-50 p-4 sm:p-8 lg:p-12">
      
    
      <header className="max-w-3xl mx-auto mb-12 text-center">
        <p className="text-xl font-semibold text-indigo-500 mb-2">
          Your Time Management Portal
        </p>
        <h1 className="text-5xl font-extrabold text-gray-900 tracking-tighter">
          Welcome back, <span className="text-indigo-600">{name}</span>! 👋
        </h1>
      </header>
      
      <div className="max-w-2xl mx-auto grid grid-cols-1 gap-8">

        <div className="bg-white rounded-2xl shadow-2xl p-6 sm:p-8 border border-gray-100 transform transition duration-500 hover:shadow-indigo-300/50 hover:-translate-y-1">
          <div className="flex justify-between items-start mb-6">
             <div className="flex items-center">
                <span className="p-3 bg-indigo-100 text-indigo-600 rounded-full mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <polyline points="12 6 12 12 16 14"></polyline>
                  </svg>
                </span>
                <h2 className="text-2xl font-bold text-gray-800">
                  Time Management
                </h2>
             </div>
          </div>
          
          <p className="text-gray-600 mb-6">
            Review, edit, or submit your worked hour reports for approval. Keep a detailed track of your time.
          </p>

          <Link
            to="/hours"
            className="flex items-center justify-center w-full py-4 text-xl font-bold text-white bg-indigo-600 rounded-xl shadow-lg hover:bg-indigo-700 transition duration-300 focus:outline-none focus:ring-4 focus:ring-indigo-500 focus:ring-opacity-50"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 mr-3"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            View and Manage Hours
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 ml-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Link>
        </div>

        
        
        <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 border border-gray-100 opacity-80">
          <div className="flex items-center mb-4">
            <span className="p-3 bg-pink-100 text-pink-600 rounded-full mr-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
              </svg>
            </span>
            <h3 className="text-xl font-semibold text-gray-700">
              Notifications & Messages
            </h3>
          </div>
          <p className="text-sm text-gray-500">
            Check for new messages or important notifications from your supervisor.
          </p>
          <button
            className="mt-4 text-sm font-medium text-pink-600 hover:text-pink-800 transition duration-200"
            onClick={() => alert("Messages feature not implemented yet")}
          >
            Go to Messages →
          </button>
        </div>

      </div>

      <p className="text-xs text-gray-400 mt-10 text-center">
        Reminder: Links use 'Link' from React Router. Ensure the component is wrapped within a 'BrowserRouter'.
      </p>
    </div>
  );
}
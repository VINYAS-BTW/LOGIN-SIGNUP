import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { handleError, handlesuccess } from "../util";
{
  /*AI GENERATED */
}
function Home() {
  const [loggedInUser, setLoggedInUser] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    setLoggedInUser(localStorage.getItem("loggedInUser"));
  }, []);

  const handleLogout = (e) => {
    localStorage.removeItem("token");
    localStorage.removeItem("loggedInUser");
    handlesuccess("User Logged out successfully");
    setTimeout(() => {
      navigate("/login");
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-rose-50 via-white to-cyan-50 font-['Inter',sans-serif]">
      {/* Navigation Bar */}
      <nav className="relative bg-white/80 backdrop-blur-md shadow-lg border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-linear-to-br from-rose-500 to-cyan-500 rounded-lg flex items-center justify-center transform hover:rotate-12 transition-transform duration-300">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <span className="text-2xl font-bold text-transparent bg-clip-text bg-linear-to-r from-rose-500 to-cyan-500">
                AiREC
              </span>
            </div>

            {/* User Info & Logout */}
            <div className="flex items-center space-x-4">
              <div className="hidden sm:flex items-center space-x-3 px-4 py-2 bg-linear-to-r from-rose-50 to-cyan-50 rounded-full">
                <div className="w-8 h-8 bg-linear-to-br from-rose-400 to-cyan-400 rounded-full flex items-center justify-center">
                  <span className="text-white font-semibold text-sm">
                    {loggedInUser?.charAt(0).toUpperCase()}
                  </span>
                </div>
                <span className="text-gray-700 font-medium">
                  {loggedInUser}
                </span>
              </div>
              <button
                onClick={handleLogout}
                className="px-6 py-2 bg-linear-to-r from-rose-500 to-cyan-500 text-white rounded-full font-semibold hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300 active:scale-95"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Home;

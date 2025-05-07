// src/pages/GetStartedPage.jsx (Formerly WelcomePage.jsx)
import React from 'react';
import { Link } from 'react-router-dom';

// You could import the logo if you want it on this page too
// import takosyncLogo from '../assets/takosync-logo.png';

function GetStartedPage() { // Renamed function
  return (
    <div className="flex flex-col items-center justify-center text-center pt-16 md:pt-24 px-4">
       {/* Optional Logo */}
       {/* <img src={takosyncLogo} alt="Takosync Logo" className="h-20 w-auto mb-8" /> */}

      <h1 className="text-4xl md:text-5xl font-bold text-cyan-800 mb-4">
        Join Takosync
      </h1>
      <p className="text-lg text-gray-600 mb-10 max-w-lg">
        Ready to organize and sync your digital life? Create an account or log in to continue.
      </p>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-xs">
        <Link
          to="/register"
          className="w-full sm:w-auto flex-grow bg-cyan-600 hover:bg-cyan-700 text-white font-bold py-3 px-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 ease-in-out text-center"
        >
          Create Account
        </Link>
        <Link
          to="/login"
          className="w-full sm:w-auto flex-grow bg-white text-cyan-700 border border-cyan-600 hover:bg-cyan-50 font-semibold py-3 px-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 ease-in-out text-center"
        >
          Log In
        </Link>
      </div>
    </div>
  );
}

export default GetStartedPage; // Renamed export

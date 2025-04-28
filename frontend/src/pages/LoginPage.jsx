// src/pages/LoginPage.jsx
import React from 'react';
import { Link } from 'react-router-dom';

function LoginPage() {
  return (
    // Centered form container, matching HomePage feature card style
    <div className="max-w-md mx-auto mt-8 md:mt-12"> {/* Added responsive margin */}
      <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200"> {/* Consistent card style */}
        {/* Heading using consistent color and style */}
        <h1 className="text-3xl font-bold text-cyan-800 mb-6 text-center">
          Login to Takosync
        </h1>
        <form> {/* Add onSubmit handler later */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              // Input styling consistent with modern forms + focus ring matching theme
              className="shadow-sm appearance-none border border-gray-300 rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              placeholder="you@example.com"
              required
              // Add value and onChange later
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              // Input styling consistent with modern forms + focus ring matching theme
              className="shadow-sm appearance-none border border-gray-300 rounded-md w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              placeholder="******************"
              required
              // Add value and onChange later
            />
            {/* Optional: Forgot password link */}
            {/* <div className="text-right">
              <a href="#" className="text-sm text-cyan-600 hover:text-cyan-800 hover:underline">
                Forgot Password?
              </a>
            </div> */}
          </div>
          <div className="flex items-center justify-between">
            {/* Button style matching the Register button in Header */}
            <button
              type="submit"
              className="w-full bg-cyan-600 hover:bg-cyan-700 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:shadow-outline transition duration-300"
            >
              Sign In
            </button>
          </div>
          {/* Link style matching HomePage footer prompt */}
          <p className="text-center text-gray-600 text-sm mt-6">
            Don't have an account?{' '}
            <Link to="/register" className="font-bold text-cyan-700 hover:underline">
              Sign Up
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
export default LoginPage;
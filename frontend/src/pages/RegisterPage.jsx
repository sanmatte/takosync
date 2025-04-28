// src/pages/RegisterPage.jsx
import React from 'react';
import { Link } from 'react-router-dom';

function RegisterPage() {
  return (
    // Centered form container, matching HomePage feature card style
    <div className="max-w-md mx-auto mt-8 md:mt-12"> {/* Added responsive margin */}
       <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200"> {/* Consistent card style */}
        {/* Heading using consistent color and style */}
        <h1 className="text-3xl font-bold text-cyan-800 mb-6 text-center">
          Create Takosync Account
        </h1>
        <form> {/* Add onSubmit handler later */}
          <div className="mb-4">
            <label htmlFor="fullname" className="block text-gray-700 text-sm font-bold mb-2">
              Full Name <span className="text-gray-500 font-normal">(Optional)</span>
            </label>
            <input
              type="text"
              id="fullname"
              // Input styling consistent with modern forms + focus ring matching theme
              className="shadow-sm appearance-none border border-gray-300 rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              placeholder="Your Name"
              // Add value and onChange later
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email-register" className="block text-gray-700 text-sm font-bold mb-2">
              Email Address
            </label>
            <input
              type="email"
              id="email-register"
              // Input styling consistent with modern forms + focus ring matching theme
              className="shadow-sm appearance-none border border-gray-300 rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              placeholder="you@example.com"
              required
              // Add value and onChange later
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password-register" className="block text-gray-700 text-sm font-bold mb-2">
              Password
            </label>
            <input
              type="password"
              id="password-register"
              // Input styling consistent with modern forms + focus ring matching theme
              className="shadow-sm appearance-none border border-gray-300 rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              placeholder="Minimum 8 characters"
              required
              // Add value and onChange later
            />
          </div>
          <div className="mb-6">
            <label htmlFor="confirm-password" className="block text-gray-700 text-sm font-bold mb-2">
              Confirm Password
            </label>
            <input
              type="password"
              id="confirm-password"
              // Input styling consistent with modern forms + focus ring matching theme
              className="shadow-sm appearance-none border border-gray-300 rounded-md w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              placeholder="Retype password"
              required
              // Add value and onChange later
            />
          </div>
          <div className="flex items-center justify-between">
            {/* Button style matching the Register button in Header */}
            <button
              type="submit"
              className="w-full bg-cyan-600 hover:bg-cyan-700 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:shadow-outline transition duration-300"
            >
              Create Account
            </button>
          </div>
           {/* Link style matching HomePage footer prompt */}
           <p className="text-center text-gray-600 text-sm mt-6">
            Already have an account?{' '}
            <Link to="/login" className="font-bold text-cyan-700 hover:underline">
              Log In
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
export default RegisterPage;
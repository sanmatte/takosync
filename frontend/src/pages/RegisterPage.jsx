// src/pages/RegisterPage.jsx
import React from 'react';
import { Link } from 'react-router-dom';

function RegisterPage() {
  // Placeholder state management
  const [fullName, setFullName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [confirmPassword, setConfirmPassword] = React.useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // TODO: Add actual registration logic here
    // TODO: Add password confirmation check
    if (password !== confirmPassword) {
        alert("Passwords do not match!");
        return;
    }
    console.log('Register attempt with:', { fullName, email, password });
    alert('Registration logic not implemented yet!');
  };

  return (
    // Centered container, consistent top margin
    <div className="max-w-md mx-auto mt-12 md:mt-16 px-4"> {/* Adjusted top margin */}

      {/* Heading - Centered, Takosync color */}
      <h1 className="text-3xl md:text-3xl font-bold text-cyan-800 mb-8 text-center">
        Create your Account
      </h1>

      {/* Form directly on page background */}
      <form onSubmit={handleSubmit}>

        {/* Input Group - Attached inputs */}
        {/* Optional Full Name Input - Rounded top */}
        <div className="relative">
          <input
            type="text"
            id="fullname"
            name="fullname"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            // Style: Larger padding, rounded top, border (except bottom), specific focus
            className="bg-white relative block w-full appearance-none rounded-t-md border border-gray-300 border-b-0 px-3 py-3 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-cyan-500 focus:outline-none focus:ring-cyan-500 sm:text-sm"
            placeholder="Full Name (Optional)"
            autoComplete="name"
          />
          {/* Email Input - Attaches to Full Name, no rounding */}
          <input
            type="email"
            id="email-register"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            // Style: Attaches, no rounding, border (except bottom)
            className="bg-white relative -mt-px block w-full appearance-none border border-gray-300 border-b-0 px-3 py-3 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-cyan-500 focus:outline-none focus:ring-cyan-500 sm:text-sm"
            placeholder="Email Address"
            required
            autoComplete="email"
          />
           {/* Password Input - Attaches to Email, no rounding */}
           <input
            type="password"
            id="password-register"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
             // Style: Attaches, no rounding, border (except bottom)
            className="bg-white relative -mt-px block w-full appearance-none border border-gray-300 border-b-0 px-3 py-3 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-cyan-500 focus:outline-none focus:ring-cyan-500 sm:text-sm"
            placeholder="Password (min. 12 characters)" // Add length hint
            required
            autoComplete="new-password"
          />
          {/* Confirm Password Input - Rounded bottom, attaches to Password */}
          <input
            type="password"
            id="confirm-password"
            name="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            // Style: Attaches, rounded bottom, border
            className="bg-white relative -mt-px block w-full appearance-none rounded-b-md border border-gray-300 px-3 py-3 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-cyan-500 focus:outline-none focus:ring-cyan-500 sm:text-sm"
            placeholder="Confirm Password"
            required
            autoComplete="new-password"
          />
        </div>

        {/* Spacing before button */}
        <div className="mt-8 mb-6"> {/* Adjusted margins */}
          {/* Button - Consistent style */}
          <button
            type="submit"
            className="w-full bg-cyan-600 hover:bg-cyan-700 text-white font-bold py-2.5 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 shadow-md hover:shadow-lg transition duration-300"
          >
            Create Account
          </button>
        </div>

        {/* Login Link - Centered */}
        <p className="text-center text-gray-600 text-sm">
          Already have an account?{' '}
          <Link to="/login" className="font-bold text-cyan-700 hover:underline">
            Log In
          </Link>
        </p>
      </form>

    </div> // End of max-width container
  );
}
export default RegisterPage;


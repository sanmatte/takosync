import React from 'react';
import { Link } from 'react-router-dom';

function LoginPage() {
  // Placeholder state management (add real state later)
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [rememberMe, setRememberMe] = React.useState(false);
  const handleSubmit = (event) => {
    event.preventDefault();
    // TODO: Add actual login logic here
    console.log('Login attempt with:', { email, password, rememberMe });
    alert('Login logic not implemented yet!');
  };

  return (
    <div className="max-w-md mx-auto mt-12 md:mt-20 px-4">
      <h1 className="text-3xl md:text-3xl font-bold text-cyan-800 mb-8 text-center">
				Sign in to your account
      </h1>
      <form onSubmit={handleSubmit}>
        <div className="relative">
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            // Style: Larger padding, rounded top, border (except bottom), specific focus
            className="bg-white relative block w-full appearance-none rounded-t-md border border-gray-300 border-b-0 px-3 py-3 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-cyan-500 focus:outline-none focus:ring-cyan-500 sm:text-sm"
            placeholder="Email Address"
            required
            autoComplete="email"
          />
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="bg-white relative -mt-px block w-full appearance-none rounded-b-md border border-gray-300 px-3 py-3 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-cyan-500 focus:outline-none focus:ring-cyan-500 sm:text-sm"
            placeholder="Password"
            required
            autoComplete="current-password"
          />
        </div>
        <div className="flex justify-between items-center mt-4 mb-8 text-sm"> 
           <label htmlFor="remember" className="flex items-center text-gray-600 cursor-pointer">
             <input
                type="checkbox"
                id="remember"
                name="remember"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                className="mr-2 h-4 w-4 rounded border-gray-300 text-cyan-600 focus:ring-cyan-500"
             />
             Remember me
           </label>
           <a href="#" className="font-medium text-cyan-700 hover:text-cyan-900 hover:underline">
             Forgot Password?
           </a>
        </div>


        <div className="mb-6">
          <button
            type="submit"
            className="w-full bg-cyan-600 hover:bg-cyan-700 text-white font-bold py-2.5 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 shadow-md hover:shadow-lg transition duration-300"
          >
            Sign In
          </button>
        </div>

        <p className="text-center text-gray-600 text-sm">
          Don't have an account?{' '}
          <Link to="/register" className="font-bold text-cyan-700 hover:underline">
            Sign Up
          </Link>
        </p>
      </form>

    </div> 
  );
}
export default LoginPage;


// src/components/Header.jsx
import React, { useState } from 'react'; // Import useState
import { Link } from 'react-router-dom';

const GITHUB_REPO_URL = "https://github.com/sanmatte/takosync"; // Use your actual repo URL

// GitHub Icon Component
const GitHubIcon = () => ( /* ... SVG code ... */ <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4" aria-hidden="true"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8Z"></path></svg> );

// Simple Hamburger Icon SVG
const MenuIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
    </svg>
);

// Simple Close Icon SVG
const CloseIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
    </svg>
);


function Header() {
  // State to manage mobile menu visibility
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    // Using deep cyan background, white text
    <header className="bg-cyan-800 text-white shadow-md relative"> {/* Added relative positioning for potential absolute dropdown */}
      {/* Changed layout to justify-between */}
      <nav className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo/Title - always visible */}
        <Link to="/" className="text-xl font-semibold hover:opacity-80">
          Takosync
        </Link>

        {/* Desktop Navigation Links - Hidden on mobile, shown on medium+ */}
        <ul className="hidden md:flex space-x-4 items-center">
          <li>
            <Link to="/" className="hover:opacity-80 px-3 py-2 rounded-md text-sm font-medium">Home</Link>
          </li>
          <li>
            <Link to="/docs" className="hover:opacity-80 px-3 py-2 rounded-md text-sm font-medium">Docs</Link>
          </li>
          <li>
            <a
              href={GITHUB_REPO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-white hover:bg-white/10 px-3 py-1.5 rounded-md text-sm font-medium transition duration-300"
              aria-label="View source on GitHub"
            >
              <GitHubIcon />
              <span className="ml-1.5">View Source</span>
            </a>
          </li>
          {/* Login/Register Separator for Desktop */}
          <li className="text-cyan-300 hidden md:block">|</li>
          <li>
            <Link
              to="/login"
              className="hover:opacity-80 text-sm font-medium px-3 py-2" // Simplified style for desktop text link
            >
              Login
            </Link>
          </li>
          <li>
            <Link
              to="/register"
               className="bg-cyan-600 hover:bg-cyan-700 text-white px-3 py-1.5 rounded-md text-sm font-medium shadow transition duration-300" // Kept button style
            >
              Register
            </Link>
          </li>
        </ul>

        {/* Mobile Menu Button - Shown on mobile, hidden on medium+ */}
        <div className="md:hidden">
          <button
            onClick={toggleMobileMenu}
            className="inline-flex items-center justify-center p-2 rounded-md text-cyan-200 hover:text-white hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            aria-controls="mobile-menu"
            aria-expanded={isMobileMenuOpen}
          >
            <span className="sr-only">Open main menu</span>
            {isMobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Dropdown - Conditionally rendered, only on mobile */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-cyan-800 shadow-lg z-10" id="mobile-menu">
          {/* Use pt/pb for spacing inside */}
          <ul className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
             <li>
                {/* Mobile links - block display, padding */}
               <Link to="/" className="text-cyan-100 hover:bg-cyan-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium" onClick={toggleMobileMenu}>Home</Link>
             </li>
             <li>
               <Link to="/docs" className="text-cyan-100 hover:bg-cyan-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium" onClick={toggleMobileMenu}>Docs</Link>
             </li>
             <li>
                <a
                    href={GITHUB_REPO_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyan-100 hover:bg-cyan-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                    onClick={toggleMobileMenu}
                >
                    View Source
                </a>
             </li>
             {/* Separator */}
             <hr className="border-cyan-700 my-2"/>
              <li>
               <Link to="/login" className="text-cyan-100 hover:bg-cyan-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium" onClick={toggleMobileMenu}>Login</Link>
             </li>
             <li>
               <Link to="/register" className="text-cyan-100 hover:bg-cyan-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium" onClick={toggleMobileMenu}>Register</Link>
             </li>
          </ul>
        </div>
      )}
    </header>
  );
}

export default Header;

// src/components/Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';

// Placeholders
const GITHUB_REPO_URL = "https://github.com/sanmatte/takosync";
const DOCS_URL = "/docs";
const CLI_INFO_URL = "/cli";
const AUTHOR_NAME = "sanmatte";
const AUTHOR_URL = "https://github.com/sanmatte";
const CURRENT_YEAR = new Date().getFullYear();

function Footer() {
  return (
    // Matching Header: Teal background, Cream text
    <footer className="bg-cyan-800 text-orange-50 py-6 mt-auto border-t border-cyan-800">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center text-sm">

          {/* Left Aligned Links - Cream text, hover darker cream/opacity */}
          <div className="flex items-center space-x-4 mb-4 md:mb-0">
            <Link to={DOCS_URL} className="hover:text-orange-100 hover:underline transition duration-300">
              Documentation
            </Link>
            <a
              href={GITHUB_REPO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-orange-100 hover:underline transition duration-300"
            >
              GitHub Repo
            </a>
            <Link to={CLI_INFO_URL} className="hover:text-orange-100 hover:underline transition duration-300">
              CLI Tool
            </Link>
          </div>

          {/* Right Aligned Info - Cream/lighter cream text */}
          <div className="text-center md:text-right">
             <p className="text-orange-100 mb-1">
                 Developed by{' '}
                 <a
                   href={AUTHOR_URL}
                   target="_blank"
                   rel="noopener noreferrer"
                   className="font-medium hover:text-white hover:underline"
                 >
                   {AUTHOR_NAME}
                 </a>
             </p>
             <p className="text-xs text-cyan-100"> {/* Lighter cyan for copyright */}
                 &copy; {CURRENT_YEAR} Takosync (GNU License)
             </p>
          </div>

        </div>
      </div>
    </footer>
  );
}

export default Footer;

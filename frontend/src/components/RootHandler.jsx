// src/components/RootHandler.jsx
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
// --- Import HomePage again for the official site root ---
import HomePage from '../pages/HomePage';
// Keep GetStartedPage import if you plan to link to it from HomePage
// We'll add its route in App.jsx

// --- Placeholder for Authentication Logic ---
const useAuth = () => {
  const isAuthenticated = false; // <-- Replace with real check
  return { isAuthenticated };
};
// -----------------------------------------

function RootHandler() {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();

  const appMode = import.meta.env.VITE_APP_MODE || 'self_hosted';

  useEffect(() => {
    if (appMode === 'self_hosted') {
      if (isAuthenticated) {
        navigate('/dashboard', { replace: true });
      } else {
        navigate('/login', { replace: true });
      }
    }
  }, [appMode, isAuthenticated, navigate]);

  // --- Render HomePage for official site root ---
  if (appMode === 'official_site') {
    return <HomePage />; // <-- Show detailed HomePage at root for official site
  }
  // ------------------------------------------

  return null;
}

export default RootHandler;

// src/App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom'; // Link is now in Header/Footer
import Layout from './components/Layout'; // Import Layout
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';

function App() {
  return (
    // Routes are now defined within the Layout structure
    <Routes>
      {/* Route that renders the Layout component */}
      <Route path="/" element={<Layout />}>
        {/* Child routes rendered inside Layout's <Outlet /> */}
        {/* Index route for the default content at '/' */}
        <Route index element={<HomePage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="register" element={<RegisterPage />} />

        {/* Define other top-level pages here later (e.g., /dashboard, /notes) */}

        {/* Catch-all 404 route for paths not matched within the Layout */}
        <Route path="*" element={<div className="text-red-500 font-bold text-center mt-10">404 - Page Not Found</div>} />
      </Route>
    </Routes>
  );
}

export default App;

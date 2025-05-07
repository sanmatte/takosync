// src/App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import RootHandler from './components/RootHandler';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import GetStartedPage from './pages/GetStartedPage'; // <-- Import the new page
// HomePage is handled by RootHandler
// const HomePage = () => <div>Original Home Page Content</div>; // Or import if needed elsewhere
const DashboardPage = () => <div className="text-xl font-semibold">App Dashboard (Protected Area)</div>;
const DocsPage = () => <div className="text-xl font-semibold">Documentation Page</div>;


function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<RootHandler />} /> {/* RootHandler decides / content */}
        <Route path="login" element={<LoginPage />} />
        <Route path="register" element={<RegisterPage />} />
        <Route path="docs" element={<DocsPage />} />
        {/* --- Add new route for the Get Started page --- */}
        <Route path="get-started" element={<GetStartedPage />} />
        {/* -------------------------------------------- */}
        <Route path="*" element={<div className="text-red-500 font-bold text-center mt-10">404 - Page Not Found</div>} />
      </Route>

      {/* Temporary Dashboard Route, etc. */}
      <Route path="/dashboard" element={<Layout><DashboardPage /></Layout>} />
    </Routes>
  );
}

export default App;

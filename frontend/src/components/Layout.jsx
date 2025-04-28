// src/components/Layout.jsx
import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

function Layout() {
  return (
    // Using a cream/off-white background inspired by Anderson palettes
    <div className="flex flex-col min-h-screen bg-orange-50">
      <Header />
      {/* Main content keeps the layout background */}
      <main className="flex-grow container mx-auto px-4 py-8">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default Layout;

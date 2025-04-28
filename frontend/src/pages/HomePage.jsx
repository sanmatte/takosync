import React from 'react';
import { Link } from 'react-router-dom'; 

function HomePage() {
  const features = [
    {
      id: 1,
      icon: '🔗', 
      title: 'Sync Your Links',
      description: 'Keep all your important bookmarks and links organized and accessible from anywhere.',
    },
    {
      id: 2,
      icon: '📝', 
      title: 'Organize Notes',
      description: 'Capture ideas, create to-do lists, and store information with a simple and clean note interface.',
    },
    {
      id: 3,
      icon: '☁️', 
      title: 'Store Files Securely',
      description: 'Upload and manage your essential files in your personal, self-hosted cloud space.',
    },
  ];

  return (
    <div>
      {/* --- Hero Section --- */}
      <section className="text-center bg-gradient-to-br from-cyan-500 to-cyan-950 text-white py-20 px-4 rounded-lg shadow-lg">
        {/* Added rounded-lg and shadow */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
          Welcome to Takosync
        </h1>
        <p className="text-lg md:text-xl text-cyan-100 mb-8 max-w-2xl mx-auto">
          Your personal, self-hosted cloud platform for effortlessly managing links, notes, and files. Stay organized, stay in sync.
        </p>
        <Link
          to="/register"
          className="bg-white text-cyan-700 font-semibold py-3 px-8 rounded-lg shadow-md hover:bg-cyan-100 transition duration-300 ease-in-out text-lg" // Larger, rounded CTA
        >
          Get Started Now
        </Link>
      </section>

      {/* --- Features Section --- */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-cyan-800 mb-12">
            Core Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature) => (
              <div
                key={feature.id}
                className="bg-white p-6 rounded-lg shadow-md text-center border border-gray-200 hover:shadow-xl transition duration-300 ease-in-out" // Added border, hover effect
              >
                <div className="text-4xl mb-4">{feature.icon}</div> {/* Placeholder for actual icon */}
                <h3 className="text-xl font-semibold text-cyan-700 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

 {/* --- Footer Prompt --- */}
 <section className="text-center py-12">
          <p className="text-neutral-600">
             Ready to try?{' '}
             <Link to="/register" className="font-bold text-cyan-700 hover:underline">Create an account</Link>
             {' '}or{' '}
             <Link to="/login" className="font-bold text-cyan-700 hover:underline">Log in</Link>.
           </p>
       </section>

    </div>
  );
}

export default HomePage;

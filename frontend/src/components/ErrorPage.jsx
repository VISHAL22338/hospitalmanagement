import React from 'react';
import { useNavigate } from 'react-router-dom';

const ErrorPage = () => {
  const navigate = useNavigate(); // If using React Router

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4 text-center">
      <h1 className="text-6xl font-bold text-red-500 mb-4">404</h1>
      <h2 className="text-2xl font-semibold mb-2">Page Not Found</h2>
      <p className="text-gray-600 mb-6">
        Oops! The page you're looking for doesn't exist or has been moved.
      </p>
      <button
        onClick={() => navigate('/')}
        className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition"
      >
        Go Home
      </button>
    </div>
  );
};

export default ErrorPage;

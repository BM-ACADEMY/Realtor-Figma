import { Link } from 'react-router';
import { Home } from 'lucide-react';

export function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F5F5F5]">
      <div className="text-center px-4">
        <h1
          className="text-9xl text-[#E63946] mb-4"
          style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700 }}
        >
          404
        </h1>
        <h2
          className="text-3xl text-[#1A1A1A] mb-4"
          style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600 }}
        >
          Page Not Found
        </h2>
        <p className="text-gray-600 mb-8 text-lg">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 bg-[#E63946] text-white px-8 py-4 rounded-lg hover:bg-[#d32f3d] transition-colors"
          style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600 }}
        >
          <Home className="w-5 h-5" />
          Back to Home
        </Link>
      </div>
    </div>
  );
}

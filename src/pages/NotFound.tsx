
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const NotFound = () => {
  return (
    <div className="min-h-[calc(100vh-200px)] bg-mtg-cream flex items-center justify-center px-4 py-16">
      <div className="max-w-lg w-full text-center">
        <h1 className="text-6xl md:text-8xl font-display font-bold text-mtg-navy mb-6">404</h1>
        <h2 className="text-2xl md:text-3xl font-display font-semibold text-mtg-navy mb-4">Page Not Found</h2>
        <p className="text-mtg-neutral mb-8">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        <Link 
          to="/" 
          className="inline-flex items-center bg-mtg-navy text-white font-medium px-6 py-3 rounded-md hover:bg-opacity-90 transition-all"
        >
          <ArrowLeft size={18} className="mr-2" /> Return to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;

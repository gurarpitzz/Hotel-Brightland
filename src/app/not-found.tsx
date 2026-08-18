import Link from "next/link";
import { Compass, Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4 py-16 bg-gradient-to-b from-brand-green-50/50 to-white">
      <div className="bg-brand-green-100 p-4 rounded-full text-brand-green-800 mb-6 animate-bounce">
        <Compass className="w-12 h-12" />
      </div>
      <h1 className="text-6xl font-extrabold text-brand-green-900 tracking-tight mb-2">404</h1>
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Page Not Found</h2>
      <p className="text-gray-600 max-w-md mb-8 leading-relaxed">
        The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
      </p>
      <Link
        href="/"
        className="inline-flex items-center gap-2 bg-brand-green-700 hover:bg-brand-green-800 text-white font-semibold px-6 py-3 rounded-full transition-all shadow-md hover:shadow-lg"
      >
        <Home className="w-4 h-4" />
        Return to Home Page
      </Link>
    </div>
  );
}

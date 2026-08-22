import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-[calc(100vh-81px)] flex flex-col items-center justify-center px-6 text-center">
      <h2 className="text-4xl font-extrabold text-white mb-4">404 - Page Not Found</h2>
      <p className="text-gray-400 mb-8 max-w-md">
        The page you are looking for does not exist or has been moved.
      </p>
      <Link
        href="/"
        className="bg-gradient-to-r from-[#FF9FFC] via-[#B497CF] to-[#5227FF] text-white px-6 py-3 rounded-xl font-bold hover:opacity-90 transition-opacity"
      >
        Return Home
      </Link>
    </div>
  );
}

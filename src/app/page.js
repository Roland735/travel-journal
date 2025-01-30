import Link from "next/link";

export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-400 to-teal-500 text-white p-6">
      <h1 className="text-5xl font-extrabold mb-4">Welcome to Travel Journal</h1>
      <p className="text-xl mb-8">Capture your travel memories, moments, and adventures in one place.</p>

      <div className="flex space-x-4">
        <Link legacyBehavior href="/journal">
          <a className="px-6 py-3 mx-5 bg-yellow-500 text-white rounded-lg shadow-lg hover:bg-yellow-600 transition duration-200">
            Start Journal
          </a>
        </Link>
        <Link legacyBehavior href="/camera">
          <a className="px-6 py-3 bg-teal-500 text-white rounded-lg shadow-lg hover:bg-teal-600 transition duration-200">
            Open Camera
          </a>
        </Link>
      </div>
    </div>
  );
}

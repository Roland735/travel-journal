import Link from "next/link";

export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 text-white p-6 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-purple-300 rounded-full mix-blend-soft-light opacity-50 animate-blob"></div>
      <div className="absolute -top-40 right-0 w-72 h-72 bg-pink-300 rounded-full mix-blend-soft-light opacity-50 animate-blob animation-delay-2000"></div>

      <div className="relative z-10 text-center">
        <h1 className="text-6xl font-bold mb-6 drop-shadow-xl animate-fade-in-down">
          🌍 Travel Journal
          <span className="block mt-2 text-3xl font-light">Your Adventure Chronicle</span>
        </h1>

        <p className="text-xl mb-12 max-w-2xl mx-auto leading-relaxed bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
          ✨ Capture your most precious travel memories, magical moments, and epic adventures in one beautiful space.
        </p>

        <div className="flex flex-wrap justify-center gap-6">
          <Link legacyBehavior href="/journal">
            <a className="px-8 py-4 bg-white/20 backdrop-blur-lg rounded-2xl shadow-2xl hover:scale-105 transform transition-all duration-300 hover:shadow-3xl border border-white/30 flex items-center gap-3">
              📖 <span className="bg-gradient-to-r from-yellow-300 to-amber-400 bg-clip-text text-transparent font-semibold text-lg">Start Journal</span>
            </a>
          </Link>
          <Link legacyBehavior href="/camera">
            <a className="px-8 py-4 bg-white/20 backdrop-blur-lg rounded-2xl shadow-2xl hover:scale-105 transform transition-all duration-300 hover:shadow-3xl border border-white/30 flex items-center gap-3">
              📸 <span className="bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent font-semibold text-lg">Open Recorder</span>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}
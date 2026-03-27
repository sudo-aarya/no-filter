import Link from "next/link";

export default function Courses() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center py-16 fade-in">
      <div className="card max-w-4xl w-full flex flex-col items-center">
        <h1 className="text-4xl font-extrabold text-indigo-700 mb-8">Courses</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-full">
          <Link href="/modules/math-magic" className="card flex flex-col items-center border-pink-200 border-2 hover:scale-105 transition-all cursor-pointer">
            <div className="text-2xl mb-2">🧮</div>
            <div className="font-bold text-lg mb-1">Math Magic</div>
            <div className="text-gray-600 text-center">Fun math games and puzzles!</div>
          </Link>
          <Link href="/modules/science-explorers" className="card flex flex-col items-center border-yellow-200 border-2 hover:scale-105 transition-all cursor-pointer">
            <div className="text-2xl mb-2">🔬</div>
            <div className="font-bold text-lg mb-1">Science Explorers</div>
            <div className="text-gray-600 text-center">Discover the wonders of science.</div>
          </Link>
          <Link href="/modules/story-time" className="card flex flex-col items-center border-blue-200 border-2 hover:scale-105 transition-all cursor-pointer">
            <div className="text-2xl mb-2">📖</div>
            <div className="font-bold text-lg mb-1">Story Time</div>
            <div className="text-gray-600 text-center">Read and listen to amazing stories.</div>
          </Link>
        </div>
      </div>
    </div>
  );
}

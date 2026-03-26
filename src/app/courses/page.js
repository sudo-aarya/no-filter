export default function Courses() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center py-12">
      <h1 className="text-4xl font-extrabold text-blue-700 mb-8 drop-shadow-sm">Courses</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center border-4 border-pink-200">
          <div className="text-2xl mb-2">🧮</div>
          <div className="font-bold text-lg mb-1">Math Magic</div>
          <div className="text-zinc-600 text-center">Fun math games and puzzles!</div>
        </div>
        <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center border-4 border-yellow-200">
          <div className="text-2xl mb-2">🔬</div>
          <div className="font-bold text-lg mb-1">Science Explorers</div>
          <div className="text-zinc-600 text-center">Discover the wonders of science.</div>
        </div>
        <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center border-4 border-blue-200">
          <div className="text-2xl mb-2">📖</div>
          <div className="font-bold text-lg mb-1">Story Time</div>
          <div className="text-zinc-600 text-center">Read and listen to amazing stories.</div>
        </div>
      </div>
    </div>
  );
}

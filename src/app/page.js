import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center py-12">
      <div className="bg-white rounded-3xl shadow-xl p-12 max-w-2xl w-full flex flex-col items-center border-4 border-gray-800">
        <h1 className="text-5xl font-extrabold text-gray-900 mb-4 text-center drop-shadow-[2px_2px_0_#222]">Welcome to No Filter!</h1>
        <p className="text-xl text-gray-800 mb-8 text-center border-b-2 border-gray-300 pb-4">Empowering families to learn, talk, and act together against vaping.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
          <a href="/modules" className="bg-gray-100 rounded-2xl shadow-md p-6 flex flex-col items-center border-2 border-gray-800 hover:bg-gray-200 hover:scale-105 transition">
            <span className="text-3xl mb-2 text-gray-900 drop-shadow-[1px_1px_0_#222]">📚</span>
            <span className="font-bold text-lg text-gray-900 drop-shadow-[1px_1px_0_#222]">Try a Module</span>
          </a>
          <a href="/ai-tutor" className="bg-gray-100 rounded-2xl shadow-md p-6 flex flex-col items-center border-2 border-gray-800 hover:bg-gray-200 hover:scale-105 transition">
            <span className="text-3xl mb-2 text-gray-900 drop-shadow-[1px_1px_0_#222]">🤖</span>
            <span className="font-bold text-lg text-gray-900 drop-shadow-[1px_1px_0_#222]">Chat with AI Tutor</span>
          </a>
        </div>
      </div>
    </div>
  );
}

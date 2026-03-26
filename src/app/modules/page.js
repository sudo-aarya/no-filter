

"use client";
import Link from "next/link";

export default function Modules() {
  return (
    <div className="flex flex-col items-center justify-center py-12">
      <h1 className="text-3xl font-extrabold text-gray-900 mb-6 drop-shadow-[2px_2px_0_#222]">Modules</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl">
        <Link href="/modules/facts" className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center border-4 border-gray-800 hover:bg-gray-100 transition">
          <span className="text-2xl font-bold text-gray-900 mb-2 drop-shadow-[1px_1px_0_#222]">Module 1: The Facts About Vaping</span>
          <span className="text-gray-700 text-center">Learn the real facts about vaping, risks, and how it affects young people and families.</span>
        </Link>
        <Link href="/modules/quiz" className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center border-4 border-gray-800 hover:bg-gray-100 transition">
          <span className="text-2xl font-bold text-gray-900 mb-2 drop-shadow-[1px_1px_0_#222]">Fact Fusion Blitz (Quiz)</span>
          <span className="text-gray-700 text-center">Test your knowledge with a quick interactive quiz about vaping and health.</span>
        </Link>
      </div>
    </div>
  );
}

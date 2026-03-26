"use client";

export default function ModuleText() {
  return (
    <div className="flex flex-col items-center justify-center py-12">
      <div className="bg-white rounded-2xl shadow-lg p-8 max-w-2xl w-full flex flex-col items-center border-4 border-gray-800">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-4 drop-shadow-[2px_2px_0_#222] text-center">Module 1: The Facts About Vaping</h2>
        <div className="text-lg text-gray-800 mb-6 text-left w-full">
          <p className="mb-4 border-l-4 border-gray-800 pl-4 bg-gray-50">1 in 5 young people have vaped. Vaping can cause heart and lung disease, and young people who vape are 5 times more likely to smoke cigarettes.</p>
          <p className="mb-4">Parents often feel <span className="font-bold">concerned</span>, <span className="font-bold">ambushed</span>, and <span className="font-bold">disempowered</span> about the issue of vaping. Many do not know what information is available or how to talk to their children about it.</p>
          <p className="mb-4">Vaping can increase a young person's risk of <span className="font-bold">depression and anxiety</span>. It can also reduce fitness and cause serious burns if devices explode.</p>
          <p className="mb-4">Digital interventions like <span className="font-bold">No Filter</span> help families learn together, track progress, and access resources to support healthy choices.</p>
        </div>
        <div className="w-full flex flex-col gap-4">
          <a href="/modules" className="bg-gray-800 text-white rounded-lg px-6 py-3 font-bold text-center hover:bg-gray-900 transition">Back to Modules</a>
        </div>
      </div>
    </div>
  );
}

"use client";

export default function ModuleText() {
  return (
    <div className="flex flex-col items-center justify-center py-12 min-h-screen bg-gradient-to-br from-[#ede9fe] via-[#f3e8ff] to-[#e0e7ff]">
      <div className="relative bg-white rounded-3xl shadow-2xl p-10 max-w-2xl w-full flex flex-col items-center border-2 border-gray-300 overflow-hidden premium-module">
        <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#8f2be2] to-[#6366f1] text-white px-8 py-2 rounded-full shadow-lg text-xl font-bold tracking-wide border-2 border-white z-10">Module 1</div>
        <h2 className="text-4xl font-extrabold text-gray-900 mb-6 mt-8 text-center drop-shadow-[2px_2px_0_#8f2be2]">The Facts About Vaping</h2>
        <div className="text-lg text-gray-800 mb-8 text-left w-full flex flex-col gap-6">
          <div className="rounded-xl border-2 border-[#8f2be2] bg-[#f5f3ff] p-5 shadow-md flex flex-col gap-2">
            <span className="font-bold text-[#8f2be2] text-xl">1 in 5 young people have vaped.</span>
            <span>Vaping can cause <span className="font-bold">heart and lung disease</span>, and young people who vape are <span className="font-bold">5 times more likely</span> to smoke cigarettes.</span>
          </div>
          <div className="rounded-xl border-2 border-[#6366f1] bg-[#eef2ff] p-5 shadow-md flex flex-col gap-2">
            <span className="font-bold text-[#6366f1] text-xl">Parental Concerns</span>
            <span>Parents often feel <span className="font-bold">concerned</span>, <span className="font-bold">ambushed</span>, and <span className="font-bold">disempowered</span> about the issue of vaping. Many do not know what information is available or how to talk to their children about it.</span>
          </div>
          <div className="rounded-xl border-2 border-[#f59e42] bg-[#fff7ed] p-5 shadow-md flex flex-col gap-2">
            <span className="font-bold text-[#f59e42] text-xl">Risks</span>
            <span>Vaping can increase a young person's risk of <span className="font-bold">depression and anxiety</span>. It can also reduce fitness and cause serious burns if devices explode.</span>
          </div>
          <div className="rounded-xl border-2 border-[#10b981] bg-[#ecfdf5] p-5 shadow-md flex flex-col gap-2">
            <span className="font-bold text-[#10b981] text-xl">Digital Solutions</span>
            <span>Digital interventions like <span className="font-bold">No Filter</span> help families learn together, track progress, and access resources to support healthy choices.</span>
          </div>
        </div>
        <a href="/modules" className="mt-4 px-8 py-3 bg-gradient-to-r from-[#8f2be2] to-[#6366f1] text-white rounded-xl font-bold shadow-lg border-2 border-white hover:from-[#6366f1] hover:to-[#8f2be2] hover:scale-105 transition-all text-lg">Back to Modules</a>
      </div>
    </div>
  );
}

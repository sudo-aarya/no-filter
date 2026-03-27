
"use client";
import React, { useState } from "react";
import { modules } from "../modules";
import { useUser } from "../../user";
import { useRouter } from "next/navigation";

export default function ModulePage({ params }) {
  const router = useRouter();
  const { slug } = React.use(params);
  const module = modules.find((m) => m.slug === slug);
  const { user, setUser } = useUser() || {};
  const [saving, setSaving] = useState(false);
  const [done, setDone] = useState(false);

  // Dashboard/progress calculations
  const totalModules = modules.length;
  const completedModules = (user?.completed || []).length;
  const progressPercent = Math.round((completedModules / totalModules) * 100);
  const currentLevel = user?.level || 1;
  const currentBadge = module?.badge || "";
  const displayName = user?.display_name || user?.email || "Learner";
  // Streaks (placeholder logic)
  const currentStreak = user?.streak || 0;
  const longestStreak = user?.longest_streak || 0;

  if (!module) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh]">
        <h1 className="text-3xl font-bold text-red-600 mb-4">Module Not Found</h1>
        <button className="btn" onClick={() => router.back()}>Go Back</button>
      </div>
    );
  }

  async function handleComplete() {
    if (!user) return;
    setSaving(true);
    // Update completed modules and points in Supabase
    const completed = user.completed ? [...user.completed] : [];
    if (!completed.includes(slug)) completed.push(slug);
    const points = (user.points || 0) + 10;
    const { error } = await supabase
      .from('profiles')
      .update({ completed, points })
      .eq('id', user.id);
    if (!error) {
      setUser({ ...user, completed, points });
      setDone(true);
    }
    setSaving(false);
  }

  return (
    <div className="flex flex-col items-center justify-center py-8 fade-in w-full min-h-screen bg-[#f6f7fb]">
      {/* Dashboard/Progress Section */}
      <div className="w-full max-w-3xl bg-white rounded-2xl shadow-lg p-6 mb-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-1">Hey, {displayName}!</h2>
            <div className="text-green-600 font-semibold text-lg">Level {currentLevel} <span className="text-gray-500">-</span> <span className="italic">"{currentBadge}"</span></div>
          </div>
          <div className="flex items-center gap-4 mt-2 md:mt-0">
            <div className="relative group">
              <span className="inline-flex items-center bg-yellow-200 rounded-full px-3 py-1 text-orange-700 font-bold text-lg cursor-pointer">
                <span role="img" aria-label="fire">🔥</span> <span className="ml-1">{currentStreak}</span>
              </span>
              <div className="absolute left-0 mt-2 w-48 bg-white border rounded-xl shadow-lg p-3 text-sm text-gray-800 opacity-0 group-hover:opacity-100 transition-opacity z-10">
                <div className="font-bold mb-1">🔥 Current Streak: {currentStreak} Days</div>
                <div>Longest Streak: {longestStreak} Days</div>
              </div>
            </div>
            <button className="bg-gray-200 rounded-full p-2 hover:bg-gray-300 transition">
              <span role="img" aria-label="settings">⚙️</span>
            </button>
          </div>
        </div>
        <div className="mb-4">
          <div className="font-bold text-gray-700 mb-1">Your Path Progress</div>
          <div className="w-full bg-gray-200 rounded-full h-4">
            <div className="bg-green-500 h-4 rounded-full transition-all duration-500" style={{ width: `${progressPercent}%` }}></div>
          </div>
          <div className="text-right text-sm text-gray-600 mt-1 font-semibold">{progressPercent}% ({completedModules}/{totalModules} Modules)</div>
        </div>
        <div className="flex flex-col items-center mt-4">
          <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 rounded-xl text-xl shadow-lg transition mb-2">
            Start Next Mission!
            <div className="text-base font-normal mt-1">Module: {module.title}</div>
            <div className="text-xs bg-green-100 text-green-700 rounded-full px-2 py-1 inline-block mt-1">Est. 5 Minutes</div>
          </button>
        </div>
      </div>

      {/* Module Content Section */}
      <div className="card max-w-2xl w-full flex flex-col items-center slide-up bg-white rounded-2xl shadow-xl p-8">
        <h1 className="text-3xl font-extrabold text-indigo-700 mb-2">{module.title}</h1>
        <div className="text-lg text-gray-900 mb-4 text-center">{module.description}</div>
        <div className="w-full mb-4">
          <h2 className="text-xl font-bold text-indigo-600 mb-2">Learning Objectives</h2>
          <ul className="list-disc list-inside text-gray-900 mb-2">
            {module.objectives.map((obj, i) => <li key={i}>{obj}</li>)}
          </ul>
        </div>
        <div className="w-full mb-4">
          <h2 className="text-xl font-bold text-indigo-600 mb-2">Content</h2>
          <ul className="list-disc list-inside text-gray-900 mb-2">
            {module.content.map((c, i) => <li key={i}>{c}</li>)}
          </ul>
        </div>
        <div className="w-full mb-4">
          <h2 className="text-xl font-bold text-indigo-600 mb-2">Quiz</h2>
          {module.quiz.map((q, i) => (
            <div key={i} className="mb-4 p-4 bg-indigo-50 rounded-xl">
              <div className="font-semibold mb-2 text-gray-900">{q.question}</div>
              <ul className="flex flex-col gap-2">
                {q.options.map((opt, j) => (
                  <li key={j} className="">
                    <button className="btn w-full text-left py-2 px-4" style={{background:'#ede9fe',color:'#312e81'}}>{opt}</button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="w-full flex flex-col items-center mt-4">
          <span className="inline-block bg-green-100 text-green-700 rounded-full px-4 py-2 font-bold text-lg mb-2">Badge: {module.badge}</span>
          {user && !done && !(user.completed||[]).includes(slug) && (
            <button className="btn mt-2" onClick={handleComplete} disabled={saving}>{saving ? "Saving..." : "+ Mark as Complete (+10 pts)"}</button>
          )}
          {done && <span className="text-green-700 font-bold mt-2">Module marked as complete!</span>}
          <button className="btn mt-2" onClick={() => router.push('/modules')}>Back to Modules</button>
        </div>
      </div>
    </div>
  );
}

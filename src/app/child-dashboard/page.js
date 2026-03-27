"use client";
import React from "react";
import { useUser } from "../user";
import { modules } from "../modules/modules";
import { useRouter } from "next/navigation";

export default function ChildDashboardPage() {
  const { user, loading } = useUser() || {};
  const router = useRouter();
  if (loading) return <div className="p-8 text-lg">Loading...</div>;
  if (!user) return <div className="p-8 text-lg">Please log in to view your dashboard.</div>;

  // Progress calculations
  const totalModules = modules.length;
  const completedModules = (user.completed || []).length;
  const progressPercent = Math.round((completedModules / totalModules) * 100);
  const nextModule = modules.find(m => !(user.completed || []).includes(m.slug));
  const currentLevel = user.level || 1;
  const displayName = user.display_name || user.email || "Learner";
  const currentBadge = nextModule ? nextModule.badge : "";
  const currentStreak = user.streak || 0;
  const longestStreak = user.longest_streak || 0;

  // Child activities (example)
  const childActivities = [
    {
      icon: "🧩",
      title: "Quiz Quest",
      desc: "Take fun quizzes to test your knowledge about vaping and health!",
      color: "#6366f1",
      btn: "Start Quiz"
    },
    {
      icon: "🎨",
      title: "Creative Challenge",
      desc: "Draw, write, or create something that shows what you learned!",
      color: "#f59e42",
      btn: "Get Creative"
    },
    {
      icon: "🏆",
      title: "Earn Badges",
      desc: "Complete modules and activities to earn cool badges!",
      color: "#10b981",
      btn: "View Badges"
    }
  ];

  return (
    <div className="min-h-screen bg-[#f6f7fb] flex flex-col items-center py-8">
      <h1 className="text-3xl font-extrabold text-indigo-700 mb-4">Welcome, {displayName}!</h1>
      {/* Progress Snapshot */}
      <div className="w-full max-w-2xl bg-white rounded-2xl shadow-lg p-6 mb-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
          <div>
            <div className="font-bold text-gray-700 mb-1">Your Progress</div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-2">
              <div className="bg-green-50 rounded-xl p-4 flex flex-col items-center">
                <div className="text-3xl font-bold text-green-700">{currentLevel}</div>
                <div className="text-gray-700 mt-1">Level</div>
                <div className="text-xs text-gray-500">{currentBadge}</div>
              </div>
              <div className="bg-blue-50 rounded-xl p-4 flex flex-col items-center">
                <div className="text-3xl font-bold text-blue-700">{completedModules} / {totalModules}</div>
                <div className="text-gray-700 mt-1">Modules Done</div>
              </div>
              <div className="bg-purple-50 rounded-xl p-4 flex flex-col items-center">
                <div className="text-2xl font-bold text-purple-700">Today</div>
                <div className="text-gray-700 mt-1">Last Active</div>
                <div className="text-xs text-gray-500">{nextModule ? `Next: ${nextModule.title}` : "All done!"}</div>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-4 mt-4 md:mt-0">
            <div className="relative group">
              <span className="inline-flex items-center bg-yellow-200 rounded-full px-3 py-1 text-orange-700 font-bold text-lg cursor-pointer">
                <span role="img" aria-label="fire">🔥</span> <span className="ml-1">{currentStreak}</span>
              </span>
              <div className="absolute left-0 mt-2 w-48 bg-white border rounded-xl shadow-lg p-3 text-sm text-gray-800 opacity-0 group-hover:opacity-100 transition-opacity z-10">
                <div className="font-bold mb-1">🔥 Current Streak: {currentStreak} Days</div>
                <div>Longest Streak: {longestStreak} Days</div>
              </div>
            </div>
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
          {nextModule && (
            <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-8 rounded-xl text-xl shadow-lg transition mb-2" onClick={() => router.push(`/modules/${nextModule.slug}`)}>
              Start Next Module!
              <div className="text-base font-normal mt-1">{nextModule.title}</div>
              <div className="text-xs bg-indigo-100 text-indigo-700 rounded-full px-2 py-1 inline-block mt-1">Est. 5 Minutes</div>
            </button>
          )}
        </div>
      </div>

      {/* Child Activities */}
      <div className="w-full max-w-2xl bg-white rounded-2xl shadow-lg p-6 mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center"><span className="mr-2" role="img" aria-label="star">⭐</span>Fun Activities</h2>
        {childActivities.map((activity, idx) => (
          <div key={idx} className="mb-6 p-4 rounded-2xl shadow-md" style={{ border: `2px solid ${activity.color}` }}>
            <div className="flex items-center mb-2">
              <span className="text-3xl mr-2">{activity.icon}</span>
              <span className="font-bold text-lg" style={{ color: activity.color }}>{activity.title}</span>
            </div>
            <div className="text-gray-800 mb-1">{activity.desc}</div>
            <button className="w-full mt-3 py-3 rounded-xl font-bold text-white text-lg" style={{ background: activity.color }}>{activity.btn}</button>
          </div>
        ))}
      </div>

      {/* Badges Section */}
      <div className="w-full max-w-2xl bg-white rounded-2xl shadow-lg p-6 mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center"><span className="mr-2" role="img" aria-label="medal">🏅</span>Your Badges</h2>
        <div className="flex flex-wrap gap-4">
          {(user.badges || ["Fact Finder", "Myth Buster"]).map((badge, i) => (
            <span key={i} className="bg-indigo-100 text-indigo-700 rounded-full px-4 py-2 font-bold text-lg shadow">{badge}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

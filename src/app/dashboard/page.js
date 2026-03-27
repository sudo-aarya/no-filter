"use client";
import React from "react";
import { useUser } from "../user";
import { modules } from "../modules/modules";
import { useRouter } from "next/navigation";

export default function DashboardPage() {
  const { user, loading } = useUser() || {};
  const router = useRouter();
  React.useEffect(() => {
    if (!loading && user && user.email === "child@email.com") {
      router.replace("/child-dashboard");
    }
  }, [user, loading, router]);
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

  // Example child-parent connection exercises
  const familyGames = [
    {
      icon: "🧠",
      title: "Myth-Buster Challenge",
      desc: "A quick quiz to identify and debunk common vaping marketing lies. ",
      focus: "Critical Thinking & Facts.",
      color: "#6d28d9",
      btn: "Get Instructions & Statements"
    },
    {
      icon: "🎭",
      title: "Refusal Role-Play Blitz",
      desc: "Practice confident refusal skills using realistic social scenarios.",
      focus: "Social Skills & Confidence.",
      color: "#059669",
      btn: "Generate Scenarios"
    },
    {
      icon: "🧪",
      title: "Chemical Investigator Hunt",
      desc: "Match vape chemicals to their health risks.",
      focus: "Health Literacy & Risks.",
      color: "#dc2626",
      btn: "View Investigator Brief"
    }
  ];

  return (
    <div className="min-h-screen bg-[#f6f7fb] flex flex-col items-center py-8">
      <h1 className="text-3xl font-extrabold text-teal-800 mb-4">Parent Dashboard: Support Your Child's Journey</h1>
      {/* Progress Snapshot */}
      <div className="w-full max-w-3xl bg-white rounded-2xl shadow-lg p-6 mb-8">
        <div className="mb-6">
          <h2 className="text-xl font-bold text-gray-800 mb-2">Your Child's Progress</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-2">
            <div className="bg-green-50 rounded-xl p-4 flex flex-col items-center">
              <div className="text-3xl font-bold text-green-700">{currentLevel}</div>
              <div className="text-gray-700 mt-1">Level</div>
              <div className="text-xs text-gray-500">{currentBadge}</div>
            </div>
            <div className="bg-blue-50 rounded-xl p-4 flex flex-col items-center">
              <div className="text-3xl font-bold text-blue-700">{completedModules} / {totalModules}</div>
              <div className="text-gray-700 mt-1">Modules Completed</div>
            </div>
            <div className="bg-purple-50 rounded-xl p-4 flex flex-col items-center">
              <div className="text-2xl font-bold text-purple-700">Today</div>
              <div className="text-gray-700 mt-1">Last Active</div>
              <div className="text-xs text-gray-500">{nextModule ? `Next: ${nextModule.title}` : "All modules complete!"}</div>
            </div>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-4 mt-4">
            <div className="bg-green-500 h-4 rounded-full transition-all duration-500" style={{ width: `${progressPercent}%` }}></div>
          </div>
          <div className="text-right text-sm text-gray-600 mt-1 font-semibold">{progressPercent}% ({completedModules}/{totalModules} Modules)</div>
        </div>
        <div className="mb-6">
          <h2 className="text-xl font-bold text-gray-800 mb-2">How You Can Help</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Ask your child about what they learned in each module.</li>
            <li>Encourage open conversations about vaping and peer pressure.</li>
            <li>Celebrate completed modules and earned badges together.</li>
            <li>Try the Family Conversation Games below to reinforce learning.</li>
            <li>Model healthy choices and share your own reasons for being vape-free.</li>
          </ul>
        </div>
        <div className="mb-6">
          <h2 className="text-xl font-bold text-gray-800 mb-2">Next Steps</h2>
          {nextModule ? (
            <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 rounded-xl text-xl shadow-lg transition mb-2" onClick={() => router.push(`/modules/${nextModule.slug}`)}>
              Start Next Module: {nextModule.title}
              <div className="text-xs bg-green-100 text-green-700 rounded-full px-2 py-1 inline-block mt-1">Est. 5 Minutes</div>
            </button>
          ) : (
            <span className="text-green-700 font-bold">All modules complete! Keep supporting your child's journey.</span>
          )}
        </div>
      </div>

      {/* Family Conversation Games */}
      <div className="w-full max-w-3xl bg-white rounded-2xl shadow-lg p-6 mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center"><span className="mr-2" role="img" aria-label="heart">💛</span>Family Conversation Games</h2>
        {familyGames.map((game, idx) => (
          <div key={idx} className="mb-6 p-4 rounded-2xl shadow-md" style={{ border: `2px solid ${game.color}` }}>
            <div className="flex items-center mb-2">
              <span className="text-3xl mr-2">{game.icon}</span>
              <span className="font-bold text-lg" style={{ color: game.color }}>{idx+1}. {game.title}</span>
            </div>
            <div className="text-gray-800 mb-1">{game.desc} <span className="font-semibold">**Focus:**</span> {game.focus}</div>
            <button className="w-full mt-3 py-3 rounded-xl font-bold text-white text-lg" style={{ background: game.color }}>{game.btn}</button>
          </div>
        ))}
      </div>

      {/* Essential Tools & Guides */}
      <div className="w-full max-w-3xl bg-white rounded-2xl shadow-lg p-6 mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center"><span className="mr-2" role="img" aria-label="key">🔑</span>Essential Tools & Guides</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-green-50 rounded-xl p-4 flex flex-col items-start">
            <span className="text-xl font-bold text-green-700 mb-1">The 5-Minute Communication Guide</span>
            <span className="text-gray-700">Quick tips for effective family conversations about vaping.</span>
          </div>
          <div className="bg-gray-50 rounded-xl p-4 flex flex-col items-start">
            <span className="text-xl font-bold text-pink-700 mb-1">Anonymous Q&A & Local Support</span>
            <span className="text-gray-700">Ask questions or find local resources for help and support.</span>
          </div>
        </div>
      </div>
    </div>
  );
}

"use client";
import { useUser } from "./user";
import { usePathname } from "next/navigation";
import { useState } from "react";

function UserWidget() {
  const { user } = useUser() || {};
  const [open, setOpen] = useState(false);
  if (!user) return null;
  return (
    <div className="fixed top-4 right-6 z-50">
      <button onClick={() => setOpen((v) => !v)} className="rounded-full border-2 border-indigo-300 shadow-lg w-12 h-12 bg-white flex items-center justify-center">
        <img src={user.pfp || "/public/pfp-demo.png"} alt="Profile" className="w-10 h-10 rounded-full" />
      </button>
      {open && (
        <div className="absolute right-0 mt-2 w-64 bg-white rounded-xl shadow-2xl border p-4 flex flex-col gap-2">
          <div className="flex items-center gap-3 mb-2">
            <img src={user.pfp || "/public/pfp-demo.png"} alt="Profile" className="w-10 h-10 rounded-full" />
            <div>
              <div className="font-bold text-indigo-700">{user.name || user.email}</div>
              <div className="text-xs text-gray-900">{user.email}</div>
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-sm">Points: <b>{user.points || 0}</b></span>
            <span className="text-sm">Modules Completed: <b>{user.completed?.length || 0}</b></span>
            <span className="text-sm">Badges: <b>{user.badges?.join(", ") || "-"}</b></span>
          </div>
          <button className="btn mt-2" onClick={() => { localStorage.removeItem("user"); window.location.href = "/login"; }}>Logout</button>
        </div>
      )}
    </div>
  );
}

function LayoutWithSidebar({ children }) {
  return (
    <div className="min-h-screen flex flex-row bg-gradient-to-br from-[#ede9fe] via-[#f3e8ff] to-[#e0e7ff]">
      <aside className="w-80 min-h-screen bg-gradient-to-b from-[#8f2be2] via-[#6366f1] to-[#312e81] flex flex-col gap-6 shadow-2xl relative z-10 border-r-4 border-[#312e81]">
        <div className="text-4xl font-extrabold text-white mb-8 text-center tracking-wide py-8 select-none rounded-b-3xl shadow-lg bg-gradient-to-r from-[#8f2be2] to-[#6366f1] border-b-4 border-white">
          <span className="inline-block skew-x-[-8deg] tracking-widest drop-shadow-[2px_2px_0_#312e81]">No Filter</span>
        </div>
        <nav className="flex flex-col gap-3 text-lg font-semibold px-4">
          <a href="/" className="block text-white bg-gradient-to-r from-[#8f2be2] to-[#6366f1] rounded-xl px-6 py-4 mb-2 shadow-lg border-2 border-[#312e81] hover:bg-white hover:text-[#312e81] hover:scale-105 hover:border-[#8f2be2] transition-all font-bold">🏠 Home</a>
          <a href="/dashboard" className="block text-white bg-gradient-to-r from-[#06b6d4] to-[#6366f1] rounded-xl px-6 py-4 mb-2 shadow-lg border-2 border-[#312e81] hover:bg-white hover:text-[#312e81] hover:scale-105 hover:border-[#06b6d4] transition-all font-bold">📊 Dashboard</a>
          <a href="/courses" className="block text-white bg-gradient-to-r from-[#8f2be2] to-[#6366f1] rounded-xl px-6 py-4 mb-2 shadow-lg border-2 border-[#312e81] hover:bg-white hover:text-[#312e81] hover:scale-105 hover:border-[#8f2be2] transition-all font-bold">📚 Modules</a>
          <a href="/ai-tutor" className="block text-white bg-gradient-to-r from-[#8f2be2] to-[#6366f1] rounded-xl px-6 py-4 mb-2 shadow-lg border-2 border-[#312e81] hover:bg-white hover:text-[#312e81] hover:scale-105 hover:border-[#8f2be2] transition-all font-bold">🤖 AI Tutor</a>
          <a href="/about" className="block text-white bg-gradient-to-r from-[#8f2be2] to-[#6366f1] rounded-xl px-6 py-4 mb-2 shadow-lg border-2 border-[#312e81] hover:bg-white hover:text-[#312e81] hover:scale-105 hover:border-[#8f2be2] transition-all font-bold">ℹ️ About</a>
          <a href="/features" className="block text-white bg-gradient-to-r from-[#8f2be2] to-[#6366f1] rounded-xl px-6 py-4 mb-2 shadow-lg border-2 border-[#312e81] hover:bg-white hover:text-[#312e81] hover:scale-105 hover:border-[#8f2be2] transition-all font-bold">✨ Features</a>
          <a href="/contact" className="block text-white bg-gradient-to-r from-[#8f2be2] to-[#6366f1] rounded-xl px-6 py-4 mb-2 shadow-lg border-2 border-[#312e81] hover:bg-white hover:text-[#312e81] hover:scale-105 hover:border-[#8f2be2] transition-all font-bold">✉️ Contact</a>
          <a href="/login" className="block text-white bg-gradient-to-r from-[#8f2be2] to-[#6366f1] rounded-xl px-6 py-4 mb-2 shadow-lg border-2 border-[#312e81] hover:bg-white hover:text-[#312e81] hover:scale-105 hover:border-[#8f2be2] transition-all font-bold">🔑 Login</a>
        </nav>
      </aside>
      <main className="flex-1 flex flex-col min-h-screen bg-gradient-to-br from-[#f8fafc] via-[#f3e8ff] to-[#ede9fe] px-0 md:px-8 py-0 md:py-8 overflow-x-auto">
        {children}
      </main>
    </div>
  );
}

function LayoutFocusMode({ children }) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#f8fafc] via-[#f3e8ff] to-[#ede9fe]">
      <main className="w-full max-w-3xl mx-auto flex flex-col items-center justify-center py-8">
        {children}
      </main>
    </div>
  );
}

export default function ClientLayout({ children }) {
  const pathname = usePathname();
  // Focus mode for any /modules/[slug] (not /modules or /modules/)
  const isModuleFocus = /^\/modules\/[^/]+$/.test(pathname);
  return (
    <>
      <UserWidget />
      {isModuleFocus ? <LayoutFocusMode>{children}</LayoutFocusMode> : <LayoutWithSidebar>{children}</LayoutWithSidebar>}
    </>
  );
}

"use client";
import { useState } from "react";
import { supabase } from "../supabaseClient";

export default function Login() {
  const [role, setRole] = useState("child");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  // Demo emails for autofill
  const demoEmails = {
    parent: "parent@email.com",
    child: "child@email.com"
  };

  const handleRoleSelect = (selectedRole) => {
    setRole(selectedRole);
    setEmail(demoEmails[selectedRole]);
    setPassword("password");
    setError("");
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    setLoading(false);
    if (error) {
      setError(error.message);
    } else {
      window.location.href = "/modules";
    }
  };

  return (
    <div className="flex flex-col flex-1 items-center justify-center py-16 fade-in">
      <form className="card max-w-sm w-full flex flex-col items-center" onSubmit={handleLogin}>
        <h1 className="text-4xl font-extrabold text-indigo-700 mb-4">Login</h1>
        <div className="flex gap-4 mb-4">
          <button type="button" onClick={() => handleRoleSelect("child")} className={`px-4 py-2 rounded-lg font-bold border-2 ${role === "child" ? "bg-indigo-600 text-white border-indigo-700" : "bg-white text-indigo-700 border-indigo-300"}`}>Child Login</button>
          <button type="button" onClick={() => handleRoleSelect("parent")} className={`px-4 py-2 rounded-lg font-bold border-2 ${role === "parent" ? "bg-teal-600 text-white border-teal-700" : "bg-white text-teal-700 border-teal-300"}`}>Parent Login</button>
        </div>
        <input
          type="email"
          placeholder={role === "parent" ? "Parent Email (parent@email.com)" : "Child Email (child@email.com)"}
          className="input w-full mb-3 text-gray-900"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          className="input w-full mb-3 text-gray-900"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
        />
        <button className="btn w-full" type="submit" disabled={loading}>{loading ? "Logging in..." : `Login as ${role.charAt(0).toUpperCase() + role.slice(1)}`}</button>
        {error && <div className="mt-4 text-red-500 text-sm text-center">{error}</div>}
        <div className="mt-4 text-gray-400 text-sm text-center">
          <div>Demo Parent: <b>parent@email.com</b> / <b>password</b></div>
          <div>Demo Child: <b>child@email.com</b> / <b>password</b></div>
        </div>
      </form>
    </div>
  );
}

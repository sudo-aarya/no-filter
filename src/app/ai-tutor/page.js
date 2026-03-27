"use client";
import { useState, useRef } from "react";

export default function AiTutor() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    { role: "system", content: "You are a friendly AI tutor for vaping prevention and general learning. Keep answers clear and supportive." },
    { role: "assistant", content: "Hi! I'm your AI Tutor. How can I help you today?" }
  ]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const chatEndRef = useRef(null);

  const handleSend = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    setError("");
    const newMessages = [...messages, { role: "user", content: input }];
    setMessages(newMessages);
    setInput("");
    setLoading(true);
    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: newMessages }),
      });
      const data = await res.json();
      if (data.result) {
        setMessages([...newMessages, { role: "assistant", content: data.result }]);
      } else {
        setError(data.error || "Something went wrong.");
      }
    } catch {
      setError("Network error. Please try again.");
    }
    setLoading(false);
    setTimeout(() => chatEndRef.current?.scrollIntoView({ behavior: "smooth" }), 100);
  };

  return (
    <div className="flex flex-col flex-1 items-center justify-center py-16 fade-in">
      <div className="card max-w-xl w-full flex flex-col items-center slide-up">
        <h1 className="text-4xl font-extrabold text-indigo-700 mb-4">AI Tutor <span className="align-middle">🤖</span></h1>
        <div className="divider-animated" style={{marginBottom: '2rem'}}></div>
        <div className="w-full flex flex-col gap-2 mb-4 max-h-96 overflow-y-auto bg-[#f8f8ff] rounded-xl p-4 border border-[#ede9fe]">
          {messages.filter(m => m.role !== "system").map((m, i) => (
            <div key={i} className={m.role === "user" ? "text-right" : "text-left"}>
              <span className={
                m.role === "user"
                  ? "inline-block bg-indigo-100 text-indigo-900 rounded-xl px-4 py-2 my-1 max-w-[80%]"
                  : "inline-block bg-white text-gray-900 rounded-xl px-4 py-2 my-1 max-w-[80%] border border-indigo-100"
              }>
                {m.content}
              </span>
            </div>
          ))}
          <div ref={chatEndRef} />
        </div>
        <form className="w-full flex flex-col gap-2" onSubmit={handleSend}>
          <input
            type="text"
            placeholder="Type your question..."
            className="input text-gray-900"
            value={input}
            onChange={e => setInput(e.target.value)}
            disabled={loading}
            autoFocus
          />
          <button className="btn mt-2" type="submit" disabled={loading || !input.trim()}>
            {loading ? "Thinking..." : "Send"}
          </button>
        </form>
        {error && <div className="mt-2 text-red-500 text-sm">{error}</div>}
      </div>
    </div>
  );
}

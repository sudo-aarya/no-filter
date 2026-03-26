export default function AiTutor() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center py-12">
      <h1 className="text-4xl font-extrabold text-blue-700 mb-8 drop-shadow-sm">AI Tutor 🤖</h1>
      <div className="bg-white rounded-2xl shadow-lg p-8 max-w-xl w-full flex flex-col items-center border-4 border-blue-200">
        <p className="text-lg text-zinc-700 mb-4 text-center">
          Chat with your friendly AI Tutor! Ask questions, get help with homework, or just have fun learning.
        </p>
        <div className="w-full flex flex-col gap-2">
          <input
            type="text"
            placeholder="Type your question..."
            className="rounded-lg border-2 border-blue-200 px-4 py-2 focus:outline-none focus:border-blue-400"
            disabled
          />
          <button
            className="bg-blue-400 text-white font-bold rounded-lg px-4 py-2 mt-2 opacity-60 cursor-not-allowed"
            disabled
          >
            Send
          </button>
        </div>
        <div className="mt-6 text-zinc-400 text-sm text-center">
          (AI chat coming soon!)
        </div>
      </div>
    </div>
  );
}

export default function Login() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center py-12">
      <h1 className="text-4xl font-extrabold text-blue-700 mb-8 drop-shadow-sm">Login</h1>
      <div className="bg-white rounded-2xl shadow-lg p-8 max-w-sm w-full flex flex-col items-center border-4 border-yellow-200">
        <input
          type="text"
          placeholder="Username"
          className="rounded-lg border-2 border-yellow-200 px-4 py-2 mb-4 focus:outline-none focus:border-yellow-400"
          disabled
        />
        <input
          type="password"
          placeholder="Password"
          className="rounded-lg border-2 border-yellow-200 px-4 py-2 mb-4 focus:outline-none focus:border-yellow-400"
          disabled
        />
        <button
          className="bg-yellow-400 text-white font-bold rounded-lg px-4 py-2 opacity-60 cursor-not-allowed"
          disabled
        >
          Login
        </button>
        <div className="mt-4 text-zinc-400 text-sm text-center">
          (Login coming soon!)
        </div>
      </div>
    </div>
  );
}

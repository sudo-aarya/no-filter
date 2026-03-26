export default function Features() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <h1 className="text-3xl font-semibold text-black dark:text-zinc-50 mb-4">Features</h1>
        <ul className="list-disc pl-6 text-lg text-zinc-600 dark:text-zinc-400">
          <li>Feature 1: Describe your first feature here.</li>
          <li>Feature 2: Describe your second feature here.</li>
          <li>Feature 3: Describe your third feature here.</li>
        </ul>
      </main>
    </div>
  );
}

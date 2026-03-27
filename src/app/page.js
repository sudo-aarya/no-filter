

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center py-0 fade-in w-full">
      {/* Hero Section */}
      <section className="w-full flex flex-col items-center justify-center animated-gradient py-8 md:py-10 px-4 md:px-0 shadow-xl rounded-b-3xl relative overflow-hidden min-h-0">
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0" style={{background: 'radial-gradient(ellipse at 60% 20%, #a78bfa33 0%, transparent 70%)'}}></div>
        <div className="max-w-4xl w-full flex flex-col md:flex-row items-center gap-6 md:gap-12 relative z-10">
          <div className="flex-1 flex flex-col items-start slide-up">
            <h1 className="text-3xl md:text-4xl font-extrabold text-indigo-800 mb-3 leading-tight drop-shadow-lg">No Filter: <span className="text-indigo-500">Vaping Prevention</span> for Families</h1>
            <p className="text-lg text-gray-900 mb-4 max-w-xl">Empowering families to learn, talk, and act together against vaping with interactive modules, quizzes, and an AI tutor.</p>
            <div className="flex gap-3">
              <a href="/modules" className="btn text-base px-6 py-3 shadow-xl">Try a Module</a>
              <a href="/ai-tutor" className="btn text-base px-6 py-3" style={{background: 'linear-gradient(90deg, #6366f1 0%, #8f2be2 100%)'}}>AI Tutor</a>
            </div>
          </div>
        </div>
        <div className="divider-animated" style={{marginTop: '1.5rem'}}></div>
      </section>

      {/* Role Selection Section - 3 cards, visible above the fold */}
      <section className="w-full flex flex-col items-center justify-center py-6 fade-in">
        <h2 className="text-2xl md:text-3xl font-extrabold text-center text-indigo-900 mb-1">Who are you?</h2>
        <p className="text-base text-gray-900 text-center mb-6">Choose your role to get started</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl">
          {/* Student Card */}
          <div className="card flex flex-col items-center p-6 slide-up" style={{animationDelay: '0.15s'}}>
            <div className="mb-4 flex items-center justify-center w-14 h-14 rounded-full bg-indigo-50">
              <span className="text-3xl text-indigo-500">🎓</span>
            </div>
            <div className="font-bold text-lg text-gray-900 mb-1">I'm a Student</div>
            <div className="text-gray-900 mb-3">Ages 12-14</div>
            <ul className="text-gray-900 text-sm mb-5 list-disc list-inside text-left w-full max-w-xs mx-auto">
              <li>Learn the facts about vaping</li>
              <li>Interactive games & quizzes</li>
              <li>Earn badges & achievements</li>
            </ul>
            <a href="/modules" className="btn w-full max-w-xs">Start Learning</a>
          </div>
          {/* Parent Card */}
          <div className="card flex flex-col items-center p-6 slide-up" style={{animationDelay: '0.3s'}}>
            <div className="mb-4 flex items-center justify-center w-14 h-14 rounded-full bg-green-50">
              <span className="text-3xl text-green-500">👨‍👩‍👧‍👦</span>
            </div>
            <div className="font-bold text-lg text-gray-900 mb-1">I'm a Parent</div>
            <div className="text-gray-900 mb-3">Supporting your child</div>
            <ul className="text-gray-900 text-sm mb-5 list-disc list-inside text-left w-full max-w-xs mx-auto">
              <li>Warning signs to watch for</li>
              <li>Conversation starters & tips</li>
              <li>Support resources</li>
            </ul>
            <a href="/about" className="btn w-full max-w-xs" style={{background: 'linear-gradient(90deg, #34d399 0%, #6ee7b7 100%)', color: '#065f46'}}>Access Resources</a>
          </div>
          {/* Teacher Card */}
          <div className="card flex flex-col items-center p-6 slide-up" style={{animationDelay: '0.45s'}}>
            <div className="mb-4 flex items-center justify-center w-14 h-14 rounded-full bg-purple-50">
              <span className="text-3xl text-purple-500">📖</span>
            </div>
            <div className="font-bold text-lg text-gray-900 mb-1">I'm a Teacher</div>
            <div className="text-gray-900 mb-3">Classroom resources</div>
            <ul className="text-gray-900 text-sm mb-5 list-disc list-inside text-left w-full max-w-xs mx-auto">
              <li>Lesson plans & activities</li>
              <li>Discussion guides</li>
              <li>Student progress tracking</li>
            </ul>
            <a href="/features" className="btn w-full max-w-xs" style={{background: 'linear-gradient(90deg, #a78bfa 0%, #6366f1 100%)', color: '#312e81'}}>View Curriculum</a>
          </div>
        </div>
      </section>

      {/* Quick Access Cards */}
      <div className="w-full flex flex-col items-center justify-center py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full max-w-3xl">
          <a href="/modules" className="card p-8 flex flex-col items-center hover:scale-105 transition-all cursor-pointer slide-up" style={{animationDelay: '0.5s'}}>
            <span className="text-4xl mb-2 text-indigo-700">📚</span>
            <span className="font-bold text-xl text-gray-900">Modules</span>
            <span className="text-gray-900 mt-2 text-center">Explore interactive lessons and activities about vaping prevention.</span>
          </a>
          <a href="/ai-tutor" className="card p-8 flex flex-col items-center hover:scale-105 transition-all cursor-pointer slide-up" style={{animationDelay: '0.65s'}}>
            <span className="text-4xl mb-2 text-indigo-700">🤖</span>
            <span className="font-bold text-xl text-gray-900">AI Tutor</span>
            <span className="text-gray-600 mt-2 text-center">Get instant help and answers from your friendly AI tutor.</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default function Features() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center py-16 fade-in">
      <div className="card max-w-3xl w-full flex flex-col items-center slide-up">
        <h1 className="text-4xl font-extrabold text-indigo-700 mb-4">Teacher Resources</h1>
        <div className="divider-animated" style={{marginBottom: '2rem'}}></div>
        <p className="text-lg text-gray-700 text-center mb-6">
          Access classroom-ready resources, lesson plans, and student progress tools to support vaping prevention education.
        </p>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-xl font-bold text-purple-700 mb-2">Lesson Plans & Activities</h2>
            <ul className="list-disc list-inside text-gray-700 mb-4">
              <li><b>Module: The Facts About Vaping</b> – Evidence-based lesson with discussion prompts and activities.</li>
              <li><b>Module: Myth Busters</b> – Debunk common myths with interactive class games.</li>
              <li><b>Module: Social Media & Peer Pressure</b> – Explore how marketing and peers influence choices.</li>
            </ul>
            <h2 className="text-xl font-bold text-purple-700 mb-2">Discussion Guides</h2>
            <ul className="list-disc list-inside text-gray-700">
              <li>How to facilitate open, stigma-free conversations</li>
              <li>Sample questions and group activities</li>
              <li>Printable handouts and infographics</li>
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-bold text-purple-700 mb-2">Student Progress Tracking</h2>
            <ul className="list-disc list-inside text-gray-700 mb-4">
              <li>Track module completion and quiz results</li>
              <li>View student badges and achievements</li>
              <li>Export progress reports for parents/administrators</li>
            </ul>
            <h2 className="text-xl font-bold text-purple-700 mb-2">Teacher Modules</h2>
            <ul className="list-disc list-inside text-gray-700">
              <li><b>Module: Creating a Supportive Classroom</b> – Foster a safe, inclusive environment for discussion.</li>
              <li><b>Module: Policy & Advocacy</b> – Understand school policies and how to advocate for change.</li>
              <li><b>Module: Engaging Families</b> – Strategies for involving parents and caregivers.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

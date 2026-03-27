export default function About() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center py-16 fade-in">
      <div className="card max-w-3xl w-full flex flex-col items-center slide-up">
        <h1 className="text-4xl font-extrabold text-indigo-700 mb-4">Parent Resources</h1>
        <div className="divider-animated" style={{marginBottom: '2rem'}}></div>
        <p className="text-lg text-gray-900 text-center mb-6">
          Support your child in making healthy choices. Find conversation starters, warning signs, and practical resources to help your family talk about vaping and prevention.
        </p>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-xl font-bold text-green-700 mb-2">Warning Signs to Watch For</h2>
            <ul className="list-disc list-inside text-gray-900 mb-4">
              <li>Unexplained sweet or fruity smells</li>
              <li>Unusual devices, USB-like objects, or cartridges</li>
              <li>Increased thirst or nosebleeds</li>
              <li>Changes in friend groups or secrecy</li>
              <li>Declining school performance or interest</li>
            </ul>
            <h2 className="text-xl font-bold text-green-700 mb-2">Support Resources</h2>
            <ul className="list-disc list-inside text-gray-900">
              <li><a href="https://www.cancercouncil.com.au/cancer-prevention/smoking/generation-vape/" className="underline text-green-600" target="_blank">Cancer Council: Generation Vape</a></li>
              <li><a href="https://www.tga.gov.au/news/news-articles/new-standards-nicotine-vaping-products-july-2025" className="underline text-green-600" target="_blank">TGA: Vaping Product Standards</a></li>
              <li><a href="https://www.quit.org.au/" className="underline text-green-600" target="_blank">Quitline & Support</a></li>
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-bold text-green-700 mb-2">Conversation Starters & Tips</h2>
            <ul className="list-disc list-inside text-gray-900 mb-4">
              <li>"What do you know about vaping?"</li>
              <li>"Have you seen anyone at school using vapes?"</li>
              <li>"What would you do if someone offered you a vape?"</li>
              <li>"How do you feel about the risks of vaping?"</li>
              <li>"Do you have any questions about vaping or health?"</li>
            </ul>
            <h2 className="text-xl font-bold text-green-700 mb-2">Parent Modules</h2>
            <ul className="list-disc list-inside text-gray-900">
              <li><b>Module: Understanding Vaping</b> – Learn about vaping products, health risks, and why youth are drawn to them.</li>
              <li><b>Module: Talking to Your Child</b> – Strategies for open, non-judgmental conversations.</li>
              <li><b>Module: Setting Boundaries</b> – How to set clear expectations and support healthy choices.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

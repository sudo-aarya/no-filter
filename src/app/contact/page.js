export default function Contact() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center py-16 fade-in">
      <div className="card max-w-2xl w-full flex flex-col items-center slide-up">
        <h1 className="text-4xl font-extrabold text-indigo-700 mb-4">Contact</h1>
        <div className="divider-animated" style={{marginBottom: '2rem'}}></div>
        <p className="text-lg text-gray-900 text-center mb-4">
          Have questions or feedback? Reach out to us!
        </p>
        <form className="w-full flex flex-col items-center">
          <input type="text" placeholder="Your Name" className="input w-full mb-3" disabled />
          <input type="email" placeholder="Your Email" className="input w-full mb-3" disabled />
          <textarea placeholder="Your Message" className="input w-full mb-3" rows={4} disabled />
          <button className="btn w-full" disabled>Send Message</button>
        </form>
        <div className="mt-6 text-gray-900 text-sm text-center">(Contact form coming soon!)</div>
      </div>
    </div>
  );
}

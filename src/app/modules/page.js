

"use client";

import { modules } from "./modules";
import Link from "next/link";

export default function Modules() {
  return (
    <div className="flex flex-col items-center justify-center py-16 fade-in">
      <div className="card max-w-4xl w-full flex flex-col items-center slide-up">
        <h1 className="text-4xl font-extrabold text-indigo-700 mb-6">Modules</h1>
        <div className="divider-animated" style={{marginBottom: '2.5rem'}}></div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
          {modules.map((mod, idx) => (
            <Link
              key={mod.slug}
              href={`/modules/${mod.slug}`}
              className="card p-8 flex flex-col items-center hover:scale-105 transition-all cursor-pointer slide-up"
              style={{ animationDelay: `${0.2 + idx * 0.1}s` }}
            >
              <span className="text-2xl font-bold text-gray-900 mb-2">{mod.title}</span>
              <span className="text-gray-900 text-center">{mod.description}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

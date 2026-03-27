"use client";

import { useState } from "react";

const questions = [
  {
    question: "Which organ is permanently damaged by prolonged vaping?",
    options: [
      { text: "Lungs", color: "bg-red-600 border-gray-900 border-2", correct: true },
      { text: "Muscles", color: "bg-blue-600 border-gray-900 border-2", correct: false },
      { text: "Bones", color: "bg-yellow-400 border-gray-900 border-2", correct: false },
      { text: "Fingernails", color: "bg-green-600 border-gray-900 border-2", correct: false },
    ],
  },
  {
    question: "Vaping can increase a young person's risk of...",
    options: [
      { text: "Depression and anxiety", color: "bg-yellow-400 border-gray-900 border-2", correct: true },
      { text: "Better memory", color: "bg-blue-600 border-gray-900 border-2", correct: false },
      { text: "Stronger bones", color: "bg-green-600 border-gray-900 border-2", correct: false },
      { text: "None of the above", color: "bg-red-600 border-gray-900 border-2", correct: false },
    ],
  },
];

export default function QuizModule() {
  const [step, setStep] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  function handleAnswer(isCorrect) {
    if (isCorrect) setScore(score + 1);
    if (step + 1 < questions.length) {
      setStep(step + 1);
    } else {
      setShowResult(true);
    }
  }

  return (
    <div className="flex flex-col items-center justify-center py-12">
      <h1 className="text-3xl font-extrabold text-gray-900 mb-6 drop-shadow-[2px_2px_0_#222]">Fact Fusion Blitz (Quiz)</h1>
      <div className="bg-white rounded-2xl shadow-lg p-8 max-w-xl w-full flex flex-col items-center border-4 border-gray-800">
        {!showResult ? (
          <>
            <div className="text-lg font-semibold mb-4 text-center text-gray-900 drop-shadow-[1px_1px_0_#222]">
              <span className="text-gray-900">{questions[step].question}</span>
            </div>
            <div className="grid grid-cols-2 gap-4 w-full mb-4">
              {questions[step].options.map((opt, idx) => (
                <button
                  key={idx}
                  className={`rounded-xl py-4 px-2 font-bold text-gray-900 text-lg shadow hover:scale-105 transition-all ${opt.color}`}
                  onClick={() => handleAnswer(opt.correct)}
                >
                  {opt.text}
                </button>
              ))}
            </div>
            <div className="text-sm text-gray-900">Question {step + 1} of {questions.length}</div>
          </>
        ) : (
          <div className="flex flex-col items-center">
            <div className="text-2xl font-bold mb-2 text-gray-900 drop-shadow-[1px_1px_0_#222]">Quiz Complete!</div>
            <div className="text-lg mb-4 text-gray-900">Your Score: <span className="text-[#8f2be2] font-bold">{score} / {questions.length}</span></div>
            <button
              className="mt-2 px-6 py-2 bg-gray-800 text-white rounded-lg font-semibold hover:bg-gray-900 transition"
              onClick={() => { setStep(0); setScore(0); setShowResult(false); }}
            >
              Try Again
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

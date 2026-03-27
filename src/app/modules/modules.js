// Module data for all roles
export const modules = [
  {
    slug: "facts",
    role: "student",
    title: "The Facts About Vaping",
    description: "Learn the real facts about vaping, its risks, and how it affects young people and families.",
    objectives: [
      "Understand what vaping is and how it works",
      "Identify health risks and addiction potential",
      "Debunk common myths about vaping"
    ],
    content: [
      "Vaping involves inhaling vapor from an electronic device. Most vapes contain nicotine, which is highly addictive.",
      "Many vapes are marketed with sweet flavors and bright packaging to appeal to youth.",
      "Health risks include lung damage, addiction, and unknown long-term effects."
    ],
    quiz: [
      {
        question: "Which organ is most at risk from vaping?",
        options: ["Lungs", "Muscles", "Bones", "Fingernails"],
        answer: "Lungs"
      },
      {
        question: "What makes vaping appealing to youth?",
        options: ["Flavors", "Peer pressure", "Marketing", "All of the above"],
        answer: "All of the above"
      }
    ],
    badge: "Fact Finder"
  },
  {
    slug: "myth-busters",
    role: "student",
    title: "Myth Busters",
    description: "Test your knowledge and bust common myths about vaping.",
    objectives: [
      "Recognize misinformation about vaping",
      "Learn to question what you hear from peers and media"
    ],
    content: [
      "Myth: Vaping is just water vapor. Fact: Most vapes contain nicotine and chemicals.",
      "Myth: Vaping is safe. Fact: The long-term health effects are still unknown."
    ],
    quiz: [
      {
        question: "Is vaping just water vapor?",
        options: ["Yes", "No"],
        answer: "No"
      }
    ],
    badge: "Myth Buster"
  },
  {
    slug: "peer-pressure",
    role: "student",
    title: "Social Media & Peer Pressure",
    description: "Explore how social media and friends can influence vaping choices.",
    objectives: [
      "Identify peer and media influences",
      "Develop refusal skills"
    ],
    content: [
      "Social media often glamorizes vaping. Remember, not everything online is true.",
      "Practice saying no: 'No thanks, I don't vape.'"
    ],
    quiz: [
      {
        question: "What is a good way to refuse a vape?",
        options: ["No thanks, I don't vape.", "Maybe later.", "Just once won't hurt."],
        answer: "No thanks, I don't vape."
      }
    ],
    badge: "Peer Resistor"
  },
  // Parent and Teacher modules can be added similarly

  // Math Magic
  {
    slug: "math-magic",
    role: "student",
    title: "Math Magic",
    description: "Fun math games and puzzles!",
    objectives: [
      "Sharpen your math skills with fun games",
      "Solve puzzles and brain teasers",
      "Build confidence in problem-solving"
    ],
    content: [
      "Try to solve: What 3 numbers give the same answer when added together as when multiplied? (Answer: 1, 2, 3)",
      "Puzzle: Fill in the blank: 2, 4, 8, 16, ___ (Answer: 32)",
      "Game: How many triangles are in a pentagon if you draw all diagonals from one vertex? (Answer: 3)"
    ],
    quiz: [
      {
        question: "What is 7 x 8?",
        options: ["54", "56", "64", "58"],
        answer: "56"
      },
      {
        question: "What comes next: 5, 10, 20, ___?",
        options: ["25", "30", "40", "50"],
        answer: "40"
      }
    ],
    badge: "Math Whiz"
  },
  // Science Explorers
  {
    slug: "science-explorers",
    role: "student",
    title: "Science Explorers",
    description: "Discover the wonders of science.",
    objectives: [
      "Explore fun science facts",
      "Try simple experiments at home",
      "Understand the world around you"
    ],
    content: [
      "Fact: Water expands when it freezes. Try freezing a full water bottle (with the cap off) and see what happens!",
      "Experiment: Make a rainbow with a glass of water and sunlight.",
      "Did you know? The human body is about 60% water."
    ],
    quiz: [
      {
        question: "What planet is known as the Red Planet?",
        options: ["Earth", "Mars", "Jupiter", "Venus"],
        answer: "Mars"
      },
      {
        question: "What do plants need to make food?",
        options: ["Sunlight", "Moonlight", "Starlight", "Flashlight"],
        answer: "Sunlight"
      }
    ],
    badge: "Science Star"
  },
  // Story Time
  {
    slug: "story-time",
    role: "student",
    title: "Story Time",
    description: "Read and listen to amazing stories.",
    objectives: [
      "Enjoy fun and inspiring stories",
      "Improve reading and listening skills",
      "Learn lessons from stories"
    ],
    content: [
      "Story: The Lion and the Mouse — A small act of kindness can make a big difference.",
      "Story: The Tortoise and the Hare — Slow and steady wins the race.",
      "Story: The Boy Who Cried Wolf — Always tell the truth."
    ],
    quiz: [
      {
        question: "Who helped the lion in the story?",
        options: ["The Mouse", "The Fox", "The Rabbit", "The Bear"],
        answer: "The Mouse"
      },
      {
        question: "What is the lesson from 'The Boy Who Cried Wolf'?",
        options: ["Be fast", "Tell the truth", "Be strong", "Be quiet"],
        answer: "Tell the truth"
      }
    ],
    badge: "Storyteller"
  }
];

export interface Question {
  id: number;
  text: string;
  options: {
    text: string;
    trait: 'introvert' | 'extrovert' | 'thinker' | 'feeler' | 'planner' | 'spontaneous';
  }[];
}

export const questions: Question[] = [
  {
    id: 1,
    text: "At a party, you typically...",
    options: [
      { text: "Seek out one or two people for deep conversations", trait: "introvert" },
      { text: "Move around and chat with many different people", trait: "extrovert" },
    ],
  },
  {
    id: 2,
    text: "When making decisions, you rely more on...",
    options: [
      { text: "Logic, facts, and objective analysis", trait: "thinker" },
      { text: "Your gut feeling and how others might be affected", trait: "feeler" },
    ],
  },
  {
    id: 3,
    text: "Your ideal weekend looks like...",
    options: [
      { text: "A well-organized itinerary with planned activities", trait: "planner" },
      { text: "Going with the flow and seeing what happens", trait: "spontaneous" },
    ],
  },
  {
    id: 4,
    text: "After a long day, you recharge by...",
    options: [
      { text: "Spending quiet time alone with a book or hobby", trait: "introvert" },
      { text: "Calling friends or going out to socialize", trait: "extrovert" },
    ],
  },
  {
    id: 5,
    text: "When solving problems, you prefer to...",
    options: [
      { text: "Analyze all possibilities before choosing", trait: "thinker" },
      { text: "Trust your intuition and adapt as you go", trait: "feeler" },
    ],
  },
];

export interface PersonalityResult {
  type: string;
  title: string;
  description: string;
  strengths: string[];
  color: string;
}

export const personalityResults: Record<string, PersonalityResult> = {
  "introvert-thinker-planner": {
    type: "The Architect",
    title: "Strategic Visionary",
    description: "You're a thoughtful planner who values logic and independence. You excel at creating systems and solving complex problems with careful analysis.",
    strengths: ["Strategic thinking", "Independence", "Problem-solving", "Attention to detail"],
    color: "from-primary to-accent",
  },
  "introvert-thinker-spontaneous": {
    type: "The Virtuoso",
    title: "Curious Explorer",
    description: "You combine analytical thinking with flexibility. You love diving deep into topics that interest you while remaining open to new discoveries.",
    strengths: ["Adaptability", "Logical analysis", "Curiosity", "Technical skills"],
    color: "from-primary to-secondary",
  },
  "introvert-feeler-planner": {
    type: "The Advocate",
    title: "Empathetic Idealist",
    description: "You're deeply caring with a strong sense of purpose. You plan thoughtfully to make a meaningful difference in the lives of others.",
    strengths: ["Empathy", "Vision", "Dedication", "Creativity"],
    color: "from-accent to-primary",
  },
  "introvert-feeler-spontaneous": {
    type: "The Healer",
    title: "Gentle Soul",
    description: "You're sensitive and open-minded, guided by your values. You seek harmony and authenticity in all your interactions.",
    strengths: ["Compassion", "Authenticity", "Flexibility", "Creativity"],
    color: "from-secondary to-accent",
  },
  "extrovert-thinker-planner": {
    type: "The Commander",
    title: "Bold Leader",
    description: "You're a natural leader who combines charisma with strategic thinking. You inspire others while driving toward ambitious goals.",
    strengths: ["Leadership", "Confidence", "Efficiency", "Strategic vision"],
    color: "from-primary to-secondary",
  },
  "extrovert-thinker-spontaneous": {
    type: "The Debater",
    title: "Quick-Witted Innovator",
    description: "You thrive on intellectual challenges and love exploring new ideas. Your quick thinking and charm make you a natural innovator.",
    strengths: ["Quick thinking", "Innovation", "Charisma", "Adaptability"],
    color: "from-accent to-secondary",
  },
  "extrovert-feeler-planner": {
    type: "The Protagonist",
    title: "Inspiring Leader",
    description: "You're a charismatic leader driven by a desire to help others grow. You combine warmth with organization to create positive change.",
    strengths: ["Inspiration", "Organization", "Empathy", "Communication"],
    color: "from-secondary to-primary",
  },
  "extrovert-feeler-spontaneous": {
    type: "The Entertainer",
    title: "Vibrant Spirit",
    description: "You bring energy and joy wherever you go. Your spontaneity and warmth make you the heart of any gathering.",
    strengths: ["Enthusiasm", "Spontaneity", "Social skills", "Optimism"],
    color: "from-secondary to-accent",
  },
};

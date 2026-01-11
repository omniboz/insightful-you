import { useState, useMemo } from "react";
import { AnimatePresence } from "framer-motion";
import { HeroSection } from "@/components/HeroSection";
import { QuestionCard } from "@/components/QuestionCard";
import { ProgressBar } from "@/components/ProgressBar";
import { ResultCard } from "@/components/ResultCard";
import { questions, personalityResults } from "@/data/questions";

type GameState = "home" | "quiz" | "result";

const Index = () => {
  const [gameState, setGameState] = useState<GameState>("home");
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);

  const handleStart = () => {
    setGameState("quiz");
    setCurrentQuestion(0);
    setAnswers([]);
  };

  const handleAnswer = (trait: string) => {
    const newAnswers = [...answers, trait];
    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setGameState("result");
    }
  };

  const handleRetake = () => {
    setGameState("home");
    setCurrentQuestion(0);
    setAnswers([]);
  };

  const personalityResult = useMemo(() => {
    if (answers.length < questions.length) return null;

    // Count traits
    const traitCounts = answers.reduce((acc, trait) => {
      acc[trait] = (acc[trait] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);

    // Determine dominant traits
    const isExtrovert = (traitCounts["extrovert"] || 0) > (traitCounts["introvert"] || 0);
    const isThinker = (traitCounts["thinker"] || 0) > (traitCounts["feeler"] || 0);
    const isPlanner = (traitCounts["planner"] || 0) > (traitCounts["spontaneous"] || 0);

    const key = `${isExtrovert ? "extrovert" : "introvert"}-${isThinker ? "thinker" : "feeler"}-${isPlanner ? "planner" : "spontaneous"}`;
    
    return personalityResults[key] || personalityResults["introvert-thinker-planner"];
  }, [answers]);

  return (
    <div className="min-h-screen bg-background">
      <AnimatePresence mode="wait">
        {gameState === "home" && (
          <HeroSection key="hero" onStart={handleStart} />
        )}

        {gameState === "quiz" && (
          <div key="quiz" className="min-h-screen flex flex-col items-center justify-center px-6 py-12">
            <ProgressBar current={currentQuestion + 1} total={questions.length} />
            <QuestionCard
              question={questions[currentQuestion]}
              onAnswer={handleAnswer}
            />
          </div>
        )}

        {gameState === "result" && personalityResult && (
          <div key="result" className="min-h-screen flex flex-col items-center justify-center px-6 py-12">
            <ResultCard result={personalityResult} onRetake={handleRetake} />
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Index;

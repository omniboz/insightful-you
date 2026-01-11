import { motion } from "framer-motion";
import { Question } from "@/data/questions";

interface QuestionCardProps {
  question: Question;
  onAnswer: (trait: string) => void;
}

export const QuestionCard = ({ question, onAnswer }: QuestionCardProps) => {
  return (
    <motion.div
      key={question.id}
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="w-full max-w-lg mx-auto"
    >
      <div className="bg-card rounded-2xl shadow-card p-8 md:p-10">
        <h2 className="font-display text-2xl md:text-3xl font-semibold text-foreground mb-8 text-center leading-relaxed">
          {question.text}
        </h2>
        <div className="space-y-4">
          {question.options.map((option, index) => (
            <motion.button
              key={index}
              onClick={() => onAnswer(option.trait)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full p-5 text-left rounded-xl border-2 border-border bg-background hover:border-primary hover:bg-primary/5 transition-all duration-200 group"
            >
              <span className="text-foreground group-hover:text-primary transition-colors font-medium">
                {option.text}
              </span>
            </motion.button>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

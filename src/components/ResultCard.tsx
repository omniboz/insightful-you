import { motion } from "framer-motion";
import { PersonalityResult } from "@/data/questions";
import { Sparkles, RotateCcw } from "lucide-react";

interface ResultCardProps {
  result: PersonalityResult;
  onRetake: () => void;
}

export const ResultCard = ({ result, onRetake }: ResultCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="w-full max-w-lg mx-auto"
    >
      <div className="bg-card rounded-3xl shadow-elevated overflow-hidden">
        {/* Header with gradient */}
        <div className={`bg-gradient-to-r ${result.color} p-8 md:p-10 text-center`}>
          <motion.div
            initial={{ rotate: 0 }}
            animate={{ rotate: 360 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Sparkles className="w-12 h-12 text-primary-foreground mx-auto mb-4" />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-2"
          >
            {result.type}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-primary-foreground/90 text-lg font-medium"
          >
            {result.title}
          </motion.p>
        </div>

        {/* Content */}
        <div className="p-8 md:p-10">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-muted-foreground text-lg leading-relaxed mb-8"
          >
            {result.description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <h3 className="font-display text-lg font-semibold text-foreground mb-4">
              သင့်အားသာချက်များ
            </h3>
            <div className="flex flex-wrap gap-2">
              {result.strengths.map((strength, index) => (
                <motion.span
                  key={strength}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.7 + index * 0.1 }}
                  className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium"
                >
                  {strength}
                </motion.span>
              ))}
            </div>
          </motion.div>

          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            onClick={onRetake}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full mt-8 py-4 px-6 bg-muted hover:bg-muted/80 text-foreground rounded-xl font-medium transition-colors flex items-center justify-center gap-2"
          >
            <RotateCcw className="w-5 h-5" />
            ထပ်မံစစ်ဆေးမည်
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};


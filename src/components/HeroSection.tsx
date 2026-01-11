import { motion } from "framer-motion";
import { Sparkles, Brain, Heart } from "lucide-react";

interface HeroSectionProps {
  onStart: () => void;
}

export const HeroSection = ({ onStart }: HeroSectionProps) => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 py-12 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 6, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl"
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        />
      </div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-center max-w-2xl mx-auto"
      >
        {/* Floating icons */}
        <div className="flex justify-center gap-6 mb-8">
          <motion.div
            animate={{ y: [-5, 5, -5] }}
            transition={{ duration: 3, repeat: Infinity, delay: 0 }}
          >
            <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center">
              <Brain className="w-7 h-7 text-primary" />
            </div>
          </motion.div>
          <motion.div
            animate={{ y: [5, -5, 5] }}
            transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
          >
            <div className="w-14 h-14 bg-secondary/10 rounded-2xl flex items-center justify-center">
              <Sparkles className="w-7 h-7 text-secondary" />
            </div>
          </motion.div>
          <motion.div
            animate={{ y: [-5, 5, -5] }}
            transition={{ duration: 3, repeat: Infinity, delay: 1 }}
          >
            <div className="w-14 h-14 bg-accent/10 rounded-2xl flex items-center justify-center">
              <Heart className="w-7 h-7 text-accent" />
            </div>
          </motion.div>
        </div>

        <h1 className="font-display text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
          Discover Your
          <span className="block bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
            Personality Type
          </span>
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-lg mx-auto leading-relaxed">
          Uncover insights about yourself through our thoughtfully crafted personality assessment. Just 5 questions to reveal your unique traits.
        </p>

        <motion.button
          onClick={onStart}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-10 py-4 bg-gradient-to-r from-primary to-accent text-primary-foreground font-semibold text-lg rounded-full shadow-elevated hover:shadow-card transition-shadow"
        >
          Start the Test
        </motion.button>

        <p className="mt-6 text-sm text-muted-foreground">
          Takes only 2 minutes • 100% Free
        </p>
      </motion.div>
    </div>
  );
};

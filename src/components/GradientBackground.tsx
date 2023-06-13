import { motion } from "framer-motion";

const GradientBackground: React.FC = () => {
  return (
    <motion.div
      className="fixed left-0 top-0 z-[-10] h-screen w-screen scale-y-125"
      style={{
        background: "linear-gradient(45deg, #0D151E, #3E4B5B)",
      }}
      animate={{
        background: [
          "linear-gradient(0deg, #0D151E, #3E4B5B)",
          "linear-gradient(90deg, #0D151E, #3E4B5B)",
          "linear-gradient(180deg, #0D151E, #3E4B5B)",
          "linear-gradient(270deg, #0D151E, #3E4B5B)",
          "linear-gradient(360deg, #0D151E, #FF6000)",
        ],
      }}
      transition={{
        duration: 8,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut",
      }}
    />
  );
};

export default GradientBackground;

"use client";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

const stairs = {
  initial: {},
  animate: {
    transition: { staggerChildren: 0.08 }
  },
  exit: {
    transition: { staggerChildren: 0.08, staggerDirection: -1 }
  }
};

const stair = {
  initial: { y: "100%" },
  animate: {
    y: "0%",
    transition: { duration: 0.6, ease: "easeInOut" }
  },
  exit: {
    y: "-100%",
    transition: { duration: 0.6, ease: "easeInOut" }
  }
};

const page = {
  initial: { opacity: 0, scale: 1.2 },
  animate: {
    opacity: 1,
    scale: 1,
    transition: { delay: 0.6 }
  },
  exit: { opacity: 0 }
};

interface StairsProps {
  children: React.ReactNode;
  trigger?: boolean;
}

export default function Stairs({ children, trigger = false }: StairsProps) {
  return (
      <div className="relative">

        {/* Stairs overlay */}
        <motion.div
          className="fixed inset-0 z-[45] flex pointer-events-none"
          variants={stairs}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="w-1/5 bg-black"
              variants={stair}
            />
          ))}
        </motion.div>

        {/* Page */}
        <motion.div
          className="relative z-50"
          variants={page}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          {children}
        </motion.div>

      </div>
  );
}

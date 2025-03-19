"use client";
import { motion } from "framer-motion";
import React from "react";

interface AnimatedSectionProps {
  children: React.ReactNode;
  offset?: number; // Offset for the initial Y position
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({ children, offset = 50 }) => {
  return (
    <motion.section
      initial={{ opacity: 0, y: offset }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }} // Adjust `amount` to control when the animation triggers
      transition={{ duration: 1, ease: "easeIn" }}
      className="w-full"
    >
      {children}
    </motion.section>
  );
};

export default AnimatedSection;

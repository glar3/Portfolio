import React from "react";
import { motion } from "framer-motion";

const Icon = ({ link, className }) => {
  return (
    <motion.a
      href={link}
      animate={{
        scale: 1,
        opacity: 1,
        transition: { duration: 0.6 },
      }}
      initial={{ scale: 0, opacity: 0 }}
    >
      <i className={className}></i>
    </motion.a>
  );
};

export default Icon;

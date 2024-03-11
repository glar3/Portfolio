import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "./Portfolio.css";

const Project = ({ id, className, link, src, alt, title }) => {
  const { ref, inView } = useInView();

  return (
    <motion.div
      id={id}
      className={className}
      animate={{
        scale: inView ? 1 : 0,
        opacity: inView ? 1 : 0,
        transition: { duration: 0.8 },
      }}
      initial={{ scale: 0, opacity: 0 }}
      ref={ref}
    >
      <a href={link}>
        <img src={src} alt={alt} />
      </a>
      <h2>{title}</h2>
    </motion.div>
  );
};

export default Project;

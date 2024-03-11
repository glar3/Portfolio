import React, { useState, useEffect } from "react";

const TypingEffect = ({ text, time, id }) => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const typingTimer = setTimeout(() => {
      setDisplayText(text.substring(0, currentIndex + 1));
      setCurrentIndex(currentIndex + 1);
    }, time);

    if (currentIndex === text.length) {
      clearTimeout(typingTimer);
    }

    return () => clearTimeout(typingTimer);
  }, [currentIndex, text, time]);

  return <element id={id}>{displayText}</element>;
};

export default TypingEffect;

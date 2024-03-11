import React, { useState, useRef } from "react";
import "./About.css";
import {
  DiCss3,
  DiDatabase,
  DiHtml5,
  DiJsBadge,
  DiReact,
  DiJava,
} from "react-icons/di";
import { TiHtml5 } from "react-icons/ti";

const About = () => {
  const iconSize = "40px";
  const [show, setShow] = useState(false);
  const contentRef = useRef(null);

  const toggleShow = () => {
    setShow(!show);
  };

  return (
    <div id="about" className="about wave2">
      <h1>
        About <span>Me</span>
      </h1>
      <h2 id="green-text">Web Developer</h2>
      <div className="dev">
        <div style={{ width: iconSize, height: iconSize }}>
          <TiHtml5 />
        </div>
        <div style={{ width: iconSize, height: iconSize }}>
          <DiCss3 />
        </div>
        <div style={{ width: iconSize, height: iconSize }}>
          <DiJsBadge />
        </div>
        <div style={{ width: iconSize, height: iconSize }}>
          <DiReact />
        </div>
        <div style={{ width: iconSize, height: iconSize }}>
          <DiJava />
        </div>
        <div style={{ width: iconSize, height: iconSize }}>
          <DiDatabase />
        </div>
      </div>
      <button className="readMore" onClick={toggleShow}>
        {!show ? "Read More" : "Read Less"}
      </button>
      <p
        ref={contentRef}
        className={`additional-content ${show ? "expanded" : ""}`}
      >
        Welcome to my web development journey! It all began in school when I
        took IT as a subject and instantly fell in love. As I was leaving, I
        discovered the world of web development, and the possibilities were
        endless. The ability to be innovative and create personal projects
        fascinated me, driving my decision to pursue a career in web
        development. Despite the relatively short journey, I've encountered and
        overcome challenges, sparking a motivation to learn more. Currently
        skilled in HTML5, CSS, and JavaScript, with a solid foundation in web
        design and responsiveness. Problem-solving is my approach; I tackle
        issues head-on and turn to Google or documentation when needed. The
        dynamic nature of designing and integrating functionality into websites
        is what I find truly exciting. I thrive on projects that pose
        challenges, as they provide valuable learning experiences. While I
        haven't established specific guiding principles yet, I'm eager to learn
        and evolve in this ever-evolving field.
      </p>
    </div>
  );
};

export default About;

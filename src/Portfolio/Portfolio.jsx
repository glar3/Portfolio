import React from "react";
import "./Portfolio.css";
import {
  PortfolioImage,
  WeatherImage,
  ToDoListImage,
  RandomQuoteGeneratorImage,
  BMICalculatorImage,
  PianoStoreImage,
} from "./imports.js";
import Project from "./Project.jsx";

const Portfolio = () => {
  return (
    <div id="portfolio" className="portfolio wave3">
      <h1>
        Latest <span>Projects</span>
      </h1>
      <div className="projects">
        <Project
          id="portfolio"
          className="p1"
          link="https://glar3.github.io"
          src={PortfolioImage}
          alt="Portfolio"
          title="Portfolio"
        />
        <Project
          id="weatherApp"
          className="p2"
          link="https://glar3.github.io/Weather-Dashboard/"
          src={WeatherImage}
          alt="Weather"
          title="Weather"
        />
        <Project
          id="toDoList"
          className="p3"
          link="https://glar3.github.io/To-Do-List/"
          src={ToDoListImage}
          alt="To Do List"
          title="To Do List"
        />
        <Project
          id="quoteQuoteGenerator"
          className="p4"
          link="https://glar3.github.io/Random-Quote-Generator/"
          src={RandomQuoteGeneratorImage}
          alt="Random Quote Generator"
          title="Random Quote Generator"
        />
        <Project
          id="BMI"
          className="p5"
          link="https://glar3.github.io/BMI-Calculator/"
          src={BMICalculatorImage}
          alt="BMI"
          title="BMI Calculator"
        />
        <Project
          id="piano"
          className="p6"
          link="https://glar3.github.io/Product-Landing-Page/"
          src={PianoStoreImage}
          alt="Piano"
          title="Piano Store"
        />
      </div>
    </div>
  );
};

export default Portfolio;

import React from "react";
import "./Home.css";
import TypingEffect from "./TypingEffect";

const Home = () => {
  return (
    <div id="home" className="home wave">
      <div className="info">
        <h2>
          <TypingEffect text="Hello, It's Me" time={100} />
        </h2>
        <h1>
          <TypingEffect text="Keegan" time={200} />
        </h1>
        <h2>
          And I'm a{" "}
          <span>
            <TypingEffect text="Web Developer" time={125} />
          </span>
        </h2>
        <p>
          <TypingEffect
            text="With an intense love for coding, I am driven to create impactful solutions that resonate with users."
            time={15}
          />
        </p>
        <ul className="icons">
          <a href="https://www.linkedin.com/in/keegan-boshoff-dev">
            <i className="fa-brands fa-linkedin"></i>
          </a>
          <a href="https://github.com/glar3">
            <i className="fa-brands fa-square-github"></i>
          </a>
        </ul>
        {/* <button className="cv">Download CV</button> */}
      </div>

      <div className="picture"></div>
    </div>
  );
};

export default Home;

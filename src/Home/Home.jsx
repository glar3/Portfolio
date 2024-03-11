import React from "react";
import "./Home.css";
import TypingEffect from "./TypingEffect";

import Icon from "./Icon";

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
          <TypingEffect
            text={"And I'm a Web Developer"}
            time={50}
            id="green-text"
          />
        </h2>
        <p>
          <TypingEffect
            text="With an intense love for coding, I am driven to create impactful solutions that resonate with users."
            time={15}
          />
        </p>
        <ul className="icons">
          <Icon
            className="fa-brands fa-linkedin"
            link="https://www.linkedin.com/in/keegan-boshoff-dev"
          />
          <Icon
            className="fa-brands fa-square-github"
            link="https://github.com/glar3"
          />
        </ul>
        {/* <button className="cv">Download CV</button> */}
      </div>

      <div className="picture"></div>
    </div>
  );
};

export default Home;

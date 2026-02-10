import { Link } from "react-router-dom";
import { useState } from "react";
import "./About.css";
import bioImage from "./assets/bioImage.jpg";

function About() {
  const [activeWords, setActiveWords] = useState(new Set());
  const activateWord = (word: string) => {
    setActiveWords((prev) => {
      const next = new Set(prev);
      next.add(word);
      return next;
    });
  };

  return (
    <div className="container">
      <div className="title">
        <Link to="/home">
          <h1>Zaara Khan</h1>
        </Link>
      </div>
      <div className="about">
        <div className="image">
          <img src={bioImage}></img>
        </div>
        <div className="text">
          {" "}
          <br />
          <div className="quote">
            {" "}
            <h2>
              <span
                className={`icon-link ${
                  activeWords.has("quote") ? "active" : ""
                }`}
                onMouseEnter={() => activateWord("quote")}
                onFocus={() => activateWord("quote")}
              >
                “Who is to say that pleasure is useless?”
              </span>
            </h2>
            <p>Charles Eames</p>
          </div>
          <br /> <br />
          <p>
            Zaara Khan is a{" "}
            <span
              className={`icon-link ${
                activeWords.has("designer") ? "active" : ""
              }`}
              onMouseEnter={() => activateWord("designer")}
              onFocus={() => activateWord("designer")}
            >
              designer
            </span>{" "}
            and{" "}
            <span
              className={`icon-link ${
                activeWords.has("engineer") ? "active" : ""
              }`}
              onMouseEnter={() => activateWord("engineer")}
              onFocus={() => activateWord("engineer")}
            >
              software engineer
            </span>{" "}
            specializing in accessible, well-designed frontend interfaces. She
            believes form follows function, while leaving room for delight.{" "}
            <br /> <br />
            Zaara is currently working on freelance UX design projects.
            Previously, she worked as a{" "}
            <span
              className={`icon-link ${
                activeWords.has("frontend") ? "active" : ""
              }`}
              onMouseEnter={() => activateWord("frontend")}
              onFocus={() => activateWord("frontend")}
            >
              frontend engineer
            </span>{" "}
            at Simplr.AI, now{" "}
            <span
              className={`icon-link ${
                activeWords.has("asurion") ? "active" : ""
              }`}
              onMouseEnter={() => activateWord("asurion")}
              onFocus={() => activateWord("asurion")}
            >
              Asurion
            </span>
            , building customer service software. She holds a B.S. in{" "}
            <span
              className={`icon-link ${
                activeWords.has("cogsci") ? "active" : ""
              }`}
              onMouseEnter={() => activateWord("cogsci")}
              onFocus={() => activateWord("cogsci")}
            >
              Cognitive Science
            </span>{" "}
            from UC San Diego. She is inspired by modernist architecture, small
            websites, and unique color combinations. <br /> <br />
            Zaara lives in{" "}
            <span
              className={`icon-link ${activeWords.has("sf") ? "active" : ""}`}
              onMouseEnter={() => activateWord("sf")}
              onFocus={() => activateWord("sf")}
            >
              San Francisco
            </span>
            , California, where she spends her spare time at the pottery studio,
            volunteering, or drawing at a local park. She is open to creative
            new opportunities, especially those prioritizing{" "}
            <span
              className={`icon-link ${
                activeWords.has("positive") ? "active" : ""
              }`}
              onMouseEnter={() => activateWord("positive")}
              onFocus={() => activateWord("positive")}
            >
              positive social impact.
            </span>{" "}
            You can reach her at{" "}
            <a
              href="mailto:zaarakay21@gmail.com"
              className={`icon-link ${
                activeWords.has("email") ? "active" : ""
              }`}
              onMouseEnter={() => activateWord("email")}
              onFocus={() => activateWord("email")}
            >
              zaarakay21@gmail.com
            </a>{" "}
            or on{" "}
            <a
              href="https://www.linkedin.com/in/zaarak/"
              target="_blank"
              className={`icon-link ${
                activeWords.has("linkedin") ? "active" : ""
              }`}
              onMouseEnter={() => activateWord("linkedin")}
              onFocus={() => activateWord("linkedin")}
            >
              LinkedIn
            </a>
            .
          </p>
          <br />
          <br />
          <br />
        </div>

        {/* <div className="footer">
          {" "}
          This website was designed and coded by Zaara Khan with React, CSS,
          HTML, and much love.
          <a
            href="https://www.flaticon.com/free-icons/application"
            title="application icons"
          >
            {" "}
            Icons by smashingstocks - Flaticon.
          </a>{" "}
          © 2026
        </div> */}
      </div>
      <div className="back">
        <a href="/home">
          <div className="backIcon"></div>
        </a>
      </div>
    </div>
  );
}

export default About;

import { Link } from "react-router-dom";
import backIcon from "./assets/back.svg";
import "./About.css";

function About() {
  return (
    <div className="container">
      <div className="title">
        <Link to="/home">
          <h1>Zaara Khan</h1>
        </Link>
      </div>
      <div className="about info">
        <br />
        <div className="quote">
          {" "}
          <h2>“Who is to say that pleasure is useless?”</h2>
          <p>Charles Eames</p>
        </div>
        <br /> <br />
        <p>
          Zaara Khan is a designer and software engineer specializing in
          accessible, well-designed frontend interfaces. She believes form
          follows function, while leaving room for delight. <br /> <br />
          Zaara is currently working on freelance UX design projects.
          Previously, she worked as a frontend engineer at Simplr.AI, now
          Asurion, building customer service software. She holds a B.S. in
          Cognitive Science from UC San Diego. She is inspired by modernist
          architecture, small websites, and unique color combinations. <br />{" "}
          <br />
          Zaara lives in San Francisco, California, where she spends her spare
          time at the pottery studio, volunteering, or drawing at a local park.
          She is open to creative new opportunities, especially those
          prioritizing positive social impact. You can reach her at{" "}
          <a href="mailto:zaarakay21@gmail.com">zaarakay21@gmail.com</a> or on{" "}
          <a href="https://www.linkedin.com/in/zaarak/" target="_blank">
            LinkedIn
          </a>
          .
        </p>
        <br />
        <br />
        <br />
        <div className="back">
          <a href="/home">
            <div className="backIcon"></div>
          </a>
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
    </div>
  );
}

export default About;

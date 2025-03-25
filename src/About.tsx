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
        <p>
          My name is Zaara Khan. I’m a software engineer specializing in
          accessible, well-design frontend interfaces. I believe form follows
          function, while leaving room for delight. As Charles Eames put it,
          “Who is to say that pleasure is useless?” <br /> <br />
          I’m inspired by modernist design, small websites, and unique color
          combinations. I live in beautiful San Francisco, where I spend my
          spare time at the pottery studio. You can reach me at{" "}
          <a href="mailto:zaarakay21@gmail.com">zaarakay21@gmail.com</a>. <br />
          <br />
          Most recently, frontend engineering @{" "}
          <a href="https://www.asurion.com/" target="_blank">
            Asurion
          </a>
          . Open to creative new opportunities.
        </p>
        <br />
        <br />
        <br />
        <div className="back">
          <Link to="/home">
            <img src={backIcon} className="back"></img>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default About;

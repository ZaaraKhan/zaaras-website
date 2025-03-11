import { Link } from "react-router-dom";
import "./About.css";

function About() {
  return (
    <>
      <div className="container">
        <Link to="/home" className="title">
          <h1>Zaara Khan</h1>
        </Link>
        <div className="about info">
          <p>
            My name is Zaara Khan. I’m a software engineer specializing in
            accessible, well-design frontend interfaces. I believe form follows
            function, while leaving room for delight. As Charles Eames put it,
            “Who is to say that pleasure is useless?” <br />
            I’m inspired by modernist design, small websites, and unique color
            combinations. I live in beautiful San Francisco, where I spend my
            spare time at the pottery studio. You can reach me at{" "}
            <a href="mailto:zaarakay21@gmail.com">zaarakay21@gmail.com</a>.{" "}
            <br />
            <br />
            Most recently, frontend engineering @{" "}
            <a href="https://www.asurion.com/" target="_blank">
              Asurion
            </a>
            . Open to creative new opportunities.
          </p>
        </div>
      </div>
    </>
  );
}

export default About;

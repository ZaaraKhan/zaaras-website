import { Link } from "react-router-dom";
import "./About.css";

function About() {
  return (
    <>
      <div className="container">
        <Link to="/home" className="title">
          <h1>Zaara Khan</h1>
        </Link>
        <div className="info">
          <p>
            Hello, I'm a software engineer (allegedly) who's based in the city
            of San Francisco.
          </p>
        </div>
      </div>
    </>
  );
}

export default About;

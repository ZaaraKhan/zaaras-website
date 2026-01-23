import { resumeIcon, aboutIcon, projectsIcon } from "./assets";
import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <div className="container">
      <Link to="/home" className="title">
        <h1>Zaara Khan</h1>
      </Link>
      <div className="navbar">
        <a
          href="https://docs.google.com/document/d/1Het0_lVxY57FvVsv1INT7omf7sbSVI9V/edit?usp=sharing&ouid=101334788746849539132&rtpof=true&sd=true"
          target="_blank"
          className="item"
        >
          <img src={resumeIcon} alt="Resumé" className="Icon" />
          Resumé
        </a>

        <Link to="/about" className="item">
          <img src={aboutIcon} alt="About" className="Icon" />
          About
        </Link>

        {/* <Link to="/projects" className="item">
          <img src={projectsIcon} alt="Projects" className="Icon" />
          Projects
        </Link> */}
      </div>
      <div className="footer">
        {" "}
        This website was designed and coded by Zaara Khan with React, CSS, HTML,
        and much love. © 2026
      </div>
    </div>
  );
}

export default Home;

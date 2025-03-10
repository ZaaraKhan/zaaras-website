import { resumeLogo, aboutLogo, projectsLogo } from "./assets";
import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <div className="container">
      <h1>Zaara Khan</h1>
      <div className="navbar">
        <a
          href="https://docs.google.com/document/d/1Het0_lVxY57FvVsv1INT7omf7sbSVI9V/edit?usp=sharing&ouid=101334788746849539132&rtpof=true&sd=true"
          target="_blank"
          className="item"
        >
          <img src={resumeLogo} alt="Resumé" className="logo" />
          Resumé
        </a>

        <Link to="/about" className="item">
          <img src={aboutLogo} alt="About" className="logo" />
          About
        </Link>

        <Link to="/projects" className="item">
          <img src={projectsLogo} alt="Projects" className="logo" />
          Projects
        </Link>
      </div>
    </div>
  );
}

export default Home;

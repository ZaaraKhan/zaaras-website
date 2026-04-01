import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <div className="home container">
      <Link to="/home" className="title">
        <h1>Zaara Khan</h1>
      </Link>
      <div className="navbar">
        <a
          href="https://docs.google.com/document/d/1Het0_lVxY57FvVsv1INT7omf7sbSVI9V/edit?usp=sharing&ouid=101334788746849539132&rtpof=true&sd=true"
          target="_blank"
          className="item"
        >
          <div className="resumeIcon" />
          Resumé
        </a>

        <Link to="/projects" className="item">
          <div className="projectsIcon" />
          Projects
        </Link>

        <Link to="/about" className="item">
          <div className="aboutIcon" />
          About
        </Link>
      </div>
    </div>
  );
}

export default Home;

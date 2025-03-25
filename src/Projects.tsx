import { Link } from "react-router-dom";
import backIcon from "./assets/back.svg";
import "./Projects.css";

function Projects() {
  return (
    <div className="container">
      <Link to="/home" className="title">
        <h1>Zaara Khan</h1>
      </Link>
      <div className="info">
        <br />
        <a
          href="https://vercel.com/zaaras-projects-3f77e5c8/poetry-app/5cdP2azLFT2g5Vd7biBMaqJzWZK5"
          target="_blank"
          className="project"
        >
          Poetry Generator
        </a>
        <p>
          Made with Google Gemini API to answer the question, what is Modern
          Art?
        </p>
        <a
          href="https://github.com/ZaaraKhan/poetry-app/tree/main"
          target="_blank"
          className="smallLink"
        >
          Link to GitHub repo
        </a>
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
export default Projects;

import { Link } from "react-router-dom";
import "./Projects.css";

function Projects() {
  return (
    <div className="container">
      <Link to="/home" className="title">
        <h1>Zaara Khan</h1>
      </Link>
      <div className="info">
        <p>Poetry Generator made with Google Gemini API</p>

        <a
          href="https://vercel.com/zaaras-projects-3f77e5c8/poetry-app/5cdP2azLFT2g5Vd7biBMaqJzWZK5"
          target="_blank"
        >
          Link to project
        </a>
        <br />
        <a
          href="https://github.com/ZaaraKhan/poetry-app/tree/main"
          target="_blank"
        >
          Link to GitHub repo
        </a>
      </div>
    </div>
  );
}
export default Projects;

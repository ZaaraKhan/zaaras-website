import { Link } from "react-router-dom";
import wallDrawingImage from "./assets/wallDrawingImage.jpg";
import backIcon from "./assets/back.svg";
import "./Projects.css";

function Projects() {
  return (
    <div className="container">
      <Link to="/home" className="title">
        <h1>Zaara Khan</h1>
      </Link>
      <div className="project">
        <div className="project-image">
          <img src={wallDrawingImage}></img>
        </div>
        <div className="project-text">
          <h2>
            <a
              href="https://wall-drawing-273.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Wall Drawing 273
            </a>
          </h2>
          <br />
          <p>
            Inspired by visits to SFMOMA as a child, I created this interactive
            experience that takes you into the world of Conceptual art. Use your
            finger to choose points on the "wall" and create your own version of
            Sol LeWitt's Wall Drawing 273.
          </p>
          <br />
          <p>
            Built with React, TypeScript, and MediaPipe for real-time hand
            tracking. Drawings are saved to Google Cloud Storage via a Node.js
            API deployed on Google Cloud Run.
          </p>
          <a
            href="https://wall-drawing-273.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="link"
          >
            Visit the live demo
          </a>

          <p className="small link">
            {" "}
            <a
              href="https://github.com/ZaaraKhan/wall-drawing-273"
              target="_blank"
              rel="noopener noreferrer"
            >
              FE Repo
            </a>{" "}
            •{" "}
            <a
              href="https://github.com/ZaaraKhan/wall-drawing-api"
              target="_blank"
              rel="noopener noreferrer"
            >
              BE Repo
            </a>
          </p>
        </div>
      </div>
      <div className="back">
        <Link to="/home">
          <img src={backIcon} className="back"></img>
        </Link>
      </div>
    </div>
  );
}
export default Projects;

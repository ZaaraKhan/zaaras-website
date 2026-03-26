import { Link } from "react-router-dom";
import Project from "./Project";
import wallDrawingImage from "./assets/wallDrawingImage.jpg";
import backIcon from "./assets/back.svg";

function Projects() {
  return (
    <div className="container">
      <Link to="/home" className="title">
        <h1>Zaara Khan</h1>
      </Link>
      <Project
        title="Wall Drawing 273"
        link1="https://wall-drawing-273.vercel.app/"
        link2="https://github.com/ZaaraKhan/wall-drawing-273"
        img={wallDrawingImage}
        text={
          <p>
            Inspired by visits to SFMOMA as a child, I created this interactive
            experience that takes you into the world of Conceptual art. Use your
            finger to choose points on the "wall" and create your own version of
            Sol LeWitt's Wall Drawing 273.
            <br />
            Built with React, TypeScript, and MediaPipe for real-time hand
            tracking. Drawings are saved to Google Cloud Storage via a Node.js
            API deployed on Google Cloud Run.
          </p>
        }
      />
      <div className="back">
        <Link to="/home">
          <img src={backIcon} className="back"></img>
        </Link>
      </div>
    </div>
  );
}
export default Projects;

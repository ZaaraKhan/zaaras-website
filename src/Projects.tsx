import { Link } from "react-router-dom";
import "./Projects.css";

function Projects() {
  return (
    <div className="container">
      <Link to="/home" className="title">
        <h1>Zaara Khan</h1>
      </Link>
      <div className="info">
        <p>Under Construction 🚧</p>
      </div>
    </div>
  );
}
export default Projects;

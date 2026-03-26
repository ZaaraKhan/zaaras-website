import "./Project.css";

interface ProjectProps {
  title: string;
  link1: string;
  link2?: string;
  img: string;
  text: React.ReactNode;
}

function Project(props: ProjectProps) {
  return (
    <div className="project">
      <h2>
        <a href={props.link1} target="_blank" rel="noopener noreferrer">
          {props.title}
        </a>
      </h2>
      <div className="project-content">
        <div className="project-image">
          <img src={props.img}></img>
        </div>
        <div className="project-text">
          {props.text}
          <div className="buttons">
            <a
              href={props.link1}
              target="_blank"
              rel="noopener noreferrer"
              className="button"
            >
              Visit
            </a>
            <a
              href={props.link2}
              target="_blank"
              rel="noopener noreferrer"
              className="button"
            >
              Code
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Project;

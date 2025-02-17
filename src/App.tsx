// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import resumeLogo from "./assets/resume.svg";
import aboutLogo from "./assets/about.svg";
import projectsLogo from "./assets/projects.svg";
import "./App.css";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      {/* <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div> */}
      <div>
        <h1>Zaara Khan</h1>
      </div>

      <div className="container">
        <a className="item">
          <img src={resumeLogo} className="logo" />
          Resumé
        </a>

        <a className="item">
          <img src={aboutLogo} className="logo" />
          <a>About</a>
        </a>

        <a className="item">
          <img src={projectsLogo} className="logo" />
          <a>Projects</a>
        </a>
      </div>

      {/* <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </>
  );
}

export default App;

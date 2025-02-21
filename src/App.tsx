import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Projects from "./Projects";

import "./App.css";

function App() {
  return (
    <Router>
      <div className="container">
        <Link to="/home" className="title">
          <h1>Zaara Khan</h1>
        </Link>
        <div className="routes">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;

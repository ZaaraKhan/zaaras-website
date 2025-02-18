import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import About from "./About";

import "./App.css";

function App() {
  return (
    <Router>
      <Link to="/home">
        <h1>Zaara Khan</h1>
      </Link>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route
          path="/projects"
          element={<h2>Projects Page (Coming Soon!)</h2>}
        />
      </Routes>
    </Router>
  );
}

export default App;

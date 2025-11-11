import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Theme from "./components/Theme";
import Collapsible from "./components/Collapsible";

function App() {
  return (
    <Router>
      <div className="App">
        {/* Main Page Buttons (Your App Page) */}
        <div className="menu">
          <h1>Welcome to My App</h1>
          <p>Choose a component:</p>
          <div className="links" >
            <Link to="/theme" className="nav-btn">Go to Theme</Link>
            <Link to="/collapsible" className="nav-btn">Go to Collapsible</Link>
          </div>
        </div>

        {/* Routes */}
        <Routes>
          <Route path="/theme" element={<Theme />} />
          <Route path="/collapsible" element={<Collapsible />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

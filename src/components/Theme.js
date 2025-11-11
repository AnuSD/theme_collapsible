import React, { useState } from "react";
import "./Theme.css";

function Theme() {
  const [theme, setTheme] = useState("light");
  const [color, setColor] = useState("#ff3366"); // crimson
  const [colorName, setColorName] = useState("Crimson");

  // Toggle between light/dark
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  // Cycle through 3 color themes
  const cycleColor = () => {
    if (colorName === "Crimson") {
      setColor("#228B22"); // Field - green
      setColorName("Field");
    } else if (colorName === "Field") {
      setColor("#9370DB"); // Aura - purple
      setColorName("Aura");
    } else {
      setColor("#ff3366"); // back to Crimson
      setColorName("Crimson");
    }
  };

  return (
    <div className="container">
      <div
        className="rectangle"
        style={{
          backgroundColor: theme === "light" ? "#fff" : "#121212",
          color: theme === "light" ? "#000" : "#fff",
          transition: "all 0.3s ease",
        }}
      >
        <div>
          <p className="title">Prototype</p>
          <p className="subtitle">Theme and Mode Changer</p>
        </div>

        <p className="description">
          Build a responsive interface that allows users to switch between predefined color
          themes and light/dark modes. All UI components dynamically and elegantly adopt their
          appearance based on the active theme and mode.
        </p>

        <div
          className="main-rectangle"
          style={{
            backgroundColor: theme === "light" ? "#F2E6FF" : "#0B1A36",
            transition: "all 0.4s ease",
          }}
        >
          <div className="left">
            <div className="three-cut-box">
              <div
                className="left-square"
                style={{
                  backgroundColor: theme === "light" ? "#ffa3e3" : "#2A2152",
                  borderColor: color,
                }}
              ></div>
              <div className="rightsquare">
                <div
                  className="topright"
                  style={{
                    backgroundColor: theme === "light" ? "#FF5A91" : "#3E2B64",
                    borderColor: color,
                  }}
                ></div>
                <div
                  className="bottomright"
                  style={{
                    backgroundColor: theme === "light" ? "#FF2D55" : "#5A3D7E",
                    borderColor: color,
                  }}
                ></div>
              </div>
            </div>
          </div>

          <div className="right">
            <p>Sample Testing</p>
            <div className="vertical-buttons">
              <button
                onClick={toggleTheme}
                style={{
                  backgroundColor: color,
                  color: theme === "light" ? "#fff" : "#000",
                }}
              >
                {theme === "light" ? "Light Mode" : "Dark Mode"}
              </button>

              <button
                onClick={cycleColor}
                style={{
                  backgroundColor: color,
                  color: "#fff",
                }}
              >
                {colorName}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Theme;

import React, { useState } from "react";
import "./Collapsible.css";

function Collapsiblecompo() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => setIsOpen(!isOpen);

  const cardData = [
    { id: 1, title: "Someone", description: "Lorem ipsum", showDiamond: false, showSquare: false },
    { id: 2, title: "Someone else", description: "Lorem ipsum", showDiamond: false, showSquare: true },
    { id: 3, title: "Who else", description: "@Someone else Lorem Indeed!", showDiamond: true, showSquare: false },
    { id: 4, title: "No one", description: "Cool", showDiamond: true, showSquare: true },
  ];

  return (
    <div className="collapse-wrapper">
      <div className="card">
        <div className="first"></div>
        <div className="content">
          <h2 className="card-title">Cool guy</h2>
          <p className="description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam urna orci,
            blandit eu ante nec, sodales vehicula nisi. Mauris vel nibh imperdiet,
            tempus lectus ac, faucibus quam.
          </p>

          <div className="bottom-row">
            <div className="shapes">
              <div className="shape-box"><div className="diamond"></div></div>
              <div className="shape-box"><div className="square"></div></div>
            </div>
            <button className="toggle-btn" onClick={toggleCollapse}>
              {isOpen ? "Close" : "Open"}
            </button>
          </div>

          {/* Collapsible Section */}
          <div className={`inner-collapse ${isOpen ? "open" : ""}`}>
            {cardData.map((card, index) => (
              <div key={card.id} className={`subcard ${isOpen ? "fade-in" : "fade-out"}`} style={{ animationDelay: `${index * 0.15}s` }}>
                <hr className="divider" />
                <div className="first"></div>
                <div className="sub-content">
                  <h3 className="sub-title">{card.title}</h3>
                  <p className="sub-description">{card.description}</p>

                  {(card.showDiamond || card.showSquare) && (
                    <div className="bottom-row">
                      <div className="shapes">
                        {card.showDiamond && <div className="shape-box"><div className="diamond"></div></div>}
                        {card.showSquare && <div className="shape-box"><div className="square"></div></div>}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Collapsiblecompo;

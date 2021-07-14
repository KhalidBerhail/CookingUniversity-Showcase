/**
 * Class component that renders a smaller card that displays meals info
 */
import "../componentsStyle.css";
import React from "react";
import pfp from "../assets/chef.jpg";

class SmallCard extends React.Component {
  render() {
    return (
      <div className="scard-container">
        <div className="scard-content">
          <div className="scard-title">
            <p className="scard-p">
              word1 word worddsafs word fsfg wor fanklgn wpo
            </p>
          </div>

          <div className="scard-author-info">
            <div className="scard-pfp">
              <img className="img-pfp" alt="img" src={pfp} />
            </div>
            <p className="scard-author">Gordan Ramezi</p>
            <p className="scard-expert">experties</p>
          </div>
          <div className="scard-meal-info">
            <button className="scard-meal-time">15 min</button>
            <button className="scard-meal-level">Easy</button>
            <button className="scard-meal-rating">5 stars</button>
          </div>
        </div>
      </div>
    );
  }
}

export default SmallCard;

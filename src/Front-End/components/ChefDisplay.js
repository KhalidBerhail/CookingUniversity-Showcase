/*
 * Custom component that displays a recommended chef's info
 */

import "../componentsStyle.css";
import React from "react";
import pfp from "../assets/chef.jpg";

class ChefDisplay extends React.Component {
  render() {
    return (
      <div className="chefDisplay">
        <div className="flexContainer">
          <div className="picHolder">
            <img className="pic" alt="img" src={pfp} />
          </div>
          <p className="displayTitle">Gordan Ramezi</p>
        </div>
        <p className="displayText">Chef de ...</p>
      </div>
    );
  }
}

export default ChefDisplay;

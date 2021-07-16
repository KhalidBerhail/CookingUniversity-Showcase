/*
 * Custom component that displays a recommended chef's info
 */

import "../componentsStyle.css";
import React from "react";
import pfp from "../assets/chef.jpg";

class ChefDisplay extends React.Component {

  constructor(props){
    super(props);

    this.state={
      id: this.props.key,
      pfpPath: this.props.pfp,
      chefName: this.props.name,
      specialty:this. props.specialty,
    };
  }

  render() {
    return (
      <div className="chef-display">
        <div className="chef-pic-section">
          <div className="pic-container">
          <img className="chef-pfp" alt="img" src={this.state.pfpPath} />
          </div>
        </div>

        <div className="chef-info-section">
          <div className="chef-info-name">
          <p className="display-title">{this.state.chefName}</p>
          </div>
          <div className="chef-info-specialty">
          <p className="display-text">{this.state.specialty}</p>
          </div>
        </div>
        
      </div>
    );
  }
}

export default ChefDisplay;

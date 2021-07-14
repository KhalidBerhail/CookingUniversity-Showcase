/**
 * A component that represents the first section of the main page
 * containing user greetings
 */

import "../componentsStyle.css";
import React from "react";

class MainPrompt extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "Khalidbe",
    };
  }

  render() {
    return (
      <div className="prompt-container">
        <div className="username-cnt">
          <p className="username">Bienvenu! {this.state.username}</p>
        </div>
        <div className="parag-cnt">
          <p className="prompt-parag">
            Une multitude de cours sont à votre disposition. Cela vous permet de
            trouver ceux qui correspondent au mieux à votre niveau dans le but
            d’épater et, de régaler les papilles de votre entourage !
          </p>
        </div>
      </div>
    );
  }
}

export default MainPrompt;

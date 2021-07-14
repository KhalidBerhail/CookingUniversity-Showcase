/**
 *
 * Class component to display a meals info
 * */

import "../componentsStyle.css";
import React from "react";
import pfp from "../assets/chef.jpg";

class MealDisplay extends React.Component {
  render() {
    return (
      <div class="card-container">
        <div class="card u-clearfix">
          <div class="card-body">
            <img alt="" class="profile-meal" src={pfp}></img>

            <span class="card-author subtle">John Smith</span>
            <h2 class="card-title">New Brunch Recipe</h2>
            <span class="card-description subtle">
              These last few weeks I have been working hard on a new brunch
              recipe for you all.
            </span>
            <div class="card-more">Read</div>
          </div>
          <img
            src="https://s15.postimg.cc/temvv7u4r/recipe.jpg"
            alt=""
            class="card-media"
          />
        </div>
        <div class="card-shadow"></div>
      </div>
    );
  }
}

export default MealDisplay;

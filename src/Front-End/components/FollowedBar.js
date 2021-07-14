/*
 * Custom sid bar used to display a users followed chefs
 */

import "../componentsStyle.css";
import React from "react";
import pfp from "../assets/chef.jpg";
import rightArrow from "../assets/right-arrow.png";
import leftArrow from "../assets/left-arrow.png";

class FollowedBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      collapsed: true,
    };

    this.collapseSideBar = this.collapseSideBar.bind(this);
  }

  render() {
    return (
      <div className="nav-wrapper">
        <div id="sidebar" className="sidebar">
          <div className="sidebar-header">
            <p className="sidebar-title">Followed Chefs</p>
            <img
              className="sidebar-close"
              onClick={this.collapseSideBar}
              src={this.state.collapsed ? rightArrow : leftArrow}
            ></img>
          </div>
          <ul className="followed-list">
            <li className="followed-item">
              <div className="followed-info">
                <div className="followed-pfp-cnt">
                  <img className="followed-pfp" alt="img" src={pfp} />
                </div>
                <p className="followed-name">Gordan Ramezi</p>
                <p className="followed-expert">experties</p>
              </div>
            </li>
            <li className="followed-item">
              <div className="followed-info">
                <div className="followed-pfp-cnt">
                  <img className="followed-pfp" alt="img" src={pfp} />
                </div>
                <p className="followed-name">Gordan Ramezi</p>
                <p className="followed-expert">experties</p>
              </div>
            </li>
            <li className="followed-item">
              <div className="followed-info">
                <div className="followed-pfp-cnt">
                  <img className="followed-pfp" alt="img" src={pfp} />
                </div>
                <p className="followed-name">Gordan Ramezi</p>
                <p className="followed-expert">experties</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    );
  }

  //Function that opens or collapses the side bar on click
  collapseSideBar() {
    if (this.state.collapsed) {
        document.getElementById("sidebar").style.width = "200px";
        document.getElementById("page-content").style.marginLeft = "200px";
        document.getElementsByClassName("sidebar-close")[0].style.marginLeft = "50px";
        
    } else {
        document.getElementById("sidebar").style.width = "0px";
        document.getElementsByClassName("sidebar-close")[0].style.marginLeft = "10px";
        document.getElementById("page-content").style.marginLeft = "50px";
    }
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }
}

export default FollowedBar;

/**
 * Class component that renders a smaller card that displays meals info
 */
import "../componentsStyle.css";
import React from "react";

class SmallCard extends React.Component {

  constructor(props){
    super(props);

    this.state={
      mealId: this.props.key,
      mealThumb: this.props.mealThumb,
      title: this.props.mealTitle,
      categorie: this.props.mealCategorie,
      chef: this.props.chef
    };
  }


  render() {
    return (
      <div className="scard-container" style={{backgroundImage: `linear-gradient(rgba(85, 82, 82, 0.5), rgba(0, 0, 0, 0.5)),url("`+this.state.mealThumb+`")`}}>
        <div className="scard-content">
          <div className="scard-title">
            <p className="scard-p">
              {this.state.title}
            </p>
          </div>

          <div className="scard-author-info">
            <div className="scard-pfp">
              <img className="img-pfp" alt="img" src={this.state.chef.pfp} />
            </div>
            <p className="scard-author">{this.state.chef.name}</p>
            <p className="scard-expert">{this.state.chef.specialty}</p>
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

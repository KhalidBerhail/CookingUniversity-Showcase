/**
 * Class component that renders a smaller card that displays meals info
 */
import "../componentsStyle.css";
import React from "react";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

class SmallCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      product: this.props.product,
      chef: {},
    };
  }

  componentDidMount() {
    this.setState({
      chef: this.props.chef,
    });
  }

  render() {
    return (
      <div
        className="scard-container"
        style={{
          backgroundImage:
            `linear-gradient(rgba(85, 82, 82, 0.5), rgba(0, 0, 0, 0.5)),url("` +
            this.state.product.thumbnail +
            `")`,
        }}
      >
        <Link to={"/placeOrder/" + this.state.product._id}>
          <div className="scard-top-container">
            <div className="scard-title-section">
              <p className="scard-parag">{this.state.product.title}</p>
            </div>
            <div className="scard-empty-section"></div>
          </div>

          <div className="scard-info-section">
            <div className="scard-pfp-container">
              <img className="scard-pfp" alt="img" src={this.state.chef.pfp} />
            </div>
            <div className="scard-info-container">
              <p className="scard-info-name">{this.state.chef.name}</p>
              <p className="scard-info-spec">{this.state.chef.specialty}</p>
            </div>
          </div>
          <div className="scard-buttons-section">
            <div className="scard-buttons-space"></div>
            <div className="scard-buttons-left">
              <button className="scard-time">
                {this.state.product.duration} min
              </button>
              <button className="scard-level">
                {this.state.product.level}
              </button>
            </div>
            <div className="scard-buttons-right">
              <button className="scard-rating">
                <div className="scard-number">{this.state.product.rating}</div>
                <div className="scard-star-container">
                  <FaStar className="scard-star"></FaStar>
                </div>
              </button>
            </div>
          </div>
        </Link>
      </div>
    );
  }
}

export default SmallCard;

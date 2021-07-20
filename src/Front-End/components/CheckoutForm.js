import "../styling/contact.css";
import React from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";

class CheckoutForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productId: this.props.productId,
      firstName: "",
      lastName: "",
      email: "",
      message: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    axios
      .post("http://127.0.0.1:3001/orders", {
        _productId: this.state.productId,
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        email: this.state.email,
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
    alert("Votre commande sera traité dans les meilleurs délais");
    this.props.history.push("/Home");
    event.preventDefault();
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  render() {
    return (
      <div className="form-container">
        <div className="form-row form-header">
          <h1>Effectuer une commande &nbsp;</h1>
        </div>
        <div className="form-row">
          <form onSubmit={this.handleSubmit}>
            <ul className="form-ul">
              <li className="form-li">
                <div className="divider"></div>
              </li>
              <li className="form-li">
                <p className="form-left">
                  <label className="form-label" htmlFor="first_name">
                    Prénom
                  </label>
                  <input
                    className="form-input"
                    type="text"
                    name="firstName"
                    placeholder="John"
                    onChange={this.handleChange}
                  />
                </p>

                <p className="form-right">
                  <label className="form-label" htmlFor="last_name">
                    Nom
                  </label>
                  <input
                    className="form-input"
                    type="text"
                    name="lastName"
                    placeholder="Smith"
                    onChange={this.handleChange}
                  />
                </p>
              </li>
              <li className="form-li">
                <p className="form-left" style={{ width: "50%" }}>
                  <label className="form-label" htmlFor="email">
                    email <span className="req">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="john.smith@gmail.com"
                    className="form-input"
                    onChange={this.handleChange}
                  />
                </p>
              </li>
              <li className="form-li">
                <div className="divider"></div>
              </li>
              <li className="form-li">
                <label className="form-label form-message" htmlFor="comments">
                  votre message ou question pour le chef
                </label>
                <textarea
                  cols="46"
                  rows="3"
                  type="submit"
                  name="message"
                  onChange={this.handleChange}
                />
              </li>
              <li className="form-li">
                <input
                  className="btn btn-submit"
                  type="submit"
                  value="Submit"
                  onChange={this.handleChange}
                />
              </li>
            </ul>
          </form>
        </div>
      </div>
    );
  }
}

export default withRouter(CheckoutForm);

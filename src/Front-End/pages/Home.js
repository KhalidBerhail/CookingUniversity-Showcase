import SmallCard from "../components/SmallCard";
import MainPrompt from "../components/MainPrompt";
import ChefDisplay from "../components/ChefDisplay";
import chefs from "../waterringAssets/chefs.json";
import Carousel from "../components/Carousel";
import CheckoutForm from "../components/CheckoutForm";
import React from "react";
import axios from "axios";
class Home extends React.Component{
    constructor(){
        super();
        this.state = {
          products : []
        }
      }
    
      componentDidMount(){
        axios.get('http://127.0.0.1:3001/products')
        .then(response => {
          this.setState({
            products: response.data
          });
          console.log(this.state.products[0]);
        }) .catch(error => {
          console.log(error);
        });
      }
      render(){
        return (
          
            <>
            <div id="page-content">
              <MainPrompt />
              <div id="search-area"></div>
      
              <div id="recommended-courses">
                <p className="recommended-title">Cours recommendées</p>
                <div id="carousel-container">
                  <Carousel></Carousel>
                </div>
              </div>
      
              <div id="recommended-chefs">
                <p className="recommended-title">Chefs recommendées</p>
                <div id="chef-group">
                  {chefs.map((chef) => (
                    <ChefDisplay
                    key={chef.id}
                    pfp={chef.pfp}
                    name={chef.name}
                    specialty={chef.specialty}
                    />
                  ))}
                </div>
              </div>
      
              <div id="Top-courses">
                <p className="recommended-title">Top courses</p>
                <div id="scard-group">
      
                  {this.state.products.map((product,index) => (
                    <SmallCard
                      key={index}
                      product = {product}
                      chef = {product.chef}
                    />
                    
                  ))} {
                    console.log(this.state.products[0])
                  }
      
                </div>
              </div>
            </div>
          </>
        );
      }
}

export default Home;
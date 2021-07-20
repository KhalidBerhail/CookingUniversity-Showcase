
import React,{Component} from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import "../styling/carousel.css"
import RecHolder from './RecommendedHolder';

export default class CarouselMobile extends Component {
    
    componentDidMount=()=>{
       
    }

  render() {
    return (
        <div className="uk-margin">
<div className="uk-section">
        <OwlCarousel className='owl-carousel owl-theme' loop margin={10} nav>
      <div className="item">
      <RecHolder/>
      
  </div>
     <div className="item">
     <RecHolder/>
      
  </div>
     <div className="item">
     <RecHolder/>
      
  </div>
     <div className="item">
     <RecHolder/>
      
  </div>
     <div className="item">
     <RecHolder/>
      
  </div>
     <div className="item">
     <RecHolder/>
      
  </div>
     <div className="item">
     <RecHolder/>
      
  </div>
     <div className="item">
     <RecHolder/>
      
  </div>
     <div className="item">
     <RecHolder/>
      
  </div>
     <div className="item">
     <RecHolder/>
      
  </div>
  <div className="item">
  <RecHolder/>
      
  </div>
     <div className="item">
     <RecHolder/>
      
  </div>
    </OwlCarousel>
    </div></div>
    );
  }
}
//replace the div in the componenet with item
 class item extends Component {
  render() {
    return (
        <div className="item">
        <div className="uk-card uk-card-primary uk-card-hover uk-card-body uk-light">
            <h3 className="uk-card-title">{this.props.title}</h3>
            <p>{this.props.subtitle}</p>
            <h3>{this.props.text}</h3>
        </div>
        </div>
    );
  }
}

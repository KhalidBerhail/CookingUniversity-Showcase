
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


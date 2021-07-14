
import './App.css';
import "../src/Front-End/componentsStyle.css";
import "../src/Front-End/styling/mediaQueries.css";
import HomeNav from './Front-End/components/HomeNav';
import FollowedBar from './Front-End/components/FollowedBar';
import SmallCard from './Front-End/components/SmallCard';
import MainPrompt from './Front-End/components/MainPrompt';
import ChefDisplay from './Front-End/components/ChefDisplay';

function App() {
  return (
    <div className="App">
      <HomeNav/>
      
      <div id="navbar-container">
        <FollowedBar/>
      </div>

      <div id="page-content"> 
        <MainPrompt/>
        <div id="search-area">

        </div>

        <div id="recommended-courses">
          <p className="recommended-title">Cours recommendées</p>
        </div>

        <div id="recommended-chefs">
          <p className="recommended-title">Chefs recommendées</p>
          <div id="chef-group">
            
              <ChefDisplay className="flex-element"/>
              <ChefDisplay className="flex-element"/>
              <ChefDisplay className="flex-element"/>          
              <ChefDisplay className="flex-element"/>
          </div>
          
        </div>

        <div id="Top-courses">
          <p className="recommended-title">Top courses</p>
          <div id="scard-group">
            <SmallCard/>
            <SmallCard/>
            <SmallCard/>
            <SmallCard/>
          </div>
        </div>

        <div id="unfinished-courses">

        </div>
        
      </div>

      

      
    </div>
  );
}

export default App;

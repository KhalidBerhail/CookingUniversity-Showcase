import "./App.css";
import "../src/Front-End/componentsStyle.css";
import "../src/Front-End/styling/mediaQueries.css";
import HomeNav from "./Front-End/components/HomeNav";
import FollowedBar from "./Front-End/components/FollowedBar";
import SmallCard from "./Front-End/components/SmallCard";
import MainPrompt from "./Front-End/components/MainPrompt";
import ChefDisplay from "./Front-End/components/ChefDisplay";
import courses from "./Front-End/waterringAssets/meals.json";
import chefs from "./Front-End/waterringAssets/chefs.json";

function App() {
  return (
    <div className="App">
      <HomeNav />

      <div id="navbar-container">
        <FollowedBar />
      </div>

      <div id="page-content">
        <MainPrompt />
        <div id="search-area"></div>

        <div id="recommended-courses">
          <p className="recommended-title">Cours recommendées</p>
          <div id="carousel-container"></div>
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

            {courses.map((meal) => (
              <SmallCard
                key={meal.id}
                chef={meal.chef}
                mealThumb={meal.thumbnail}
                mealTitle={meal.title}
              />
            ))}
          </div>
        </div>

        <div id="unfinished-courses"></div>
      </div>
    </div>
  );
}

export default App;

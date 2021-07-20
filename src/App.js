import "./App.css";
import "../src/Front-End/componentsStyle.css";
import "../src/Front-End/styling/mediaQueries.css";
import HomeNav from "./Front-End/components/HomeNav";
import FollowedBar from "./Front-End/components/FollowedBar";
import React from "react";
import Home from "./Front-End/pages/Home";
import PlaceOrder from "./Front-End/pages/placeOrder";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="App">
          <HomeNav />

          <Switch>
            <Route path="/placeOrder/:id">
              <PlaceOrder />
            </Route>
            <Route path="/">
              <div id="navbar-container">
                <FollowedBar />
              </div>
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;

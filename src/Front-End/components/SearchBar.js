import '../componentsStyle.css';
import React from 'react';

class SearchBar extends React.Component {
    render() {
      return <div className="search-container">
          <form className="search-form">
            <div className="search-bar">
                <input className="category-input"></input>
                <input className="chef-input"></input>
                <button className="search-button"></button>
            </div>  
          </form>
      </div>;
    }
  }
  
  export default SearchBar;
import React, { Component } from "react";
import "../style/Category.css";

const categories = ['business', 'general', 'health', 'science', 'sports', 'technology'];

class Category extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <div className = "category">
          <div className = "category-list">
             {categories.map((category,index) => (
               <div 
               key={index} 
               className="category-element" 
               onClick={() => this.props.categoryClicked(category, '')}>
               {category}
               </div>
              ))}
        </div>
      </div>
    );
  }
}

export default Category;

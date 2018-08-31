import React, { Component } from "react";
import "../style/Category.css";

const categories = ['business', 'general', 'health', 'science', 'sports', 'technology'];

class Category extends Component {
  render() {
    return (
      <div className = "category">
          <div className = "category-list">
             {categories.map((category,index) => (
               <div 
               key={index} 
               className={`category-element category-element-${index}`} 
               onClick={() => this.changeCategory(category, this.props.country)}>
               {category}
               </div>
              ))}
        </div>
      </div>
    );
  }

  changeCategory(category, country){
    this.props.categoryClicked('', '', '');
    this.props.categoryClicked(category, '', country);
  }
}

export default Category;

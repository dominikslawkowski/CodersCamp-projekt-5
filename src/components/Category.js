import React, { Component } from "react";
import "../styles/Category.css";

class Category extends Component {
  constructor(props) {
    super(props);
  }
  
  
  render() {
    return (
      <div className = "category">
          <div className = "category-list">
        {this.props.categories.map((category,index) => (
          <div key={index} className="category-element" onClick={() => this.props.categoryClicked(category, '')}>{category}</div>
        ))}
        </div>
      </div>
    );
  }
}

export default Category;

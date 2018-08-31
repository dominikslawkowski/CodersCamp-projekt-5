import React, { Component } from "react";
import {categoryColors, categories} from "../consts";
import {
    Container,
    CategoryList,
    CategoryElement
   } from './style';

class Category extends Component {
  render() {
    return (
      <Container>
          <CategoryList>
             {categories.map((category,i) => (
               <CategoryElement 
               key={i}
               color={categoryColors[i]}
               onClick={() => this.changeCategory(category, this.props.country)}>
               {category}
               </CategoryElement>
              ))}
          </CategoryList>
      </Container>
    );
  }

  changeCategory(category, country){
    this.props.categoryClicked('', '', '');
    this.props.categoryClicked(category, '', country);
  }
}

export default Category;

import React, { Component } from 'react';
import '../style/News.css'
const News = ({news}) => {
  

  const imgURL = news.urlToImage;
  const description = news.description;
  const title = news.title;
  const urlToPage = news.url;
  const date = news.publishedAt;

  return( 
    <div onClick={() => {window.open(urlToPage, "_blank");}} className="Tile">
      <img className="imgNews" src={imgURL} />      
      <div className="titleNews">{title}</div>
      <div className="descriptionNews">{description}</div>      
    </div>
    );
};

export default News;

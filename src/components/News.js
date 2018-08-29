import React from 'react';
import '../style/News.css'
const News = ({news}) => {
  
  const imgURL = news.urlToImage;
  const description = news.description;
  const title = news.title;
  const urlToPage = news.url;

  return( 
    !imgURL? <div></div>
    :
    <div onClick={() => {window.open(urlToPage, "_blank");}} className="Tile">
      <img className="imgNews" alt="" src={imgURL} height="100%" width="100%" />      
      <div className="titleNews">{title}</div>
      <div className="descriptionNews">{description}</div>      
    </div>
    );
};

export default News;
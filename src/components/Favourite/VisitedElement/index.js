import React from 'react';
import Wrapper from './style';
const VisitedNews = ({news}) => {
  
  const imgURL = news.urlToImage;
  const description = news.description;
  const title = news.title;
  const urlToPage = news.url;

  return( 
    !imgURL? <div></div>
    :
    <Wrapper onClick={() => {onclickhandler(urlToPage)}} className="Tile">
      <img className="imgNews" alt="" src={imgURL} height="100%" width="100%" />      
      <div className="titleNews">{title}</div>
      <div className="descriptionNews">{description}</div>      
    </Wrapper>
    );
};
var onclickhandler = (urlToPage) => {
  window.open(urlToPage, "_blank");
}
export default VisitedNews;

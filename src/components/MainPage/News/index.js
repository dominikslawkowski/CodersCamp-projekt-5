import React from 'react';
import Wrapper from './style';
const News = ({news}) => {
  
  const imgURL = news.urlToImage;
  const description = news.description;
  const title = news.title;
  const urlToPage = news.url;

  return( 
    !imgURL? <div></div>
    :
    <Wrapper onClick={() => {onclickhandler(urlToPage, news)}} className="Tile">
      <img className="imgNews" alt="" src={imgURL} height="100%" width="100%" />      
      <div className="titleNews">{title}</div>
      <div className="descriptionNews">{description}</div>      
    </Wrapper>
    );
};
var onclickhandler = (urlToPage, news) => {
  window.open(urlToPage, "_blank");
    
  var currentCookies = JSON.parse(localStorage.getItem('visited'))!==null?
  (JSON.parse(localStorage.getItem('visited'))).concat([news])
  :
  [news];

  var newArr;
  currentCookies.map((item, idx)=>{ 
    newArr = currentCookies.filter((el, id) => {
      if(!(item['url']===el['url']&&idx!==id)){
        return el;
      }
    })
  })
  
  if (newArr.length>20){
    newArr.shift();
  }

  let newCookies = JSON.stringify(newArr);
  localStorage.setItem('visited', newCookies);
  
}
export default News;

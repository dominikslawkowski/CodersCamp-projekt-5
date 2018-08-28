import React from 'react';
import News from './News';

const styleForContainerOfNews = {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    width: '100%',
    margin: '0 auto',
    overflow: 'hidden',
}

class NewsList extends React.Component {
    constructor(props){
        super(props);
        this.tabOfElementsToDisplay=[];
    }
    nothingToDisplay = (conditions, terms) => {
        this.tabOfElementsToDisplay = [];
        const nothing = 
            <div className="loading">
                <span className="dot dot1"></span>
                <span className="dot dot2"></span>
                <span className="dot dot3"></span>
            </div>
        this.tabOfElementsToDisplay.push(nothing);
    }
    divideNewsBetweenTilts = (arrayOfNewsObjects) => {
        this.tabOfElementsToDisplay = [];
        arrayOfNewsObjects.forEach((newsObject, idxOfNewsObject) => {
            const elementToDisplay = 
                <News key = {idxOfNewsObject}
                news = {newsObject}/>
            this.tabOfElementsToDisplay.push(elementToDisplay);
        })
    }
    render(){
        (this.props.news && this.props.news.length > 1)?
        this.divideNewsBetweenTilts(this.props.news):
        this.nothingToDisplay(this.props.conditions, this.props.terms);

        return(
            <div style={styleForContainerOfNews}>
                {this.tabOfElementsToDisplay}
            </div>
        );
    }
  }
    

export default NewsList;
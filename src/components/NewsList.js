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

export class NewsList extends React.Component{
    constructor(props){
        super(props),
        this.tabOfElementsToDisplay=[];
    }
    nothingToDisplay = (conditions, terms) => {
        this.tabOfElementsToDisplay = [];
        const nothing = 
        <div key="nothing">
            <h3>You have searcherd for </h3> 
            <h2>{conditions} {terms}</h2> 
            <p>Sorry, there is nothing to display
            under such conditions of searching.</p> 
        </div>
        this.tabOfElementsToDisplay.push(nothing);
    }
    divideNewsBetweenTilts = (arrayOfNewsObjects) => {
        this.tabOfElementsToDisplay = [];
        arrayOfNewsObjects.forEach((newsObject, idxOfNewsObject) => {
            const elementToDisplay = <News key = {idxOfNewsObject}
            news = {newsObject}/>
            this.tabOfElementsToDisplay.push(elementToDisplay);
        })
    }
    render(){
        if (this.props.news && this.props.news.length > 1) {
            this.divideNewsBetweenTilts(this.props.news)
        } else {
            this.nothingToDisplay(this.props.conditions, this.props.terms);
        }
        return(
            <div style={styleForContainerOfNews}>
                {this.tabOfElementsToDisplay}
            </div>
        );
    }
  }
    

export default NewsList;
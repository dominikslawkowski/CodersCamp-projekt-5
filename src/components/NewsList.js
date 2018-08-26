import React from 'react';
import News from './News';
const styleForContainerOfNews = {
    display: 'flex',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    width: '100%',
    margin: '0 auto',
    overflow: 'hidden',
}

export class NewsList extends React.Component{
    constructor(props){
        super(props);
        this.tabOfElementsToDisplay = []
    }
    componentWillUpdate(){
        this.tabOfElementsToDisplay=[];
    }
    render(){
        const divideNewsBetweenTilts = (arrayOfNewsObjects) => {
            arrayOfNewsObjects.forEach((newsObject, idxOfNewsObject) => {
                const elementToDisplay = <News key = {idxOfNewsObject} news = {newsObject}/>
                this.tabOfElementsToDisplay.push(elementToDisplay);
            })
        }
        divideNewsBetweenTilts(this.props.news)
        return(
            <div style={styleForContainerOfNews}>
                {this.tabOfElementsToDisplay}
            </div>
        );
    }
}

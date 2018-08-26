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
    render(){
        let tabOfElementsToDisplay = [];
        const divideNewsBetweenTilts = (arrayOfNewsObjects) => {
            arrayOfNewsObjects.forEach((newsObject, idxOfNewsObject) => {
                const elementToDisplay = <News key = {idxOfNewsObject} news = {newsObject}/>
                tabOfElementsToDisplay.push(elementToDisplay);
            })
        }
        if (this.props.news && this.props.news.length > 1) {
            divideNewsBetweenTilts(this.props.news)
        } else if (this.props.news.length===0) {
           tabOfElementsToDisplay=[
            <div key="0">sorry, something went wrong</div>,
           ]
        }
        return(
            <div style={styleForContainerOfNews}>
                {tabOfElementsToDisplay}
            </div>
        );
    }
}

import React from 'react';
import {News} from './News';
const styleForContainerOfNews = {
    display: 'grid',
    width: '90%',
    gridTemplateColumns: 'auto auto auto',
    gridTemplateRows: 'auto'
}
const defaultState = [
    {
        author: 'name',
        title: 'title',
        description: 'lorem?'
    },
    {
        author: 'name',
        title: 'title',
        description: 'lorem?'
    },
    {
        author: 'name',
        title: 'title',
        description: 'lorem?'
    }
]
export class NewsList extends React.Component{
    render(){
        const tabOfElementsToDisplay =[];
        const divideNewsBetweenTilts = (arrayOfNewsObjects) => {
            arrayOfNewsObjects.forEach((newsObject, idxOfNewsObject) => {
                const elementToDisplay = <News key = {idxOfNewsObject} article = {newsObject}/>
                tabOfElementsToDisplay.push(elementToDisplay);
            })
        }
        divideNewsBetweenTilts(this.props.news);
        return(
            <div style={styleForContainerOfNews}>
                {tabOfElementsToDisplay}
            </div>
        );
    }
}

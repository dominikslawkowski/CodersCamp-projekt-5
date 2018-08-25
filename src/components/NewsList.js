import React from 'react';
import {News} from './News';
const styleForContainerOfNews = {
    display: 'grid',
    width: '90%',
    gridTemplateColumns: 'auto auto auto',
    gridTemplateRows: 'auto'
}
export class NewsList extends React.Component{
    constructor(props){
        super(props);
        
    }
    componentWillReceiveProps() {
        const received = this.props.news;
        this.setState({
            news: received
        })
    }
    componentWillMount() {
        const received = this.props.news;
        this.setState({
            news: received
        })
    }
    render(){
        const tabOfElementsToDisplay =[];
        const divideNewsBetweenTilts = (arrayOfNewsObjects) => {
            arrayOfNewsObjects.forEach((newsObject, idxOfNewsObject) => {
                const elementToDisplay = <News key = {idxOfNewsObject} article = {newsObject}/>
                tabOfElementsToDisplay.push(elementToDisplay);
            })
        }
        divideNewsBetweenTilts(this.state.news);
        return(
            <div style={styleForContainerOfNews}>
                {tabOfElementsToDisplay}
            </div>
        );
    }
}

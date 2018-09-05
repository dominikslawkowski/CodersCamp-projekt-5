import React, { Component } from 'react';
import VisitedNews from './../VisitedElement/index'
import {UXinfo} from './style.js';
import {Wrapper} from './style.js';

class VisitedList extends Component {
    constructor(props){
        super(props);
        this.tabOfElementsToDisplay=[];
    }

    nothingToDisplay = (theme) => {
        this.tabOfElementsToDisplay = [];
        const nothing = 
            <div className="loading" key="terms">
                <p className="sorry">Looks like You haven't visited anything yet</p>
            </div>
        this.tabOfElementsToDisplay.push(nothing);
    }
    divideNewsBetweenTilts = (arrayOfNewsObjects) => {
        this.tabOfElementsToDisplay = [];
        arrayOfNewsObjects.forEach((newsObject, idxOfNewsObject) => {
            const elementToDisplay = 
                <VisitedNews key = {idxOfNewsObject}
                news = {newsObject}/>
            this.tabOfElementsToDisplay.push(elementToDisplay);
        })
    }
    render(){
        (this.props.news&&this.props.news.length > 0)?
        this.divideNewsBetweenTilts(this.props.news):
        this.nothingToDisplay(this.props.theme);

        return(
            <Wrapper>
                <UXinfo>Recently visited <span>articles</span>:</UXinfo>
                {this.tabOfElementsToDisplay}
            </Wrapper>     
        );
    }
  }
  
export default VisitedList;
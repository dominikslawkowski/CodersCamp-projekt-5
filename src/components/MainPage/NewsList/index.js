import React, { Component } from 'react';
import News from '../News/index'
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import { newsSearch } from "../../../actions/index";
import {UXinfo} from './style.js';
import {Wrapper} from './style.js';
import {LinkButton} from './style.js';
import {Link} from 'react-router-dom';

class NewsList extends Component {
    constructor(props){
        super(props);
        this.tabOfElementsToDisplay=[];
    }

    nothingToDisplay = (theme) => {
        this.tabOfElementsToDisplay = [];
        const nothing = 
            <div className="loading" key="terms">
                <span className="dot dot1"></span>
                <span className="dot dot2"></span>
                <span className="dot dot3"></span>
                <p className="sorry">Sorry, We couldn't find any news</p>
                <p className="sorry">Probably there is nothing to read about under Your searching conditions
                or server is too busy to answer</p>
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
        (this.props.news&&this.props.news.length > 0)?
        this.divideNewsBetweenTilts(this.props.news):
        this.nothingToDisplay(this.props.theme);

        return(
           
            <Wrapper>
                <UXinfo>You have searched for <span>{this.props.theme}</span></UXinfo>
                <div style={{width: '100%'}}>
                <Link to="/preference">
                    <LinkButton>Recently seen</LinkButton>
                </Link>
                </div>
                {this.tabOfElementsToDisplay}
            </Wrapper>
                    
        );
    }
  }
    
const mapStateToProps = state => ({
    news: state.news,
    theme: state.theme
});

const mapDispatchToProps = dispatch => bindActionCreators({
    newsSearch,
    }, dispatch
);
  
export default connect(mapStateToProps, mapDispatchToProps)(NewsList);


  
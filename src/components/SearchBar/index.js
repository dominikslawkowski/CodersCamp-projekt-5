import React, {Component} from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { newsSearch, setCurrentTheme } from "../../actions/index";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

import Wrapper from './style.js';

import {withRouter} from 'react-router-dom';

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {searchTerm: ''};
    }
    
    render() {
        return (
            <Wrapper>
                <FontAwesomeIcon icon={faSearch} size="1x" color="#9eb3ff"/>
                <input
                placeholder='Search...'
                value={this.state.searchTerm}
                onChange={(event) => {this.onInputChange(event.target.value)}} />
            </Wrapper>
            )
    }

    onInputChange(searchTerm) {
        this.setState({searchTerm});
        this.props.setCurrentTheme(searchTerm);
        if(searchTerm){
            this.props.newsSearch(searchTerm, '', this.props.country);
        }
    }
}

const mapDispatchToProps = dispatch =>
bindActionCreators(
  {
    newsSearch,
    setCurrentTheme
  },
  dispatch
);

export default withRouter(connect(null,mapDispatchToProps)(SearchBar));


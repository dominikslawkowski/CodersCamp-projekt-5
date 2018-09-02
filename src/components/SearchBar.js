import React, {Component} from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { newsSearch } from "../actions/index";

import '../style/SearchBar.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {searchTerm: ''};
    }
   
    render() {
        return (
            <div className='searchBar'>
                <FontAwesomeIcon icon={faSearch} size="1x" color="#9eb3ff"/>
                <input className='searchBarInput'
                placeholder='Search...'
                value={this.state.searchTerm}
                onChange={(event) => {this.onInputChange(event.target.value)}} />
            </div>
            )
    }
    
    onInputChange(searchTerm) {
        this.setState({searchTerm});
        this.props.newsSearch('', '', '');
        this.props.newsSearch(searchTerm, '', this.props.country);
    }
}

  const mapDispatchToProps = dispatch =>
    bindActionCreators(
      {
        newsSearch,
      },
      dispatch
    );
  
  export default connect(null,mapDispatchToProps)(SearchBar);
  
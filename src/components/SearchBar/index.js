import React, {Component} from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

import Wrapper from './style.js';

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
        this.props.onSearchTermChange('', '', '');
        this.props.onSearchTermChange(searchTerm, '', this.props.country);
    }
}

    export default SearchBar;
import React, {Component} from 'react';
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
                <FontAwesomeIcon icon={faSearch} size="2x" color="rgba(255,255,255,0.7)"/>
                <input className='searchBarInput'
                placeholder='Search...'
                value={this.state.searchTerm}
                onChange={(event) => {this.onInputChange(event.target.value)}} />
            </div>
            )
    }
    

    

    onInputChange(searchTerm) {
        this.setState({searchTerm});
        this.props.onSearchTermChange('',searchTerm);
    
    }
}

    export default SearchBar;
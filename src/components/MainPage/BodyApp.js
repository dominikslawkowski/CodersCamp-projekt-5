import React, { Component } from 'react';

import SearchBar from './SearchBar/index';
import Category from './Category/index';
import NewsList from './NewsList/index';
import Footer from './Footer/index';

// import Menu from './components/Menu';


class BodyApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      news: [],
      searchTerm: '',
      savedNews: [],
      country: 'en',
    };
  }

  render() {
    return (
        <div>
            <SearchBar country={this.props.country}/>
            <Category country={this.props.country}/>
            <NewsList conditions={this.props.searchTerm}/>
            {/* <Menu savedNews={this.state.savedNews} /> */}
            <Footer/>
        </div>
    );
  }
}

export default BodyApp
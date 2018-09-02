import React, { Component } from 'react';
import _ from 'lodash';
import Welcome from './components/Welcome/index';
import SearchBar from './components/SearchBar';
import Category from './components/Category/index';
import NewsList from './components/NewsList';
import Footer from './components/Footer/index';
// import Menu from './components/Menu';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: '',
      news: [],
      searchTerm: '',
      savedNews: [],
      country: 'en',
      initial: true
    };
    this.changeState = this.changeState.bind(this);
    this.newsSearch = this.newsSearch.bind(this);
  }

  changeState(){
    this.setState({
      initial: false
    });
  }

  newsSearch(term, search, country) {
    
  }
  
  render() {
    return (
      this.state.initial ? 
      <div className="App"> 
        <Welcome onClickChooseNews={this.newsSearch} changeState={this.changeState} country={this.state.country}/>
      </div>
      :
      <div className="App">
        <SearchBar onSearchTermChange={_.debounce(this.newsSearch, 500)} country={this.state.country}/>
          <Category categoryClicked={this.newsSearch} country={this.state.country}/>
          <NewsList 
            conditions={this.state.searchTerm}
            terms={this.state.theme}/>
          {/* <Menu savedNews={this.state.savedNews} /> */}
        <Footer/>   
      </div>
    );
  }
}

export default App;

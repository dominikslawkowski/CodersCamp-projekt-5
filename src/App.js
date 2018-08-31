import React, { Component } from 'react';
import _ from 'lodash';
import Welcome from './components/Welcome/index';
import SearchBar from './components/SearchBar';
import Category from './components/Category/index';
import NewsList from './components/NewsList';
import Footer from './components/Footer';
// import Menu from './components/Menu';

const API_KEY = 'aabf6ff51a5c42ffaec96e55c6af6297';

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
    })
  }

  newsSearch(term, search, country) {
    const url = `https://newsapi.org/v2/everything?pageSize=50&language=${country}&q=${term}&apiKey=${API_KEY}`;

    fetch(url)
      .then(data => data.json())
      .then(data => this.setState({
        theme: term,
        news: data.articles,
        searchTerm: search
      }));
  }
  
  render() {
    return (
      this.state.initial ? 
      <div className="App"> 
        <Welcome onClickChooseNews={this.newsSearch} changeState={this.changeState} country={this.state.country}/>
      </div>
      :
      <div className="App">
        <SearchBar onSearchTermChange={_.debounce(this.newsSearch,500)} country={this.state.country}/>
          <Category categories={this.state.categories} categoryClicked={this.newsSearch} country={this.state.country}/>
          <NewsList 
            news={this.state.news} 
            conditions={this.state.searchTerm}
            terms={this.state.theme}/>
          {/* <Menu savedNews={this.state.savedNews} /> */}
        <Footer/>   
      </div>
    );
  }
}

export default App;

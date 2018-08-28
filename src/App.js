import React, { Component } from 'react';
import _ from 'lodash';
import Welcome from './components/Welcome';
import SearchBar from './components/SearchBar';
import Category from './components/Category';
import {NewsList} from './components/NewsList';
import {Footer} from './components/Footer';

const API_KEY = 'aabf6ff51a5c42ffaec96e55c6af6297';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      theme: '',
      news: [],
      searchTerm: '',
      initial: true
    };
    this.changeState = this.changeState.bind(this);
    this.newsSearch = this.newsSearch.bind(this);
    this.newsSearch('general', '');
  }

  changeState(){
    this.setState({
      initial: false
    })
  }

  newsSearch(term, search) {
    const url = `https://newsapi.org/v2/top-headlines?pageSize=60&country=us&q=${search}&category=${term}&apiKey=${API_KEY}`;

    fetch(url)
      .then(data => data.json())
      .then(data => this.setState({
        theme: term,
        news: data.articles,
        searchTerm: search
      }))
      .then(() => console.log(this.state.news))
      .then(() => console.log(term))
      .then(() => console.log(search))
  }
  
  render() {
    return (
      this.state.initial ? 
      <div className="App"> 
        <Welcome onClickChooseNews={this.newsSearch} changeState={this.changeState}/>
      </div>
      :
      <div className="App">
        <SearchBar onSearchTermChange={_.debounce(this.newsSearch,500)}/>
          <Category categories={this.state.categories} categoryClicked={this.newsSearch}/>
          <NewsList 
            news={this.state.news} 
            conditions={this.state.searchTerm}
            terms={this.state.theme}/>
        <Footer/>   
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import './App.css';

//importy komponentów
import Welcome from './components/Welcome';
import SearchBar from './components/SearchBar';
import Category from './components/Category';
import NewsList from './components/NewsList';

//Klucz potrzebny do pobrania danych z api o wiadomosciach
const API_KEY = '0cc530dfbcad49d39ee43d21303c2cbc';


class App extends Component {
  
  //ustawienie state dla klasy App - temat wyszukiwanych wiadomosci i tablie z newsami
  constructor(props) {
    super(props);
    this.state = {
      theme: '',
      news: [],
      searchTerm: '',
      categories: ['business', 'general', 'health', 'science', 'sports', 'technology']
    }

    this.newsSearch = this.newsSearch.bind(this)
    this.newsSearch('general', '');
  }

  newsSearch(term, search) {
    fetch(`https://newsapi.org/v2/top-headlines?language=en&q=${search}&category=${term}&apiKey=${API_KEY}`)
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
      <div className="App">
        <SearchBar onSearchTermChange={this.newsSearch}/>
        <Category categories={this.state.categories} categoryClicked={this.newsSearch}/>
      </div>
    );
  }
}

export default App;

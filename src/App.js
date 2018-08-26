import React, { Component } from 'react';
import './App.css';

//importy komponentów
import Welcome from './components/Welcome';
import SearchBar from './components/SearchBar';
import Category from './components/Category';
import {NewsList} from './components/NewsList';
import {Footer} from './components/Footer';

//Klucz potrzebny do pobrania danych z api o wiadomosciach
const API_KEY = 'ed223602c98d443ba7817403c977218d';

class App extends Component {
  
  //ustawienie state dla klasy App - temat wyszukiwanych wiadomosci i tablie z newsami
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
      this.state.initial ? 
      <div className="App"> 
        <Welcome onClickChooseNews={this.newsSearch} changeState={this.changeState}/>
      </div>
      :
      <div className="App">
        <SearchBar onSearchTermChange={this.newsSearch}/>
        <Category categories={this.state.categories} categoryClicked={this.newsSearch}/>
        <NewsList news={this.state.news} conditions={this.state.searchTerm}
        terms={this.state.theme}/>
        <Footer/>   
      </div>
    );
  }
}

export default App;

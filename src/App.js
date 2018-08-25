import React, { Component } from 'react';
import './App.css';

//importy komponentów
import Welcome from './components/Welcome';
import SearchBar from './components/SearchBar';
import Category from './components/Category';
import NewsList from './components/NewsList';
import News from "./components/News";




//Klucz potrzebny do pobrania danych z api o wiadomosciach
const API_KEY = '0cc530dfbcad49d39ee43d21303c2cbc';

class App extends Component {
  
  //ustawienie state dla klasy App - temat wyszukiwanych wiadomosci i tablie z newsami
  constructor(props) {
    super(props);
    this.state = {
      theme: '',
      news: [],


      //do wyrrzucenia element bedzie przekazywany do kafelka w NewsLIst na razie tylko do wglądu

      dupa: {
        source: {
          id: null,
          name: "Njherald.com"
        },
        author: null,
        title: "MGM opens Massachusetts casino with a flourish",
        description:
          "Massachusetts' first resort casino with expansive gambling and entertainment options opened Friday with a Las Vegas-style flourish",
        url: "http://www.njherald.com/article/20180824/AP/308249981",
        urlToImage:
          "http://www.njherald.com/apps/pbcsi.dll/storyimage/NH/20180824/AP/308249981/AR/0/AR-308249981.jpg&MaxW=500",
        publishedAt: "2018-08-25T13:21:53Z"
      },
      searchTerm: ''
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

        {/* te elementy też do wyrzucenia */}
        <News news={this.state.dupa}/>
        <News news={this.state.dupa} />        
      </div>
    );
  }
}

export default App;

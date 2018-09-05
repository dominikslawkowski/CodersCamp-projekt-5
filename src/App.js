import React, { Component } from 'react';
import Welcome from './components/Welcome/index';
import BodyApp from './components/MainPage/BodyApp';
import Prefer from './components/Favourite/Prefer';
// import Menu from './components/Menu';

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

class App extends Component {
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
      <Router>
        <div className="App">
          <Switch>
            <Route path="/newslist" render={(props)=><BodyApp country={this.state.country} conditions={this.state.searchTerm}/>}/>
            <Route path="/preference" render={(props)=><Prefer country={this.state.country} conditions={this.state.searchTerm}/>}/>
            <Route path="/" render={(props)=><Welcome changeState={this.changeState} country={this.state.country}/>}/> 
          </Switch>   
        </div>
      </Router>
    );
  }
}

export default App

import React, { Component } from 'react';
import Header from './components/Header';
import LimitContainer from './containers/LimitContainer';
import MarketContainer from './containers/MarketContainer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <LimitContainer/>
        <MarketContainer/>
      </div>
    );
  }
}

export default App;

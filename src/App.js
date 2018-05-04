import React, { Component } from 'react';
import LimitMarketContainer from './containers/LimitMarketContainer';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      clickedTab: 'limit',
    }
  }

  handleTabClick = (e) => {
    this.setState({
      clickedTab: e.target.id,
    })
  }

  render() {
    return (
      <div className="App">
        <LimitMarketContainer
          clickedTab={this.state.clickedTab}
          handleTabClick={this.handleTabClick}
        />
      </div>
    );
  }
}

export default App;

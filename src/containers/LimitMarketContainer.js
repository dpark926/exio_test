import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Header from '../components/Header';
import LimitContainer from './LimitContainer';
import MarketContainer from './MarketContainer';
import '../styles/LimitMarketContainer.css';

class LimitMarketContainer extends Component {
  render() {
    return (
      <div className="LimitMarketContainer">
        <Header handleTabClick={this.props.handleTabClick} clickedTab={this.props.clickedTab}/>
        { this.props.clickedTab === 'limit' ? <LimitContainer/> : <MarketContainer/> }
      </div>
    );
  }
}

export default LimitMarketContainer;

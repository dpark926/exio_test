import React, { Component } from 'react';
import Header from '../components/Header';
import LimitContainer from './LimitContainer';
import MarketContainer from './MarketContainer';
import '../styles/LimitMarketContainer.css';

class LimitMarketContainer extends Component {
  render() {
    return (
      <div className="LimitMarketContainer">
        <Header/>
        <LimitContainer/>
        <MarketContainer/>
      </div>
    );
  }
}

export default LimitMarketContainer;

import React, { Component } from 'react';
import '../styles/Header.css';

class Header extends Component {
  render() {
    return (
      <div className='header-container'>
        <div className='header-tab'>Limit</div>
        <div className='header-tab'>Market</div>
      </div>
    )
  }
}

export default Header;
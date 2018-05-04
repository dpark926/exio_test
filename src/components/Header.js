import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';

class Header extends Component {
  render() {
    console.log(this.props)
    return (
      <div className='header-container'>
        {this.props.clickedTab === 'limit' ?
          <div className='header-tab active' id='limit' onClick={this.props.handleTabClick}>Limit</div> :
          <div className='header-tab' id='limit' onClick={this.props.handleTabClick}>Limit</div>
        }
        {this.props.clickedTab === 'market' ?
          <div className='header-tab active' id='market' onClick={this.props.handleTabClick}>Market</div> :
          <div className='header-tab' id='market' onClick={this.props.handleTabClick}>Market</div>
        }
      </div>
    )
  }
}

export default Header;
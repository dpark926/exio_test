import React, { Component } from 'react';
import '../styles/LimitContainer.css';

class LimitContainer extends Component {
  render() {
    return (
      <div className='LimitContainer'>
        <div className='limitBuy-container'>
          <div className='limitBuy-header'>
            <h5>Buy ETH</h5>
          </div>

          <div className='price-row'>
            <div className='price-row-left left'>
              Price:
            </div>
            <div className='price-row-right right'>
              <input type='text'>

              </input>
            </div>
          </div>

          <div className='amount-row'>
            <div className='amount-row-left left'>
              Amount:
            </div>
            <div className='amount-row-right right'>
              <input type='text'>

              </input>
            </div>
          </div>

          <div className='percent-select'>
            <div className='percent-select-left left'>

            </div>
            <div className='percent-select-right right'>
              <span>25%</span>
              <span>50%</span>
              <span>75%</span>
              <span>100%</span>
            </div>
          </div>

          <div className='total'>
            <div className='total-left left'>Total:</div>
            <div className='total-right right'>0.0000000 BTC</div>
          </div>

          <div className='button'>
            Buy
          </div>
        </div>
        <div className='limitBuy-container'>
          <div className='limitBuy-header'>
            <h5>Sell ETH</h5>
          </div>

          <div className='price-row'>
            <div className='price-row-left left'>
              Price:
            </div>
            <div className='price-row-right right'>
              <input type='text'>

              </input>
            </div>
          </div>

          <div className='amount-row'>
            <div className='amount-row-left left'>
              Amount:
            </div>
            <div className='amount-row-right right'>
              <input type='text'>

              </input>
            </div>
          </div>

          <div className='percent-select'>
            <div className='percent-select-left left'>

            </div>
            <div className='percent-select-right right'>
              <span>25%</span>
              <span>50%</span>
              <span>75%</span>
              <span>100%</span>
            </div>
          </div>

          <div className='total'>
            <div className='total-left left'>Total:</div>
            <div className='total-right right'>0.0000000 BTC</div>
          </div>

          <div className='button' style={{backgroundColor: '#EA096F'}}>
            Sell
          </div>
        </div>
      </div>
    )
  }
}

export default LimitContainer;
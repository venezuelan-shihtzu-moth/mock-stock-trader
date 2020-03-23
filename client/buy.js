/**
 * @name buysell.js
 * @description Component to handle buying and selling stocks
 * 
 */
import React, { Component } from 'react';

class Buy extends Component {
    constructor(props) {
        this.state = {
            stock : '',
            price : 0
        }
        this.handleGetStock = this.handleGetStock.bind(this);
        this.buyStock = this.buyStock.bind(this);
    }

    handleGetStock(event) {

    }

    render() {
        return (
            <div className='buy'>
                <form>
                    <input type='text' id='stksymbol'></input>
                    <input onClick={this.handleGetStock}>Get Stock!</input>
                    <input type='number' id='numofstocks'></input>
                    <input onClick={this.buyStock}></input>
                </form>
                <span>Current Price: {this.state.price}</span>
            </div>
        )
    }
}

export default Buy;
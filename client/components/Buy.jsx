/**
 * @name buysell.js
 * @description Component to handle buying and selling stocks
 * 
 */
import React, { Component } from 'react';

class Buy extends Component {
    constructor(props) {
        super(props);
        this.state = {
            stock : '',
            number : 0,
            price : 0
        }
        this.handleGetStock = this.handleGetStock.bind(this);
        this.buyStock = this.buyStock.bind(this);
        this.changeNumber = this.changeNumber.bind(this);
    }

    handleGetStock(event) {
        const stockSymbol = document.getElementById('stksymbol').value;
        //console.log(stocksymbol);
        fetch(`/backend/price?sym=${stockSymbol}`)
        .then(raw => raw.json())
        .then(price => this.setState({stock : stockSymbol, price : price}))
        .catch(err => {console.log(err)});
    }

    buyStock(event) {
        if(this.state.stock==='' || this.state.price === '0' || this.state.number === '0'){
            alert('Give valid inputs!');
            return;
        }
        //  Make fetch request to 
    }

    changeNumber(event) {
        const num = document.getElementById('numofstocks').value;
        this.setState({number : num});
    }

    render() {
        return (
            <div className='buy'>
                <form>
                    <label htmlFor='stksymbol'>Enter Stock Symbol:</label>
                    <br />
                    <input type='text' name='stksymbol' id='stksymbol' />
                    <input type='button' onClick={this.handleGetStock} value='Get Stock Price!' />
                    <br />
                    <label htmlFor='numofstocks'>How many stocks?</label>
                    <br />
                    <input type='number' id='numofstocks' onChange={this.changeNumber} />
                    <input type='button' onClick={this.buyStock} value='Buy this many stocks' />
                </form>
                <span>Stock: {this.state.stock} Price: {this.state.price}</span>
                <br />
                
            </div>
        )
    }
}

export default Buy;
import React, { Component } from 'react';
import { render } from 'react-dom';

class PL extends Component{
    constructor(props) {
        super ( props)
        this.state={
            // sql data & api
            stock:[
                {ticker:'', price_purchase:'', quantity:'', current_price:0, total_stock_value:0,percent_change : 0}
            ]
        }
    }

    componentDidMount(){
        fetch('/backend/profitloss')
        .then((arg)=>arg.json())
        .then((input)=>{input.forEach((a)=>{a.total_stock_value= a.quantity*a.current_price; a.percent_change= (a.current_price/a.price_purchase);})
            return input})
        .then((input)=>this.setState({stock:input}))
    }





renderTableData() {
    return this.state.stock.map((stock, index) => {
       const { ticker, price_purchase, quantity, current_price,total_stock_value,percent_change } = stock //destructuring
       return (
          <tr key={ticker}>
             <td>{ticker}</td>
             <td>{price_purchase}</td> 
             <td>{quantity}</td>
             <td>{current_price}</td>
             <td>{total_stock_value}</td>
             <td>{percent_change}</td>
          </tr>
       )
    })
 }

 render() {
    return (
       <div>
            <h1> Profit and Loss Summary</h1>
          <h2 id='title'>React Dynamic Table</h2>
          <table id='stock'>
             <thead>
                <tr>
                  <th>Symbol</th>
                  <th>Price at Purchase</th>
                  <th>Quantity purchases</th>
                  <th>Current Stock Price</th>
                  <th>Total Stock Value</th>
                  <th>Percentage Change</th>
               </tr>
             </thead>
             <tbody>
                {this.renderTableData()}
             </tbody>
          </table>
       </div>
    )
 }
}



export default PL;
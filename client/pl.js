import React, { Component } from 'react';
import { render } from 'react-dom';

class Table extends Component{
    constructor(props) {
        super ( props)
        this.state={
            // sql data & api
            stock:[
                {Ticker:'', Price_Purchase:'', Quantity:'', Current_Price:0, Total_Stock_Value:0,Percent_Change}
            ]
        }
    }

    componentDidMount(){
        fetch('/backend/profitloss')
        .then((arg)=>arg.json())
        .then((input)=>{input.forEach((a)=>{a.Total_Stock_Value= a.Quantity*a.Current_Price; a.Percent_Change= (a.Current_Price/a.Price_Purchase)-1})
            return input})
        .then((input)=>this.setState({stock:input}))
    }





renderTableData() {
    return this.state.stock.map((stock, index) => {
       const { Ticker, Price_Purchase, Quantity, Current_Price,Total_Stock_Value,Percent_Change } = stock //destructuring
       return (
          <tr key={Ticker}>
             <td>{Ticker}</td>
             <td>{Price_Purchase}</td> 
             <td>{Quantity}</td>
             <td>{Current_Price}</td>
             <td>{Total_Stock_Value}</td>
             <td>{Percent_Change}</td>
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
             <tbody>
                {this.renderTableData()}
             </tbody>
          </table>
       </div>
    )
 }
}



export default PL;
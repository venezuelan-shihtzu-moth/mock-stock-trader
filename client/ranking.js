import React, { Component } from 'react';
import { render } from 'react-dom';

class Table extends Component{
    constructor(props) {
        super ( props)
        this.state={
            // sql data & api
            stock:[
                {User:'', Price_Purchase:'', Quantity:'', Current_Price:0, Total_Stock_Value:0,Percent_Change}
            ]
        }
    }
}

render(){
    return (
        <div>
        <h1> User Dash Board Summary</h1>
        </div>
    )
}


renderTableData() {
    return this.state.stock.map((stock, index) => {
       const { User, Price_Purchase, Quantity, Current_Price,Total_Stock_Value,Percent_Change } = student //destructuring
       return (
          <tr key={User}>
             <td>{User}</td>
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
          <h1 id='title'>React Dynamic Table</h1>
          <table id='stock'>
             <tbody>
                {this.renderTableData()}
             </tbody>
          </table>
       </div>
    )
 }




export default PL;
import React, { Component } from 'react';

// importing info from backend (need sql and api info)



render() {
    return (
        <div>
            <h1>Enter the tickers below to help track your prices</h1>

            <input type="text" />
              <button onClick= {()=> this.handClick()}> Submit</button>
        </div>
        
    );
}

}

export default App;

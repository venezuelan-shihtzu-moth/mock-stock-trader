import React, { useState, useEffect } from 'react';

// importing info from backend (need sql and api info)

function PLchart() {
  const [prices, setPrices] = useState([]);

  const fetchData = async () => {
    const data = await fetch('DATA LINK HERE');

    const price = await data.json();
    console.log(price); // check json
    setPrices(price); // check json data
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      {prices.map(price => (
        <h1>{price.name}</h1> // check json
      ))}
    </div>
  );
}

export default PLchart;

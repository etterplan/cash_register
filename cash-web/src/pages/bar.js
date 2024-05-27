import React, { useState, useEffect } from 'react';
import './bar.css';

const API_BASE_URL = 'http://localhost:5000';

const Bar = ({ guest, setSelectedNameFromBar }) => {
  const [billSum, setBillSum] = useState(0);

  const Line = ({ item, maxLabelLength }) => {
    const [value, setValue] = useState(0);
    const [myItem] = useState(item);

    const increaseValue = () => {
      setValue(value + 1);
      setBillSum(parseInt(billSum + parseFloat(myItem.price)))
    };

    const decreaseValue = () => {
      setValue(value - 1);
      setBillSum(parseInt(billSum - parseFloat(myItem.price)))
    };

    return (
      <div>
        <input type="text" id="textInput" className="smallInput" value={value} readOnly />
        <label htmlFor="textInput" className="longLabel" style={{ width: maxLabelLength }}>{item.article}</label>
        <label htmlFor="textInput" className="longLabel" style={{ width: maxLabelLength }}>{item.price}</label>
        <button onClick={increaseValue}>+</button>
        <button onClick={decreaseValue}>-</button>
      </div>
    );
  };

  const Paying = () => {
    console.log("Paying")
  }

  // Function .......
  const payRow = ({ guest, sum }) => {
    return (
      <div>
        <h1>Guest: {guest}</h1>
        <div>
          <label htmlFor="textInput" className="longLabel">SUMMA: </label>
          <label htmlFor="textInput" className="longLabel">{billSum}</label>
          <button onClick={Paying}>Pay</button>
        </div>
      </div>
    );
  };

  const [lines, setLines] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/articles`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });
        const jsonData = await response.json();
        setLines(jsonData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  //const maxLabelLength = 20 //Math.max(...lines.map(item => item.length)) + 'ch';

  return (
    <div>
      <div>
        {payRow(guest)}
      </div>
      <div>
        {lines.map((line, index) => (
          <Line key={index} item={line} maxLabelLength='20ch' />
        ))}
      </div>
    </div>
  );
};

export default Bar;

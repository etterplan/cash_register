import React, { useState, useEffect } from 'react';
import * as dbcon from '../components/dbconnection';
import './bar.css';

const API_BASE_URL = 'http://localhost:5000';

const Bar = ({ guest }) => {
  const [amounts, setAmounts] = useState([]);
  const [billSum, setBillSum] = useState(0);
  const [articles, setArticles] = useState([]);
  const [payButton, setPayButton] = useState('Pay');

  const calculateBill = () => {
    let sum = 0;
    articles.map((line, index) => (
      sum += (line.price * amounts[index])
    ))
    setBillSum(sum);
  };

  const Line = ({ index, item, maxLabelLength }) => {
    const [value, setValue] = useState(amounts[index]);

    const increaseValue = () => {
      let newValue = value + 1;
      setValue(newValue);
      amounts[index] = newValue;
      calculateBill();
    };

    const decreaseValue = () => {
      if (value > 0) {
        let newValue = value - 1;
        setValue(newValue);
        amounts[index] = newValue;
        calculateBill();
      }
    };

    return (
      <div>
        <table>
          <tbody>
            <tr>
              <td>
                <input value={item.article} className="article" readOnly style={{ width: '25ch' }} />
              </td>
              <td>
                <input value={item.price} className="article" readOnly style={{ width: '5ch' }} />
              </td>
              <td>
                <input value={amounts[index]} className="amount" readOnly style={{ width: '3ch' }} />
              </td>
              <td>
                <button onClick={increaseValue}>+</button>
              </td>
              <td>
                <button onClick={decreaseValue}>-</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  };

  const storeBill = () => {
    console.log('run_my');
    const id = dbcon.getGuestId('Arne', 'Anka');
    console.log(id);
  };

  useEffect(() => {
    const payB = async() => {
      if (payButton === "Paid") {
        storeBill(); 
      }
    }
    payB();
  }, [payButton]);

  const trigPayBill = ({ guest }) => {
    if (payButton === "Pay") {
      setPayButton("Paid");
    }
  };

  // Function .......
  const payRow = ({ guest }) => {
    let name = guest.firstName + ' ' + guest.lastName;
    return (
      <div>
        <h1>Guest: {name}</h1>
        <div>
          <label htmlFor="textInput" className="longLabel">SUMMA: </label>
          <label htmlFor="textInput" className="longLabel">{billSum}</label>
          <button onClick={trigPayBill}>{payButton}</button>
        </div>
      </div>
    );
  };

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
        setArticles(jsonData);

        // Create a new array initialized to 0 based on the length of jsonData
        const newValues = Array.from({ length: jsonData.length }, () => 0);
        setAmounts(newValues);

      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <div>
        {payRow({ guest })}
      </div>
      <div>
        {articles.map((line, index) => (
          <Line key={index} index={index} item={line} maxLabelLength='20ch' />
        ))}
      </div>
    </div>
  );
};

export default Bar;

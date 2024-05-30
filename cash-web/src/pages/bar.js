import React, { useState, useEffect } from 'react';
import './bar.css';

const API_BASE_URL = 'http://localhost:5000';

const Bar = ({ guest }) => {
  const [values, setValues] = useState([]);
  const [billSum, setBillSum] = useState(0);
  const [lines, setLines] = useState([]);

  function fnk(line, index) {
    let sum = 0;
    console.log(line.price + ' : ' + values[index] + ' : ' + index);
    sum = line.price * values[index];
    return sum;
  };

  const calculateBill = () => {
    let sum = 0;
    {
      lines.map((line, index) => (
        sum += fnk(line, index)
      ))
    }
    setBillSum(sum);
  };

  const Line = ({ index, item, maxLabelLength }) => {
    const [value, setValue] = useState(values[index]);

    const increaseValue = () => {
      let newValue = value + 1;
      setValue(newValue);
      values[index] = newValue;
      calculateBill();
    };

    const decreaseValue = () => {
      if (value > 0) {
        let newValue = value - 1;
        setValue(newValue);
        values[index] = newValue;
        calculateBill();
      }
    };

    return (
      <div>
        <table>
          <tr>
            <td>
              <input value={item.article} class="article" readOnly style={{width: '25ch'}}/>
            </td>
            <td>
              <input value={item.price} class="article" readOnly style={{width: '5ch'}}/>
            </td>
            <td>
              <input value={values[index]} class="amount" readOnly style={{width: '3ch'}}/>
            </td>
            <td>
              <button onClick={increaseValue}>+</button>
            </td>
            <td>
              <button onClick={decreaseValue}>-</button>
            </td>
          </tr>
        </table>
      </div>
    );
  };

  const [payButton, setPayButton] = useState('Pay');

  const Paying = () => {
    console.log("Paying");
    if (payButton === 'Pay') {
      setPayButton('Paid');
    } else {
      setPayButton('Pay');
    }
  };

  // Function .......
  const payRow = ({ guest }) => {
    return (
      <div>
        <h1>Guest: {guest}</h1>
        <div>
          <label htmlFor="textInput" className="longLabel">SUMMA: </label>
          <label htmlFor="textInput" className="longLabel">{billSum}</label>
          <button onClick={Paying}>{payButton}</button>
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
        setLines(jsonData);

        // Create a new array initialized to 0 based on the length of jsonData
        const newValues = Array.from({ length: jsonData.length }, () => 0);
        setValues(newValues);

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
        {lines.map((line, index) => (
          <Line key={index} index={index} item={line} maxLabelLength='20ch' />
        ))}
      </div>
    </div>
  );
};

export default Bar;

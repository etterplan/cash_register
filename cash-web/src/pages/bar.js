import React, { useState, useEffect } from 'react';
import * as dbcon from '../components/dbconnection';
import './bar.css';

const API_BASE_URL = 'http://localhost:5000';

const Bar = ({ guest }) => {
  const [values, setValues] = useState([]);
  const [billSum, setBillSum] = useState(0);
  const [lines, setLines] = useState([]);

  const calculateSum = () => {
    let sum = 0;
    lines.map((line, index) => (
      sum += (line.price * values[index])
    ))
    setBillSum(sum);
  };

  // function saveBill() {
  //   let firstName = 'Arne';
  //   let lastName = 'Anka';
  //   result = useDataFetching(`http://localhost:5000/get_guest_id?firstName=${firstName}&lastName=${lastName}`);
  //   console.log(result);
  // }

  const Line = ({ index, item, maxLabelLength }) => {
    const [value, setValue] = useState(values[index]);

    const increaseValue = () => {
      let newValue = value + 1;
      setValue(newValue);
      values[index] = newValue;
      calculateSum();
    };

    const decreaseValue = () => {
      if (value > 0) {
        let newValue = value - 1;
        setValue(newValue);
        values[index] = newValue;
        calculateSum();
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
                <input value={values[index]} className="amount" readOnly style={{ width: '3ch' }} />
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

  const [payButton, setPayButton] = useState('Pay');

  useEffect(() => {
    const calculateBill = async () => {
      console.log('calculateBill');
      const id = dbcon.getGuestId('Arne', 'Anka');
      console.log(id);
    };
    // The variable has changed value before it entre the rutine.
    if (payButton === 'Paid') {
      calculateBill();
    }
  }, [payButton]);

  const Paying = ({ guest }) => {
    console.log("Paying");
    if (payButton === 'Pay') {
      //saveBill(guest);
      setPayButton('Paid');
    } else {
      setPayButton('Pay');
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

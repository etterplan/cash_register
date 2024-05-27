import React, { useState, useEffect } from 'react';
import './bar.css';

const API_BASE_URL = 'http://localhost:5000';

const Line = ({ item, maxLabelLength }) => {
  const [value, setValue] = useState(0);

  const increaseValue = () => {
    setValue(value + 1);
  };

  const decreaseValue = () => {
    setValue(value - 1);
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

const Bar = ({ guest, setSelectedNameFromBar }) => {
  //  const lines = ['Mat', 'Vin', 'Snapps', 'Öl', 'Öl 0.0%']; // Updating the array with strings
  //  const maxLabelLength = 20; //Math.max(...lines.map(item => item.length)) + 'ch';
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

  const maxLabelLength = 20 //Math.max(...lines.map(item => item.length)) + 'ch';

//  <Line key={index} item={line} maxLabelLength={maxLabelLength} />

  return (
    <div>
      <div>
        <h1>Bar Page</h1>
        <h2>{guest}</h2>
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









// const Line = () => {
//   return (
//     <div>
//       <input type="text" id="textInput" className="smallInput" />
//       <label htmlFor="textInput" className="longLabel">Text Input:</label>        
//       <button>+</button>
//       <button>-</button>
//     </div>
//   );
// };

// const Bar = ({ guest, setSelectedNameFromBar }) => {
//   const lines = [1, 2, 3, 4]; // You can change the size of the array to generate more lines

//   return (
//     <div>
//          <div>
//              <h1>Bar Page</h1>
//              <h2>{guest}</h2>
//          </div>
//          <div>
//               {lines.map((line) => (
//                 <Line key={line} />
//             ))}
//         </div>
//     </div>
//   );
// };

// export default Bar;

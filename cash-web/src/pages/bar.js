import React, { useState } from 'react';
import './bar.css';

const Line = ({ item, maxLabelLength}) => {
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
      <label htmlFor="textInput" className="longLabel" style={{ width: maxLabelLength }}>{item}</label>
      <button onClick={increaseValue}>+</button>
      <button onClick={decreaseValue}>-</button>
    </div>
  );
};

const Bar = ({ guest, setSelectedNameFromBar }) => {
  const lines = ['Mat', 'Vin', 'Snapps', 'Öl', 'Öl 0.0%']; // Updating the array with strings
  const maxLabelLength = 20; //Math.max(...lines.map(item => item.length)) + 'ch';

  return (
    <div>
         <div>
             <h1>Bar Page</h1>
             <h2>{guest}</h2>
         </div>
         <div>
             {lines.map((line, index) => (
                <Line key={index} item={line} maxLabelLength={maxLabelLength} />
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

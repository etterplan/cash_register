import React from 'react'
import { useState } from 'react';
import './baramount.css';

const BarAmount = ({article, onChange}) => {

    const [amount, setAmount] = useState(article.amount);

    const handleChange = (event) => {
        setAmount(event.target.value);
    };

    const handleButtonClick = (action) => {
        if (action === '+') {
            let a = amount + 1;
            setAmount(a);
            onChange({...article, amount: a});
        } else if (action === '-') {
            if (amount > 0) {
                let a = amount - 1;
                setAmount(a);
                onChange({...article, amount: a});
                }
        }
    };

    return (
        <div className="input-with-buttons">
            <input
                className='input-box'
                value={amount}
                readOnly
                onChange={handleChange}
                size='2'
            />
            <button
                onClick={() => handleButtonClick('+')}
            >
                +
            </button>
            <button
                onClick={() => handleButtonClick('-')}
            >
                -
            </button>
        </div>
    );
};

export default BarAmount;
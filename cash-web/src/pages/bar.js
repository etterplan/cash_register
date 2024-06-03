import React, { useState, useEffect } from 'react';

const API_BASE_URL = 'http://localhost:5000';

const Article = ({ article, amount, setAmount, index }) => {
    const increaseValue = () => {
        const updatedAmount = amount.map((value, idx) => (idx === index ? value + 1 : value));
        setAmount(updatedAmount);
    };

    const decreaseValue = () => {
        if (amount[index] > 0) {
            const updatedAmount = amount.map((value, idx) => (idx === index ? value - 1 : value));
            setAmount(updatedAmount);
        }
    };

    return (
        <>
            <tr>
                <td>
                    <input value={article.article} className="article" readOnly style={{ width: '25ch' }} />
                </td>
                <td>
                    <input value={article.price} className="article" readOnly style={{ width: '5ch' }} />
                </td>
                <td>
                    <input value={amount[index]} className="amount" readOnly style={{ width: '3ch' }} />
                </td>
                <td>
                    <button onClick={increaseValue}>+</button>
                </td>
                <td>
                    <button onClick={decreaseValue}>-</button>
                </td>
            </tr>
        </>
    );
};

const ArticleTables = () => {
    const [articles, setArticles] = useState([]);
    const [amount, setAmount] = useState([]);
    const [sum, setSum] = useState(0);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`${API_BASE_URL}/articles`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });
                const jsonData = await response.json();
                setArticles(jsonData);

                // Initialize amount
                const initialAmount = Array(jsonData.length).fill(0);
                setAmount(initialAmount);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    const calculate = () => {
        const tmp = amount.reduce((acc, value) => acc + value, 0);
        setSum(tmp);
        console.log('Sum:', sum);
    };

    useEffect(() => {
        console.log(amount);
    }, [amount]);

    return (
        <div>
            <button onClick={calculate}>Calculate</button>
            <p>     {sum}</p>
            <table>
                <tbody>
                    {articles.map((article, index) =>
                        <Article key={index} article={article} amount={amount} setAmount={setAmount} index={index} />
                    )}
                </tbody>
            </table>
        </div>
    );
};

const Bar = ({ guest }) => {
    const [guestName, setGuestName] = useState('');

    useEffect(() => {
        if (guest !== '') {
            setGuestName(guest.firstName + ' ' + guest.lastName);
        }
    }, [guest]);

    return (
        <div>
            <h1>Guest: {guestName}</h1>
            <ArticleTables />
        </div>
    );
};

export default Bar;

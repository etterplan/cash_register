import React, { useState, useEffect, useCallback } from 'react';
import * as dbcon from '../components/dbconnection'

const API_BASE_URL = 'http://localhost:5000';

const Article = ({ article, amount, setAmount, index, isPaid }) => {
    const increaseValue = () => {
        if (!isPaid) {
            const updatedAmount = amount.map((value, idx) => (idx === index ? value + 1 : value));
            setAmount(updatedAmount);
        }
    };

    const decreaseValue = () => {
        if (!isPaid && (amount[index] > 0)) {
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

const ArticleTables = ({ guest_id }) => {
    const [isPaid, setIsPaid] = useState(false);
    const [articles, setArticles] = useState([]);
    const [amount, setAmount] = useState([]);
    const [summa, setSumma] = useState(0);
    const isButtonDisabled = guest_id === undefined;     

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

    const calculate = useCallback(() => {
        let sum = 0;
        amount.forEach((element, index) => {
            sum += element * articles[index].price;
        })
        return sum;
    }, [amount, articles]);

    useEffect(() => {
        setSumma(calculate());
    }, [calculate]);

    const getCurrentSwedenTime = () => {
        try {
            const now = new Date();
            return new Intl.DateTimeFormat('sv-SE', {
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit',
                hour12: false,
                timeZone: 'Europe/Stockholm'
            }).format(now);
        } catch (error) {
            console.error('Error fetching current time for Sweden:', error);
            return null;
        }
    };

    const savePurchaseDetails = ({ purchase_id, articles, amount }) => {
        amount.forEach((element, index) => {
            // Save only bought products
            if (element > 0) {
                console.log(purchase_id + ', ' + articles[index].article + ', ' +
                    element + ', ' + articles[index].price);
                dbcon.addPurchaseDetails(purchase_id, articles[index].article,
                    element, articles[index].price);
            }
        });
    }

    const saveBill = useCallback(() => {
        console.log("Run saveBill: Guest_id: " + guest_id)
        dbcon.getLastPurchaseId()
            .then(lastPurchase => {
                let purchase_id = lastPurchase.purchase_id + 1;
                // Save all articles 
                savePurchaseDetails({ purchase_id, articles, amount });
                // Create a new purchase (connect customer with purchase)
                let time = getCurrentSwedenTime();
                dbcon.addPurchase(guest_id, time, purchase_id);
            })
            .catch(error => {
                console.error('Error fetching the last purchase: ', error);
            });
    }, [amount, articles, guest_id]);

    useEffect(() => {
        if (isPaid) {
            console.log('isPaid');
            saveBill();
        }
    }, [isPaid, saveBill]);

    const trigPayButton = () => {
        if (!isPaid) {
            // isPaid shall only be changed here.
            setIsPaid(true);
        }
    };

    const payButtonText = () => {
        return isPaid ? 'Paid' : 'Pay';
    }

    return (
        <div>
            <button disabled={isButtonDisabled} onClick={trigPayButton}>{payButtonText()}</button>
            <p>Summa: {summa}</p>
            <table>
                <tbody>
                    {articles.map((article, index) =>
                        <Article key={index} article={article} amount={amount}
                            setAmount={setAmount} index={index} isPaid={isPaid} />
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


    if (guest.id === undefined) {
        return (
            <div>
                <h1>Ingen gäst vald</h1>                
                <h2>Betalknappen är inaktive</h2>                
                <ArticleTables guest_id={guest.id} />
            </div>
        );
    } 

    return (
        <div>
            <h1>Gäst: {guestName}</h1>
            <ArticleTables guest_id={guest.id} />
        </div>
    );
};

export default Bar;

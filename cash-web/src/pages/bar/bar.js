import React, { useState, useEffect, useContext } from 'react';
import { GuestContext } from '../../context/guest_provider';
import BarTable from './bar_table';

const Bar = () => {
    const { guest } = useContext(GuestContext);
    const [total, setTotal] = useState(0);
    const [articles, setArticles] = useState([
        { "id": 1, "article": "Mat", "price": 240, "realP": 0, "amount": 0 },
        { "id": 2, "article": "Vin", "price": 50, "realP": 0, "amount": 0 },
        { "id": 3, "article": "Snaps", "price": 40, "realP": 0, "amount": 0 },
        { "id": 4, "article": "Öl", "price": 40, "realP": 0, "amount": 0 },
        { "id": 5, "article": "Öl alk.fri", "price": 20, "realP": 0, "amount": 0 },
        { "id": 6, "article": "Vin alk.fri", "price": 30, "realP": 0, "amount": 0 },
        { "id": 7, "article": "Skärv", "price": 0, "realP": 0, "amount": 1 }]);

    const updateBarData = ({ barData, changedElement }) => {
        const newBarData = barData.map(element => {
            if (element.article === changedElement.article) {
                return changedElement;
            }
            return element;
        });

        return newBarData;
    }

    const onChangeArticle = (article) => {
        console.log(article);
  
        let updateArticles = updateBarData({ barData: articles, changedElement: article });
        console.log(articles);

        let t = 0;
        updateArticles.forEach(element => {
            t += element.price * element.amount;
        });
        setTotal(t);
        setArticles(updateArticles);
    };

    return (
        <div>
            <h1>{`Gäst: ${guest.firstName} ${guest.lastName}`}</h1>
            <h2>{`Summa: ${total} kr`}</h2>
            <BarTable articles={articles} onChange={onChangeArticle} />
        </div>
    );
};

export default Bar;
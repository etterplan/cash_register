import React, { useState, useEffect, useContext } from 'react';
import { GuestContext } from '../../context/guest_provider';
import BarTable from './bar_table';
import useFetchArticles from '../../hooks/usefetcharticles';

const Bar = () => {
    const { guest } = useContext(GuestContext);
    const [total, setTotal] = useState(0);
    const [articles, setArticles] = useState([]);
 
    useFetchArticles(setArticles);

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
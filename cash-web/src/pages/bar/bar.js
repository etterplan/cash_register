import React, { useState, useEffect, useContext } from 'react';
import { GuestContext } from '../../context/guest_provider';
import BarTable from './bar_table';
import PurchaseData from '../../context/purchase_data';

const Bar = () => {
    const { guest } = useContext(GuestContext);
    const [articles, setArticles] = useState([
        {"id":1, "article":"Mat",         "price":240, "realP": 0, "amount": 0},
        {"id":2, "article":"Vin",         "price":50,  "realP": 0, "amount": 0},
        {"id":3, "article":"Snaps",       "price":40,  "realP": 0, "amount": 0},
        {"id":4, "article":"Öl",          "price":40,  "realP": 0, "amount": 0},
        {"id":5, "article":"Öl alk.fri",  "price":20,  "realP": 0, "amount": 0},
        {"id":6, "article":"Vin alk.fri", "price":30,  "realP": 0, "amount": 0},
        {"id":7, "article":"Skärv",       "price":0,   "realP": 0, "amount": 1}]);

    const onChangeArticles = (article) => {
        console.log("onChange: HELLO");
        console.log(article);
    };

    return (
        <div>
            <PurchaseData>
                <h1>{`Gäst: ${guest.firstName} ${guest.lastName}`}</h1>
                <BarTable articles={articles} onChange={onChangeArticles} />
            </PurchaseData>
        </div>
    );
};

export default Bar;
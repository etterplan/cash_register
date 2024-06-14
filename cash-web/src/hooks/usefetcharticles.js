import { useState, useEffect } from 'react';

const URL_DB_SERVER = "http://localhost:5000";

const useFetchArticles = (setData) => {

    useEffect(() => {
        fetch(`${URL_DB_SERVER}/articles`)
            .then((res) => res.json())
            .then((data) => setData(data.map(
                obj => ({ ...obj, amount: 0 }))));
    }, [setData]);
};

export default useFetchArticles;
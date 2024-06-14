import { useState, useEffect } from 'react';

const URL_DB_SERVER = "http://localhost:5000";

const useFetchData = (endpoint, setData) => {
    useEffect(() => {
        fetch(`${URL_DB_SERVER}/${endpoint}`)
            .then((res) => res.json())
            .then((data) => setData(data));
    }, [endpoint, setData]);
};

export default useFetchData;
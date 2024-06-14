import { useState, useEffect } from 'react';

const URL_DB_SERVER = "http://localhost:5000";

const useFetchAllGuests = (setData) => {
    useEffect(() => {
        fetch(`${URL_DB_SERVER}/all_guests`)
            .then((res) => res.json())
            .then((data) => setData(data));
    }, [setData]);
};

export default useFetchAllGuests;
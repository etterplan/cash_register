import React, { useState, useEffect, useContext } from 'react';
import { GuestContext } from '../../context/guest_provider';
import BarTable from './bar_table';

const Bar = () => {
    const { guest } = useContext(GuestContext);
    const [articles, setArticles] = useState([
        {"id":1,"article":"Mat","price":240},
        {"id":2,"article":"Vin","price":50},
        {"id":3,"article":"Snaps","price":40},
        {"id":4,"article":"Öl","price":40},
        {"id":5,"article":"Öl alk.fri","price":20},
        {"id":6,"article":"Vin alk.fri","price":30},
        {"id":7,"article":"Skärv","price":0}]);

    return (
        <div>
            <h1>{`Gäst: ${guest.firstName} ${guest.lastName}`}</h1>
            <BarTable articles={articles} />
        </div>
    );
};

export default Bar;
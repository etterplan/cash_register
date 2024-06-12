import React, { useState, useEffect, useContext } from 'react';
import { GuestContext } from '../../context/guest_provider';

const Bar = () => {
    const { guest } = useContext(GuestContext);

    return (
        <div>
            <h1>{`Gäst: ${guest.firstName} ${guest.lastName}`}</h1>
        </div>
    );
};

export default Bar;
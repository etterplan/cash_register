import React, { useState, useEffect } from 'react';
import * as dbcon from '../components/dbconnection'

const Bill = ({ guest }) => {
  const [guestName, setGuestName] = useState('');

  useEffect(() => {
    if (guest !== '') {
      setGuestName(guest.firstName + ' ' + guest.lastName);
      dbcon.getBillData(guest.id)
        .then(data => {
          console.log('BillData: ');
          console.log(data);
        });
    }
  }, [guest]);


  if (guest.id === undefined) {
    return (
      <div>
        <h1>Ingen gäst vald</h1>
      </div>
    );
  }

  return (
    <div>
      <h1>Gäst: {guestName}</h1>
    </div>
  );
};

export default Bill;

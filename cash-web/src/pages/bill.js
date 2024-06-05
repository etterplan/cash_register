import React, { useState, useEffect } from 'react';
import * as dbcon from '../components/dbconnection'

const purchaseSum = (details) => {
  console.log(details);
  let sum = 0;
  details.forEach(detail => {
    sum += detail.price;
  });

  return sum;
}

const BillTable = ({ billData }) => {
  
  return (
    <div>
      <ul>
        {billData.map((data, index) => (
          <li key={index}>
            {data.purchase.time} Summa: {purchaseSum(data.details)} kr
            <ul>
              {data.details.map((detail, index) => (
                <li key={index}>{detail.article} {detail.amount} {detail.price}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

const Bill = ({ guest }) => {
  const [guestName, setGuestName] = useState('');
  const [billData, setBillData] = useState([]);

  useEffect(() => {
    if (guest !== '') {
      setGuestName(guest.firstName + ' ' + guest.lastName);
      dbcon.getBillData(guest.id)
        .then(data => {
          setBillData(data);
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
      <BillTable billData={billData} />
    </div>
  );
};

export default Bill;

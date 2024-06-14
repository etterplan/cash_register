import React, { useState, useEffect, useContext } from 'react';
import { GuestContext } from '../context/guest_provider';
import useFetchBillData from '../hooks/usefetchbilldata';

const purchaseSum = (details) => {
  console.log(details);
  let sum = 0;
  details.forEach(detail => {
    sum += detail.price;
  });

  return sum;
}

const BillDetail = ({ detail }) => (
  <li>{detail.article} {detail.amount} {detail.price}</li>
);

const BillTable = ({ billData }) => {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleItemClick = (index) => {
    setSelectedItem(selectedItem === index ? null : index);
  };

  return (
    <div>
      <ul>
        {billData.map((data, index) => (
          <li key={index}>
            <div onClick={() => handleItemClick(index)}>
              {data.purchase.time} - {purchaseSum(data.details)} kr
            </div>
            {selectedItem === index && (
              <ul>
                {data.details.map((detail, detailIndex) => (
                  <BillDetail key={detailIndex} detail={detail} />
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

const Bill = () => {
  const { guest } = useContext(GuestContext);
  const [billData, setBillData] = useState([]);

  useFetchBillData(guest.id, setBillData);

  if (guest.id === -1) {
    return (
      <div>
        <h1>Ingen gäst vald</h1>
      </div>
    );
  }

  return (
    <div>
      <h1>{`Gäst: ${guest.firstName} ${guest.lastName}`}</h1>
      <BillTable billData={billData} />
    </div>
  );
};

export default Bill;

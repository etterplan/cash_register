import React from 'react';
import * as testDB from '../components/testdb'

function Settings() {

  const initTableGuests = () => {
    testDB.populateTableGuests();
  };

  const initTableArticles = () => {
    testDB.populateTableArticles();
  };

  const initTablePurchase = () => {
    testDB.populateTablePurchase();
  };

  return (
    <div>
      <h1>Settings</h1>
      <p>This page will show the note.</p>
      <ul>
        <li style={{ marginBottom: '10px' }}>
          <button onClick={initTableGuests}>Initialize table Guests</button>
        </li>
        <li style={{ marginBottom: '10px' }}>
          <button onClick={initTableArticles}>Initialize table Articles</button>
        </li>
        <li style={{ marginBottom: '10px' }}>
          <button onClick={initTablePurchase}>Initialize table Purchase</button>
        </li>
      </ul>
    </div>
  );
}

export default Settings;

import React from 'react';
import * as testDB from '../components/testdb'

function Settings() {

  const initTableGuests = () => {
    testDB.populateTableGuests();
  };

  const initTableArticles = () => {
    testDB.populateTableArticles();
  };

  const initTableBarAccount = () => {
    testDB.populateTableBarAccount();
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
          <button onClick={initTableBarAccount}>Initialize table BarAccount</button>
        </li>
      </ul>
    </div>
  );
}

export default Settings;

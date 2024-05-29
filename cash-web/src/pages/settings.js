import React from 'react';
import { populateTableGuests, populateTableArticles } from '../components/testdb'

function Settings() {

  const initTableGuests = () => {
    populateTableGuests();
  };

  const initTableArticles = () => {
    populateTableArticles();
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
      </ul>
    </div>
  );
}

export default Settings;

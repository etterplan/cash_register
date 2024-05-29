import React from 'react';
import { populateTableGuests } from '../components/testdb'

function Settings() {

  const initializeDB = () => {
    populateTableGuests();
  };

  return (
    <div>
      <h1>Settings</h1>
      <p>This page will show the note.</p>
      <button onClick={initializeDB}>Initialize database</button>
    </div>
  );
}

export default Settings;

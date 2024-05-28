import React from 'react';

function Settings() {

  const initializeDB = () => {
    console.log('InitializeDB')
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

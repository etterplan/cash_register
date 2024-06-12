import React, { createContext, useState } from 'react';

// Create a Context for the guest
export const GuestContext = createContext();

const GuestProvider = ({ children }) => {
  // State to hold guest information
  const [guest, setGuest] = useState(
    {id: -1, firstName: 'Okänd', lastName: '', email: ''}); 

  return (
    <GuestContext.Provider value={{ guest, setGuest }}>
      {children}
    </GuestContext.Provider>
  );
};

export default GuestProvider;

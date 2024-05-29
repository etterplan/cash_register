import * as dbcon from './dbconnection';

export function populateTableGuests() {
    console.log('Populate table Guests:');
    const table = [
        [ 'Arne', 'Anka', 'arne.anka@gmail.com' ], 
        [ 'Åsa', 'Karlsson', 'asa.karlsson@gmail.com' ],
        [ 'Cecila', 'Östman', 'cecila.ostman@gmail.com' ]
    ];

    table.forEach(data => {
        console.log(data);
        const [firstName, lastName, email] = data;
        dbcon.addGuest(firstName, lastName, email);
    });   
}
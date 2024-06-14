import * as dbcon from './dbconnection';

export function populateTableGuests() {
    console.log('Populate table Guests:');
    const table = [
        [ 'Arne', 'Anka', 'arne.anka@gmail.com' ], 
        [ 'Åsa', 'Karlsson', 'asa.karlsson@gmail.com' ],
        [ 'Cecila', 'Östman', 'cecila.ostman@gmail.com' ],
        [ 'Thomas', 'Svensson', 'thomas.svensson@gmail.com' ]
    ];

    table.forEach(data => {
        console.log(data);
        const [firstName, lastName, email] = data;
        dbcon.addGuest(firstName, lastName, email);
    });   
}

export function populateTableArticles() {
    console.log('Populate table Articles:');
    const table = [
        [ 'Mat', 240 ], 
        [ 'Vin', 50 ],
        [ 'Snaps', 40 ],
        [ 'Öl', 40 ],
        [ 'Öl alk.fri', 20 ],
        [ 'Vin alk.fri', 30 ],
        [ 'Skärv', 0 ]
    ];

    table.forEach(data => {
        console.log(data);
        const [article, price] = data;
        dbcon.addArticle(article, price);
    });   
}

export function populateTablePurchase() {
    console.log('Populate table BarAccount:');
    const table = [
        [ 0, '??:??:??', 1000]
    ];

    table.forEach(data => {
        console.log(data);
        const [guest_id, time, purchase_id] = data;
        dbcon.addPurchase(guest_id, time, purchase_id);
    });   
}
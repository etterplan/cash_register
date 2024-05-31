//const URL = 'http://172.18.0.3:5000';
const URL = 'http://localhost:5000';

export async function addGuest(firstName, lastName, email) {
    const data = { firstName, lastName, email };
    createRow('guests', data);
}

export async function addArticle(article, price) {
    const data = { article, price };
    createRow('articles', data);
}

export async function addBarAccount(guestId, time, purchaseId) {
    const data = { guestId, time, purchaseId };
    createRow('baraccount', data);
}

export async function addPurchase(purchaseId, article, amout, price) {
    const data = { purchaseId, article, amout, price };
    createRow('purchase', data);
}

export function fetchData(callback) {
    // Simulating an asynchronous operation
    console.log(new Date());

    setTimeout(() => {
        const data = 'Some fetched data';
        callback(data); // Calling the callback function with the fetched data
    }, 20000);

    console.log(new Date());
}

export async function getGuestId(firstName, lastName) {
    const url = `http://localhost:5000/get_guest_id?firstName=${firstName}&lastName=${lastName}`;
    let response = await fetch(url);
    console.log(response.status);
    if (response.status === 200) {
        let json = await response.json();
        console.log(json);
        return json;
    }

    throw new Error(response.status);
}

// export async function getGuestId(firstName, lastName) {
//     const url = `http://localhost:5000/get_guest_id?firstName=${firstName}&lastName=${lastName}`;

//     try {
//       const response = await fetch(url);

//       if (!response.ok) {
//         throw new Error(`HTTP error! Status: ${response.status}`);
//       }

//       const data = await response.json();
//       return data.guestId;
//     } catch (error) {
//       console.error(error);
//       return null; // Or you can throw the error here if needed
//     }
// }

// export function fetchAndHandleGuestId(firstName, lastName) {
//     try {
//       const guestId = await getGuestId(firstName, lastName);

//       if (guestId !== null) {
//         console.log(`Received guest ID: ${guestId}`);
//         // Proceed with further processing using guestId
//       } else {
//         console.error('Failed to retrieve guest ID');
//       }
//     } catch (error) {
//       console.error(error);
//     }
//   }

//export async function getGuestId(firstName, lastName) {
// Return a promise
// fetch(`http://localhost:5000/get_guest_id?firstName=${firstName}&lastName=${lastName}`)
//     .then(response => {
//         if (!response.ok) {
//             throw new Error('Failed to fetch data');
//         }
//         return response.json();
//     })
//     .then(data => {
//         console.log(data);
//         return data; // Returning the data fetched from the endpoint
//     })
//     .catch(error => {
//         console.error('Error:', error);
//         throw error; // Re-throw the error to propagate it
//     });
//}

async function createRow(table, data) {
    try {
        console.log(`${URL}/${table}`)
        const response = await fetch(`${URL}/${table}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        if (!response.ok) {
            throw new Error(`Failed to create row in table ${table}`);
        }

        const result = await response.json();
        console.log(`New row created in table ${table}:`, result);
        return result;
    } catch (error) {
        console.error(`Error creating row in ${table}:`, error);
        throw new Error(`Failed to create row in ${table}`);
    }
}

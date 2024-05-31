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

export function getLastPurchaseId() {
    // TODO:
    return 1000;
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

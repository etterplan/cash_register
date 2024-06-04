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

export async function addPurchase(guest_id, time, purchase_id) {
    const data = { guest_id: parseInt(guest_id, 10), time, purchase_id };
    console.log(data);
    createRow('purchase', data);
}

export async function addPurchaseDetails(purchase_id, article, amount, price) {
    const data = { purchase_id, article, amount, price };
    createRow('purchasedetails', data);
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

export async function getLastPurchaseId() {
    const url = `${URL}/getlastpurchaseid`;
    let response = await fetch(url);
    if (response.status === 200) {
        let json = await response.json();

        if (json && json.purchase_id) {
            return json;
        } else {
            throw new Error('Purchase ID not found in response');
        }
    }

    throw new Error(response.status);
}

export async function getGuestId(firstName, lastName) {
    const url = `${URL}/get_guest_id?firstName=${firstName}&lastName=${lastName}`;
    let response = await fetch(url);
    if (response.status === 200) {
        let json = await response.json();

        // Make sure id exist before return.
        if (json && json[0].id) {
            return json;
        } else {
            throw new Error('Guest ID not found in response');
        }
    }

    throw new Error(response.status);
}

async function createRow(table, data) {
    try {
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

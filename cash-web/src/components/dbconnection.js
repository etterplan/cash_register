//const URL = 'http://172.18.0.3:5000';
const URL = 'http://localhost:5000';
 
export async function addGuest(firstName, lastName, email) {
    const data = { firstName, lastName, email };
    createRow('guests', data);
}

async function addGuestData(data) {
    createRow('guests', data);
}

async function addArticle(article, price) {
    const data = { article, price };
    createRow('articles', data);
}

async function addArticleData(data) {
    createRow('articles', data);
}

async function addBarAccount(guestId, time, purchaseId) {
    const data = { guestId, time, purchaseId };
    createRow('baraccount', data);
}

async function addBarAccountData(data) {
    createRow('baraccount', data);
}

async function addPurchase(purchaseId, article, amout, price) {
    const data = { purchaseId, article, amout, price };
    createRow('purchase', data);
}

async function addPurchaseData(data) {
    createRow('purchase', data);
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

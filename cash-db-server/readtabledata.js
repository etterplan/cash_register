const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function readTableData() {
    try {
        const data = await prisma.guest.findMany(); 
        return data;
    } catch (error) {
        console.error(error);
        throw new Error('Error reading table data');
    } finally {
        await prisma.$disconnect();
    }
}

module.exports = readTableData;

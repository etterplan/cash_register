#!/usr/bin/env ash

# Install Prisma
npm install prisma

# Install Prisma Client
npm install @prisma/client

# Install project dependencies
npm install

# ....
npx prisma migrate dev --name init

# Generate Prisma Client
npx prisma generate

# Start the server application
node server.js

# Wait forever
#sh -c "trap : TERM INT; sleep infinity & wait"

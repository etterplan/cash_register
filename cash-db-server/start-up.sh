#!/usr/bin/env ash

# DEBUG
apk add curl
apk add mysql mysql-client
apk --update add mysql-client mariadb-connector-c
# Connect to database: mysql -h 172.18.0.2 -u root -P 3306 -p

# Install Prisma
npm install prisma

# Install Prisma Client
npm install @prisma/client

# Install cors
npm install cors

# Install project dependencies
npm install

# Apply new migration to database if necessary
npx prisma migrate dev --name init

# Generate Prisma Client
npx prisma generate

# Rebuild the server.
npm run build

# Start the server application
node server.js

# Wait forever
#sh -c "trap : TERM INT; sleep infinity & wait"

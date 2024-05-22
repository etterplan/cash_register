#!/usr/bin/env ash
sleep 15
logger "Script start-sh.sh is running"

# Install project dependencies
npm install

#
npx prisma migrate dev --name init

#
npx prisma generate

# Start server application
node server.js

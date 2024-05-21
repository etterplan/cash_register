#!/usr/bin/env ash
sleep 10
logger "Script start-sh.sh is running"
npx prisma migrate dev --name init
npm start

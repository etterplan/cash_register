#!/usr/bin/env ash
sleep 15
logger "Script start-sh.sh is running"
npx prisma migrate dev --name init
npx prisma generate
#npm start

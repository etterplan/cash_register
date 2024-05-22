# Use the official Node.js 14 image as a base
FROM node:22-alpine3.19

# Set the working directory in the container
WORKDIR /react/cash-db-server

# Copy the rest of the application code to the container
COPY . .

CMD ["./start-up.sh"]

# Wait forever
#CMD ["sh", "-c", "trap : TERM INT; sleep infinity & wait"]


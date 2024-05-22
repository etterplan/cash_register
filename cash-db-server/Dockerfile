# Use the official Node.js 14 image as a base
FROM node:22-alpine3.19

# Set the working directory in the container
WORKDIR /react/cash-db-server

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install Prisma
RUN npm install prisma@5.14.0

# Install Prisma Client
RUN npm install @prisma/client

# Install Prisma
RUN npm install prisma --save-dev

# Copy the rest of the application code to the container
#COPY . .

# Install project dependencies
#RUN npm install

# Generate Prisma Client
#RUN npx prisma generate

# Expose the port on which your server is running (e.g., 4000)
#EXPOSE 4000

# Command to run your server when the container starts
#CMD [ "node", "server.js" ]

CMD ["./start-up.sh"]

# Wait forever
#CMD ["sh", "-c", "trap : TERM INT; sleep infinity & wait"]






# # Use the official Node.js 14 image as a base
# FROM node:22-alpine3.19

# # Set the working directory in the container
# WORKDIR /react/cash-db-server

# # Copy package.json and package-lock.json to the working directory
# COPY package*.json ./

# # Install prisma/client
# RUN npm install @prisma/client

# # Install dependencies
# RUN npm install

# # Copy the rest of the application code to the container
# #COPY . .

# # Expose the port on which your server is running (e.g., 4000)
# EXPOSE 4000

# # Command to run your server when the container starts
# CMD [ "node", "server.js" ]
# # Wait forever
# #CMD ["sh", "-c", "trap : TERM INT; sleep infinity & wait"]

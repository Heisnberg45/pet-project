# Dockerfile

# Use the official Node.js image as a base
FROM node:16

# Set the working directory in the container
WORKDIR /app

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose the application's port
EXPOSE 5000

# Start the application
CMD ["node", "server.js"]

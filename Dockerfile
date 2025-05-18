FROM node:18-alpine

WORKDIR /app

# Copy package.json and package-lock.json (if available)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy project files
COPY . .

# Build the React app with production settings
ENV NODE_ENV=production

# Build the React app
RUN npm run build

# Set server port (matching the port in server.js)
ENV PORT=3001

# Create data directory
# RUN mkdir -p server/data

# Expose port for the server
EXPOSE 3001

# Start the server (which will serve the React build)
CMD ["npm", "run", "server"] 

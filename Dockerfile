FROM node:18-alpine

WORKDIR /app

# Copy package.json and package-lock.json (if available)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy project files
COPY . .

# Set environment variables for React build
ENV NODE_ENV=production
ENV REACT_APP_ENV=production
ENV REACT_APP_API_URL=/api
ENV REACT_APP_ASSETS_URL=

# Build the React app
RUN npm run build

# Set server port
ENV PORT=3001

# Ensure server data directory exists
# RUN mkdir -p server/data

# Expose port for the server
EXPOSE 3001

# Start the server (which will serve the React build)
CMD ["npm", "run", "server"] 

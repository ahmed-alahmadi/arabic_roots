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
ENV PORT=3000

# Create start script to ensure data directory exists
# RUN echo '#!/bin/sh\nmkdir -p /app/server/data\necho "Data directory created/verified"\nexec npm run server' > /app/docker-start.sh \
#   && chmod +x /app/docker-start.sh

# Expose port for the server
EXPOSE 3001

# Start the server (which will serve the React build)
CMD ["/app/docker-start.sh"] 

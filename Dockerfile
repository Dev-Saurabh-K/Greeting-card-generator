# Use Node.js 18 (Slim version to keep it smaller, but we need to install libs)
FROM node:18-slim

# Install system dependencies required for Puppeteer (Chrome)
# This includes libraries for graphics, fonts, and sound APIs needed by headless Chrome
RUN apt-get update && apt-get install -y \
    wget \
    gnupg \
    ca-certificates \
    procps \
    libxss1 \
    libasound2 \
    libatk-bridge2.0-0 \
    libgtk-3-0 \
    libnss3 \
    libx11-xcb1 \
    libxtst6 \
    lsb-release \
    xdg-utils \
    fonts-liberation \
    --no-install-recommends \
    && rm -rf /var/lib/apt/lists/*

# Set the working directory inside the container
WORKDIR /app

# Copy package files first to leverage Docker cache for dependencies
COPY package*.json ./

# Install project dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Set environment variable to ensure Puppeteer runs without sandbox issues in Docker
ENV PUPPETEER_ARGS="--no-sandbox --disable-setuid-sandbox"

# Default command to run the app
CMD ["node", "index.js"]
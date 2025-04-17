#!/bin/bash

# Kill any existing server processes
echo "Killing any existing server processes..."
kill $(ps aux | grep "[n]ode .next/standalone/server.js" | awk '{print $2}') 2>/dev/null || echo "No standalone server running"
kill $(ps aux | grep "[n]ode static-server.js" | awk '{print $2}') 2>/dev/null || echo "No static server running"
lsof -i :8082 | awk 'NR>1 {print $2}' | xargs kill -9 2>/dev/null || echo "No processes to kill on port 8082"

# Clean the build directory
echo "Cleaning build directory..."
rm -rf .next

# Build the site
echo "Building the site..."
npm run build --no-lint

# Start the site
echo "Starting the site..."
NODE_ENV=production PORT=8082 node .next/standalone/server.js 
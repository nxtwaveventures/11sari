#!/bin/bash

# Kill any processes using port 8082
echo "Killing any processes using port 8082..."
lsof -i :8082 | grep LISTEN | awk '{print $2}' | xargs kill -9 2>/dev/null || true

# Build the site if out directory doesn't exist or if requested
if [ ! -d "out" ] || [ "$1" == "--build" ]; then
  echo "Building the site..."
  npm run build
  
  # Add .nojekyll file to prevent GitHub Pages from ignoring files that start with an underscore
  touch out/.nojekyll
  
  # Add CNAME file for custom domain
  echo "11sari.com" > out/CNAME
fi

# Start the static server
echo "Starting the static server..."
NODE_ENV=production nohup node static-server.js > server.log 2>&1 &
echo $! > server.pid

# Wait a moment for server to start
sleep 2

# Check if server is running
if [ -f "server.pid" ]; then
  PID=$(cat server.pid)
  if ps -p $PID > /dev/null; then
    echo "Server started successfully with PID $PID"
    echo "View logs with: tail -f server.log"
    echo "Server is running at: http://localhost:8082"
  else
    echo "Server failed to start. Check logs: cat server.log"
    exit 1
  fi
else
  echo "Server failed to start. PID file not created."
  exit 1
fi 
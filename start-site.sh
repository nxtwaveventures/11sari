#!/bin/bash

# Function to check if port is in use
check_port() {
    if lsof -Pi :8082 -sTCP:LISTEN -t >/dev/null ; then
        return 0
    else
        return 1
    fi
}

# Function to kill process on port
kill_port_process() {
    echo "Cleaning up existing processes on port 8082..."
    lsof -ti:8082 | xargs kill -9 2>/dev/null || true
}

# Clean previous build
echo "Cleaning previous build..."
rm -rf .next
rm -rf out

# Install dependencies if needed
if [ ! -d "node_modules" ]; then
    echo "Installing dependencies..."
    npm install
fi

# Build the application
echo "Building the application..."
NODE_ENV=production npm run build

# Kill any existing process on port 8082
kill_port_process

# Start the server with proper error handling
echo "Starting the server..."
NODE_ENV=production PORT=8082 node .next/standalone/server.js &
SERVER_PID=$!

# Wait for server to start
echo "Waiting for server to start..."
for i in {1..30}; do
    if check_port; then
        echo "Server started successfully on port 8082"
        echo "PID: $SERVER_PID"
        break
    fi
    if [ $i -eq 30 ]; then
        echo "Server failed to start within 30 seconds"
        kill $SERVER_PID 2>/dev/null
        exit 1
    fi
    sleep 1
done

# Monitor server health
while true; do
    if ! ps -p $SERVER_PID > /dev/null; then
        echo "Server process died, restarting..."
        NODE_ENV=production PORT=8082 node .next/standalone/server.js &
        SERVER_PID=$!
    fi
    sleep 5
done 
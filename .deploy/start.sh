#!/bin/bash

# Kill any processes running on port 8082
kill_port_process() {
  local port_process=$(lsof -i:8082 -t)
  if [ -n "$port_process" ]; then
    echo "Killing process using port 8082: $port_process"
    kill -9 $port_process || true
  fi
}

# Kill existing process
kill_port_process

# Start the server
echo "Starting server on port 8082..."
NODE_ENV=production PORT=8082 node server.js &

# Store the PID
echo $! > .pid

echo "Server started with PID $(cat .pid)"

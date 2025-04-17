#!/bin/bash

# Kill any processes that might be using the ports
echo "Cleaning up ports..."
lsof -i :3000 | awk 'NR>1 {print $2}' | xargs kill -9 2>/dev/null || echo "No processes to kill on port 3000"
lsof -i :8082 | awk 'NR>1 {print $2}' | xargs kill -9 2>/dev/null || echo "No processes to kill on port 8082"

# Start the development server
echo "Starting Next.js development server..."
npm run dev 
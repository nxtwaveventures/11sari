#!/bin/bash

# Exit on error
set -e

echo "Starting deployment process..."

# Build the application
echo "Building application..."
npm run build

# Check if standalone output was generated
if [ -d ".next/standalone" ]; then
  echo "Standalone output generated successfully."
else
  echo "Error: Standalone output not generated. Check your next.config.js settings."
  exit 1
fi

# Create a deployment directory if not exists
DEPLOY_DIR=".deploy"
if [ ! -d "$DEPLOY_DIR" ]; then
  mkdir "$DEPLOY_DIR"
fi

# Copy necessary files for deployment
echo "Copying deployment files..."
cp -r .next/standalone/* "$DEPLOY_DIR/"
cp -r .next/static "$DEPLOY_DIR/.next/"
cp -r public "$DEPLOY_DIR/"

# Create a start script for the server
cat > "$DEPLOY_DIR/start.sh" << 'EOF'
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
EOF

# Make the start script executable
chmod +x "$DEPLOY_DIR/start.sh"

echo "Deployment package created in $DEPLOY_DIR directory"

# Instructions for uploading to server
echo ""
echo "=== NEXT STEPS ==="
echo "1. Upload the contents of the $DEPLOY_DIR directory to your server"
echo "2. SSH into your server and run the following commands:"
echo "   cd /path/to/uploaded/files"
echo "   ./start.sh"
echo ""
echo "If you have SSH access, you can use:"
echo "scp -r $DEPLOY_DIR/* user@11sari.com:/var/www/11sari.com/"
echo "ssh user@11sari.com 'cd /var/www/11sari.com && ./start.sh'"
echo ""
echo "Done!" 
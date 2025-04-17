const express = require('express');
const path = require('path');
const fs = require('fs');
const { exec } = require('child_process');
const app = express();
const port = 8082;

// Check if the Next.js standalone server exists
const standaloneServerPath = path.join(__dirname, '.next/standalone/server.js');

if (fs.existsSync(standaloneServerPath)) {
    console.log('Using Next.js standalone server...');
    // Execute the standalone server directly
    exec(`node ${standaloneServerPath}`, (error, stdout, stderr) => {
        if (error) {
            console.error(`Error starting standalone server: ${error.message}`);
            return;
        }
        console.log(stdout);
        console.error(stderr);
    });
} else {
    console.log('Next.js standalone server not found, using fallback static server...');

    // Check if .next/static exists
    const nextStaticPath = path.join(__dirname, '.next/static');
    if (fs.existsSync(nextStaticPath)) {
        // Serve static files from the .next/static directory
        app.use('/_next/static', express.static(nextStaticPath));
    }

    // Serve static files from the public directory
    app.use(express.static(path.join(__dirname, 'public')));

    // Fallback to index.html
    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, 'index.html'));
    });

    app.listen(port, () => {
        console.log(`Fallback static server running at http://localhost:${port}`);
    });
} 
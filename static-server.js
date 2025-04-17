const express = require('express');
const path = require('path');
const compression = require('compression');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 8082;

// Enable compression for all requests
app.use(compression());

// Set cache headers for static assets
app.use((req, res, next) => {
    // Don't cache HTML files
    if (req.path.endsWith('.html') || req.path === '/') {
        res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
        res.setHeader('Pragma', 'no-cache');
        res.setHeader('Expires', '0');
    } else if (req.path.match(/\.(js|css|png|jpg|jpeg|gif|ico|svg|woff2|ttf|eot|woff)$/)) {
        // Cache static assets for 7 days
        res.setHeader('Cache-Control', 'public, max-age=604800');
    }
    next();
});

// Serve static files from the 'out' directory
app.use(express.static(path.join(__dirname, 'out')));

// Fallback for client-side routing - serve index.html for any unknown paths
app.get('*', (req, res) => {
    // Check if file exists in the out directory
    const filePath = path.join(__dirname, 'out', req.path);
    if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
        return res.sendFile(filePath);
    }

    // Check if html file exists (Next.js export creates directories with index.html)
    const htmlFilePath = path.join(__dirname, 'out', req.path, 'index.html');
    if (fs.existsSync(htmlFilePath)) {
        return res.sendFile(htmlFilePath);
    }

    // Fallback to index.html for client-side routing
    res.sendFile(path.join(__dirname, 'out', 'index.html'));
});

app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running at http://localhost:${PORT}`);
    console.log(`Serving content from: ${path.join(__dirname, 'out')}`);
}); 
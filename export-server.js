const express = require('express');
const path = require('path');
const app = express();

// Serve static files from the 'out' directory
app.use(express.static(path.join(__dirname, 'out')));

// For any other route, serve index.html (for client-side routing)
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'out', 'index.html'));
});

const PORT = process.env.PORT || 8083;
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
}); 
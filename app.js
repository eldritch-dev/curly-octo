const express = require('express');

const app = express();
const PORT = 3066;

// Server
app.listen(PORT, async() => {
    console.log('Server running on port', PORT);
});

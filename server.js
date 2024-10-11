const express = require('express');
const app = express();
const PORT = process.env.PORT || 6060;

app.get('/server', (req, res) => {
    res.send(`Hello World`);
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});


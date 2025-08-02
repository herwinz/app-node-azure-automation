const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

// Default endpoint
app.get('/', (req, res) => {
    res.send('✅ Hello from Cloudsizing Node.js App on Azure!');
});

// Endpoint untuk stress test
app.get('/load', (req, res) => {
    // Simulasi beban ringan (CPU ringan)
    let total = 0;
    for (let i = 0; i < 1e6; i++) {
        total += i;
    }
    res.send(`Load test completed. Total: ${total}`);
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

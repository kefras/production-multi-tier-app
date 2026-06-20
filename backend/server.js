const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get('/api/data', (req, res) => {
    res.json({ 
        status: "Online", 
        tier: "Backend API Layer",
        timestamp: new Date(),
        payload: ["AWS EC2 Instance", "Docker Network Bridging", "Environment Isolation"] 
    });
});

app.listen(PORT, () => {
    console.log(`Backend service running on port ${PORT}`);
});

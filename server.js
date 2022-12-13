const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.sendFile('/home/ubuntu/projects2/T02-Node.js/index.html')});

app.listen(3000);
console.log('Server on port 3000')
const express = require('express');
const app = express();

const port = process.env.PORT || 8000;
const baseUrl = `http://localhost:${port}`;


app.get('/', (req, res) => {
   res.status(200).send('This is the backend of Varaman/ Lambda Testing');
});

// Server
module.exports = app;
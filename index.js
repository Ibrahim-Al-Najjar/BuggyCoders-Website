const express = require('express');
const path = require('path');
const app = express();

// Middleware to serve static files
app.use('/css', express.static(path.join(__dirname, 'css')));
app.use('/Images', express.static(path.join(__dirname, 'Images')));

// Route for the homepage
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(3000, () => {
  console.log('Server Started');
});

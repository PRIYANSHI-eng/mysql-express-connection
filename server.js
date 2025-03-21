const express = require('express');
const connection = require('./db');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send('MySQL and Express connected!');
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

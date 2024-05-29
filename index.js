const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Sample data
let items = [
  { id: 1, name: 'Item One' },
  { id: 2, name: 'Item Two' }
];

// GET endpoint to retrieve items
app.get('/items', (req, res) => {
  res.json(items);
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });
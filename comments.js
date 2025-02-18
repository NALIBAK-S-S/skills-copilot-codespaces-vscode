// Create web server
const express = require('express');
const app = express();
const port = 3000;

// Create comments array
let comments = [];

// Use middleware to parse request body
app.use(express.json());

// Get all comments
app.get('/comments', (req, res) => {
  res.json(comments);
});

// Add a comment
app.post('/comments', (req, res) => {
  const newComment = req.body;
  comments.push(newComment);
  res.json(newComment);
});

// Listen on port 3000
app.listen(port, () => {
  console.log(`Server is listening on http://localhost:${port}`);
});
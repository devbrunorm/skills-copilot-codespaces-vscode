// Create a web server
// Create a route that accepts POST requests to /comments
// When a POST request is made to /comments, save the request body to a file named comments.txt
// Respond with a message that says "Comment received"
// If the comments.txt file already exists, overwrite the file with the new comment
// If the comments.txt file does not exist, create it and then save the comment

const express = require('express');
const fs = require('fs');

const app = express();

app.use(express.json());

app.post('/comments', (req, res) => {
  fs.writeFile('comments.txt', req.body.comment, (err) => {
    if (err) {
      return res.status(500).send('There was an error saving the comment');
    }

    res.send('Comment received');
  });
});

app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});
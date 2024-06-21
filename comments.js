// Create a web server
const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');
const bodyParser = require('body-parser');

// Use body-parser to parse the request body
app.use(bodyParser.json());

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// GET /comments
app.get('/comments', (req, res) => {
    fs.readFile('comments.json', (err, data) => {
        if (err) {
            res.status(500).send('Could not read comments file.');
            return;
        }
        res.json(JSON.parse(data));
    });
});

// POST /comments
app.post('/comments', (req, res) => {
    fs.readFile('comments.json', (err, data) => {
        if (err) {
            res.status(500).send('Could not read comments file.');
            return;
        }
        const comments = JSON.parse(data);
        comments.push(req.body);
        fs.writeFile('comments.json', JSON.stringify(comments, null, 2), (err) => {
            if (err) {
                res.status(500).send('Could not write comments file.');
                return;
            }
            res.send('Comment added.');
        });
    });
});

// Start the web server on port 3000
app.listen(3000, () => {
    console.log('Web server started on http://localhost:3000');
});
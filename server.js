//Express Framework
const express = require("express")
const app = new express()
const port = 3000

// Handler function for all HTTP methods
const handleRequest = (req, res) => {
    res.send('Hello, World!');
};

// Define routes for all HTTP methods
app.get('/', handleRequest);
app.post('/', handleRequest);
app.put('/', handleRequest);
app.patch('/', handleRequest);
app.delete('/', handleRequest);

// Start the server and listen on port 3000
app.listen(port, () => {
    console.log(`Server is listening on localhost:${port}`);
});
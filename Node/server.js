// const http = require('http');

// const server = http.createServer(function(req, res){
//     res.writeHead(200, {'Content-Type': 'text/html'});
//     res.end('<h1>Hello World</h1>');
// });

// server.listen(8080, function(){
//     console.log('Server is running on port 8080');
// });
const express = require('express');

const server = express();
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World');
});


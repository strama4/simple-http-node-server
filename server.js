const fs = require('fs');
const http = require('http');

const hostname = 'localhost';
const port = 3000;

const server = http.createServer((request, response) => {
    response.end();
    fs.writeFile('hello-world.txt', 'Hello to this great world', 'utf8', (err) => {
        console.log(err);
    })
});

server.listen(port, hostname, () => {
    console.log('Server running at http://' + hostname + ':' + port + '/');
});


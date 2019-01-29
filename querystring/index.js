const got = require('got');
const url = require('url');
const { createServer } = require('http');
const PORT = process.env.PORT || 8080;

console.log(`Listening on http://localhost:${PORT}`)
createServer((req, res) => {
    const name = url.parse(req.url, true);
    if (name.query.name) {
        res.end(`Hello ${name.query.name}`);
    } else {
        res.end('Hello guest!');
    }
}).listen(PORT);
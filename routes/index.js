
const { createServer } = require('http');
const PORT = process.env.PORT || 8080;

console.log(`Listening on http://localhost:${PORT}`)
createServer((req, res) => {
    switch(req.url) {
        case '/':
            res.end(home);
            break;
        case '/about':
            res.end(about);
            break;
        case '/api/jackie':
            res.end(JSON.stringify(apiEndpoint));
            break;
        default:
            res.end('Default page');
    }
}).listen(PORT);

const home = 'Homepage';
const about = 'About';
const apiEndpoint = {name: 'Jackie', age: 33};
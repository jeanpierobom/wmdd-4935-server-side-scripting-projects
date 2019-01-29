const { createServer } = require('http')
const PORT = process.env.PORT || 8080

console.log(`Listening on http://localhost:${PORT}`)

createServer((req, res) => {
    res.end(`${html}`)
}).listen(PORT)

const html = `
    Hello World
`
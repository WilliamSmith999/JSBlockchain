const express = require('express')
const main = require('./main.js')
const p2p = require('./p2p.js')
const route = require('./testRoutes')

const app = express()

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(3000, () => console.log('Example app listening on port 3000!'))

const express = require('express')
const main = require('main.js')
const p2p = require('p2p.js')
const route = require('testRoutes')

const app = express()
const mainFunc = main()
const p2pFunc = p2p()
const routeFunc = route()

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(3000, () => console.log('Example app listening on port 3000!'))

routeFunc.

const express = require('express')
const main = require('main.js')
const app = express()
const mainFunc = main()

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(3000, () => console.log('Example app listening on port 3000!'))

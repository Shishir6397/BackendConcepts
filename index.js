const express = require('express')
const app = express()
const router = require('./src/router')
const port = 3000

app.use('/api',router)

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Examples app listening on port ${port}`)
})
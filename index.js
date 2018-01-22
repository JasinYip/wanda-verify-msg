const path = require('path')
const app = require('express')()

app.listen('2048')

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'))
})
const express = require('express')
const app = express()
const cors = require('cors');
app.use(cors())
const port = process.env.PORT || 5000

const chef = require('./chef.json')
app.get('/', (req, res) => {
  res.send('chef is cooking')
})
// getting chef card details:
app.get('/chef', (req, res) => {
    res.send(chef)
  })
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
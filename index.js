const express = require('express')
const app = express()
const cors = require('cors');
app.use(cors())
const port = process.env.PORT || 5000

const chef = require('./chef.json')
const ranna = require('./ranna.json')
app.get('/', (req, res) => {
  res.send('chef is cooking')
})
// getting chef card details:
app.get('/chef', (req, res) => {
    res.send(chef)
  })

  app.get('/ranna', (req, res) => {
    res.send(ranna)
  })

  app.get('/chef/:id',(req, res)=>{
    const id = req.params.id;
    console.log(id);
    if(id == 0){
      res.send(ranna);
    }
    else{
      const selectedChefsAllRanna = ranna.filter( n=> n.chef_id == id );
    res.send(selectedChefsAllRanna);
    }
    
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
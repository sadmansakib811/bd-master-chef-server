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
app.get('/chefbio/:id',(req, res)=>{
  const id = req.params.id;
  console.log(id);
  const selectedNews = chef.find(n=> n.id==id);
  res.send(selectedNews)
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

  // get individual recipes:
  app.get('/fullRecipe/:id',(req, res)=>{
    const id = req.params.id;
    console.log(id);
    const selectedNews = ranna.find(n=> n.recipe_id==id);
    res.send(selectedNews)
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
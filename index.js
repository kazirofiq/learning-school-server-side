const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());

const Port = process.env.Port || 5000;

const categories = require('./data/category.json');
const courses = require('./data/courses.json');
const checkout = require('./data/checkout.json');

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/educate-categories', (req, res) => {
    res.send(categories);
  });

  app.get('/category/:id', (req, res) => {

    const id = req.params.id;

    if(id === '08'){
        res.send(courses);
        
    }
    else{
        const category_educate = courses.filter(e => e.category_id === id);
        res.send(category_educate);
    }
});

app.get('/courses', (req, res) => {
    res.send(courses);
  })

app.get('/checkout', (req, res) => {
    res.send(checkout);
  })

  app.get('/courses/:id', (req, res) => {
    const id = req.params.id;
    const selectedEducate = courses.find(e => e.id === id);
    res.send(selectedEducate);
    
  });
  app.get('/checkout/:id', (req, res) => {
    const id = req.params.id;
    const selectedCheckout = courses.find(e => e.id === id);
    res.send(selectedCheckout);
    
  });

app.listen(Port, () => {
  console.log(`Example app listening on port ${Port}`)
})
const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());

const Port = process.env.Port || 5000;

const categories = require('./data/category.json');
const courses = require('./data/courses.json');

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

  app.get('/education/:id', (req, res) => {
    const id = req.params.id;
    const selectedEducate = courses.find(e => e._id === id);
    res.send(selectedEducate);
    // res.send(categories);
  });

app.listen(Port, () => {
  console.log(`Example app listening on port ${Port}`)
})
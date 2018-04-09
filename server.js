const express = require('express');
const app = express();

//our data

const fruits = require('./models/fruits.js')


//lets make an index route
app.get('/fruits', (req,res)=>{
	res.send(fruits);
})

//lets make a show route
app.get('/fruits/:id', (req, res)=>{
	res.send(fruits[req.params.id])
})



app.listen(3000,()=>{
	console.log('Server is listening');
})
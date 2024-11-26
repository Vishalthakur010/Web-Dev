// server instantiate
const express= require('express')
const app=express();

// used to parse request.body in express -> put or post
const bodyParser = require('body-parser')

// specifically parse json data and add it to the request.body object
app.use(bodyParser.json())

// activate the server on 5000 port
app.listen(5000, ()=>{
    console.log("server started at port no 5000")
})

// Routes
app.get('/', (request,response)=>{
    response.send("Ni how everyone, server is running")
})

app.post('/api/cars',(request,response)=>{
     const {name, brand}= request.body
     console.log(name)
     console.log(brand)
     response.send("car submitted successfully")
})

const mongoose= require('mongoose')

mongoose.connect('mongodb://localhost:27017/myDatabase')
.then(()=>{console.log("Connection successfull")})
.catch((error)=>{console.log("Received an error")})
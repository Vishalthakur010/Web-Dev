// server instanciate
const express= require('express')
const app = express()

//load config from .env file
require('dotenv').config()
const PORT = process.env.PORT || 5000

//middleware to parse json request body
app.use(express.json())

// start the server
app.listen(PORT, ()=>{
    console.log(`server started successfuly at ${PORT}`)
})

// connect the database
const {dbconnect}= require('./config/database')
dbconnect()

//deafult route
app.get('/', (req,res)=>{
    res.send(`<h1> This is the Home page </h1>`)
})

// import routes
const blogRoutes= require('./routes/blogs')
app.use('/api/v1',blogRoutes)
// app create
const express = require('express')
const app = express()

// port find
require('dotenv').config()
const PORT = process.env.PORT || 3000

// middleware
const fileupload = require("express-fileupload")
app.use(express.json()) // for parsing json
app.use(fileupload({
    useTempFiles: true,
    tempFileDir: '/tmp/'
})) // for parsing files

// connect with db
const db = require('./config/database')
db.connect()

// connect with cloudinary
require('./config/cloudinary').cloudinaryConnect()

// mounting api route
const upload = require('./routes/FileUpload')
app.use('/api/v1/upload', upload)

// server activation
app.listen(PORT, () => {
    console.log(`server successfully started at ${PORT}`)
})
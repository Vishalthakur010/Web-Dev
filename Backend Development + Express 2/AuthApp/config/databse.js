const mongoose = require('mongoose')
require('dotenv').config

exports.connect = (req, res) => {
    mongoose.connect(process.env.DATABASE_URL)
        .then(() => console.log("db connected successfully"))
        .catch((err) => {
            console.log("error in db connection", err)
            process.exit(1)
        })
}
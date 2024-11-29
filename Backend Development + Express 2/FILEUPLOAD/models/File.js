const mongoose = require('mongoose')
const nodemailer = require('nodemailer')
const { sendEmail } = require('./mail')
require('dotenv').config()

const fileSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    imageUrl: {
        type: String
    },
    tags: {
        type: String
    },
    email: {
        type: String
    }
})

//post middleware
fileSchema.post("save", async function (doc) {
    try {
        console.log("doc :", doc)

        await sendEmail(doc.email,doc.imageUrl)
    }
    catch (err) {
        console.error(err)
    }
})


const File = mongoose.model("File", fileSchema)
module.exports = File
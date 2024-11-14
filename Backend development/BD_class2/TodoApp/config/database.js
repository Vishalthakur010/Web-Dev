const mongoose=require("mongoose")

require('dotenv').config()

const dbconnect= () =>{
    mongoose.connect(process.env.DATABASE_URL)
    .then( ()=> console.log("DB connection is successful"))
    .catch( (error)=> {
        console.log("issue in db connection", error)
        process.exit(1)
    })
}
module.exports= dbconnect
const mongoose = require('mongoose')
require('dotenv').config()

exports.dbconnect = () =>{
    mongoose.connect(process.env.DATABASE_URL)
    .then( ()=> {
        console.log("DB connection is successful")

         // Log the connection state
         const connectionState = mongoose.connection.readyState;
         console.log("Mongoose connection state:", connectionState);  // Should log 1 for connected
    })
    .catch( (error)=>{
        console.log("error in db connection", error)
        process.exit(1)  // Terminate the application with a failure status
    })
}
// module.exports= dbconnect
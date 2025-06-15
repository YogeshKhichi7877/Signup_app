const mongoose = require('mongoose');
require('dotenv').config();

const mongoUrl = "mongodb+srv://lalitkhichi796:lalit526@cluster0.n7446ij.mongodb.net/" ;

mongoose.connect(mongoUrl);

const db = mongoose.connection ;

//define event listeners on the database connection .

db.on('connected' , ()=>{
    console.log("connected to the mongoose server ");
})

db.on('error' , (err)=>{
    console.log("an error accured " , err)
})

db.on('disconnected' , ()=>{
    console.log("server disconnected");
})

module.exports = db ;
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
   name :{
      type : String ,
      unique : true ,
      required : true 
   },
   age : {type : Number,
      required : true ,
   } ,
   password : {type : String ,
      required : true ,
      unique : true ,
   },
    email :{
      type : String ,
      required : true ,
    }
});

module.exports = mongoose.model('user' , userSchema);
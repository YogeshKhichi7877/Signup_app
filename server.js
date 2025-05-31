const express = require('express');
const app = express();
const bcrypt = require('bcrypt');
const db = require('./db');
const User = require('./models/user');
const jwt = require('jsonwebtoken');
require('dotenv').config();
const Private_key = process.env.Private_key ;

const cookieParser = require('cookie-parser');

const bodyParser = require('body-parser');
const { error } = require('console');
app.use(bodyParser.json());


app.use(cookieParser());

app.get('/' , (req ,res)=>{
    // res.cookie("name" , "yogesh");
    res.send("hello , Wellcome to our Website ");
})


// signup page 
app.post('/signup' , (req , res)=>{ 
     let {name , age , password } = req.body;
     console.log(name , age , password);

    bcrypt.genSalt(10 , (err , salt)=>{

        bcrypt.hash(password , salt , async (err , hash)=>{

            const user = await User.create({
                  name ,
                  age ,
                  password : hash ,
             });
             //jwt.sign(payload, secretOrPrivateKey , [options, callback])
             const token = jwt.sign({name , age } , Private_key  );
             res.cookie("token" , token);
             res.send(user);
        })
    } ) 
})

app.post('/login', async (req, res) => {
    try {
        const user = await User.findOne({ name: req.body.name });
        if (!user) {
            return res.send("invalid username or password");
        }
        bcrypt.compare(req.body.password, user.password, (err, isMatch) => {
            if (!isMatch) {
                return res.send("invalid username or password");
            }
            res.send(user);
        });
    } catch (err) {
        console.log(err);
        res.status(401).json({ err: err.message });
    }
});


app.get('/logout' , (req ,res)=>{
    res.cookie("token" , "");
    res.status(200).json({message : "you have successfully logout"});
})

app.listen(3000 , ()=>{
    console.log('http://localhost:3000');
});
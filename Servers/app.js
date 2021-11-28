const dotenv = require("dotenv");
const mongoose = require('mongoose');
const express = require("express");
const app = express();

dotenv.config({path:'./config.env'});

require('./db/conn'); 
// const User = require('./model/userSchema');
app.use(express.json());

app.use(require('./router/auth'));
// app.use(require('./router/cust'));

// const DB = process.env.DATABASE;

const PORT = process.env.PORT;

// const DB = 'mongodb+srv://mygarage:mygarage@cluster0.rcso7.mongodb.net/mygarage?retryWrites=true&w=majority'

// mongoose.connect(DB).then(()=>{
//     console.log(`connection successfull`)
// }).catch((err)=> console.log (`no connection`));

//Middleware
const middleware = (req,res,next)=>{
    console.log(`Hello Middleware`)
}

middleware();

// app.get('/', (req, res)=>{
//     res.send(`Hello world from the server app.js `)
// })

app.get('/feature',middleware, (req, res)=>{
    res.send(`Hello feacure world from the server `)
    next()
})

app.get('/pricing', (req, res)=>{
    res.send(`Hello pricing world from the server `)
})

app.get('/About', (req, res)=>{
    res.send(`Hello about world from the server `)
})

app.get('/Contact', (req, res)=>{
    res.send(`Hello contact world from the server `)
})


app.get('/FAQ', (req, res)=>{
    res.send(`Hello world from the server `)
})

app.get('/signin', (req, res)=>{
    res.send(`Hello login world from the server `)
})

app.get('/signup', (req, res)=>{
    res.send(`Hello resistration world from the server `)
})

app.listen(3000, ()=>{
    console.log(`server is running at port number ${PORT}`)
})
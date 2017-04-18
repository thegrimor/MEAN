const express = require('express');
const path =require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');

const app = express();

const users = require('./routes/users');

//port number
const port = 3000;

//CORS Middleware
app.use(cors());

//body parser middleware
app.use(bodyParser.json());

app.use('/users',users);

//Index route
app.get('/', (req,res) =>{
    res.send('Invalid Endpoint');
});

//Start server
app.listen(port, ()=>{
    console.log('Server started in '+port);
});
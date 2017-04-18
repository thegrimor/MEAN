const express = require('express');
const path =require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');
const config = require('./config/database')

mongoose.connect(config.database);

//mongo on connection
mongoose.connection.on('connected', () => {
    console.log('Connected to database '+config.database);
});

//error mongo connection
mongoose.connection.on('error', (err) => {
    console.log('database error '+err);
});

const app = express();

const users = require('./routes/users');

//port number
const port = 3000;

//CORS Middleware
app.use(cors());

//set static folder
app.use(express.static(path.join(__dirname,'public')));

//body parser middleware
app.use(bodyParser.json());

app.use(passport.initialize());
app.use(passport.session());

require ('./config/passport')(passport);

app.use('/users',users);

//Index route
app.get('/', (req,res) =>{
    res.send('Invalid Endpoint');
});

//Start server
app.listen(port, ()=>{
    console.log('Server started in '+port);
});
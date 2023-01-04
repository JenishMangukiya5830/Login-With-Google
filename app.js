const express = require('express');

const app = express();

const port = 2500;

const db = require('./config/mongoose');

const login = require('./models/loginModel');

const passport = require('passport');

const passportgoogle = require('./config/passport');

const cookie = require('cookie-parser');

const session = require('express-session');

app.use(express.urlencoded());

app.use(session({
    secret : 'jenish',
    saveUninitialized : false,
    resave : false,
    cookie : {
        maxAge : 1000*60*60*24
    }
}));

app.use(passport.initialize());

app.use(passport.session())

app.use(cookie());

app.set('view engine','ejs');

app.use('/',require('./routes'));

app.listen(port,(err) => {
    if(err)
    {
        console.log('Server not Startiing');
    }
    console.log('Server Startiing on port ' + port);
})
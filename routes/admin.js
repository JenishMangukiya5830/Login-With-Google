const express = require('express');
const passport = require('passport');

const router = express.Router();

const logincontroller = require('../controllers/loginController');

router.get('/',logincontroller.get);

router.post('/loginData',logincontroller.insert);

router.get('/google',passport.authenticate('google',{scope : ['profile','email']}));

router.get('/index/redirect',passport.authenticate('google'),logincontroller.google);

router.get('/logout',logincontroller.logout)



module.exports = router
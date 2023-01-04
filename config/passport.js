const passport = require('passport');

const login = require('../models/loginModel');

const passportgoogleauth = require('passport-google-oauth20').Strategy;

passport.use(new passportgoogleauth({
    callbackURL : "/admin/index/redirect",
    clientID : "762786439360-stioa3gurc2fnpk40kmhplg1mg449o74.apps.googleusercontent.com",
    clientSecret : "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",
},(accessToken,refreshToken,profile,done) => {    
    console.log(profile);

    login.findOne({googleId : profile.id},(err,user) => {
        if(user)
        {
            return done(null,user);
        }
        else
        {
            new login({
                googleId : profile.id,
                username : profile.displayName
            }).save().then((newuser) => {
                // console.log(newuser);
                return done(null,newuser);
            })
        }
    })
}));

passport.serializeUser((profile,done) => {
    return done(null,profile.id);
});

passport.deserializeUser((id,done) => {
    login.findById(id,(err,user) => {
        // console.log(user);
        return done(null,user);
    })
});

passport.checkuserlogin = (req,res,next) => {
    console.log(req.isAuthenticated());
    if(req.isAuthenticated())
    {
        return next();
    }
    return res.redirect('/admin');
};

// passport.checkloginin = (req,res,next) => {
//     console.log(req.isAuthenticated());
//     if(req.isAuthenticated())
//     {
//         return next();
//     }
//     return res.redirect('back')
// }


module.exports.get = (req,res) => {
    return res.render('login');
}

module.exports.insert = (req,res) => {
 console.log(req.body);
}

module.exports.google = (req,res) => {
    // console.log(req.user);
    return res.render('index',{
        user : req.user
    });
}

module.exports.logout = (req,res) => {
    req.session  = null;
    req.logout(() => {
        res.redirect('/admin');
    });
}
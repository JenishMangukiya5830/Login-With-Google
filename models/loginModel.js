const mongoose = require('mongoose');

const loginschema = mongoose.Schema({
    googleId : {
        type : String,
        required : true
    },
    username : {
        type :String,
        required : true
    }
})

module.exports = mongoose.model('google',loginschema);
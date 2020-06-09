// user.js file (server/models/user.js)

let mongoose = require('mongoose');
let Schema = mongoose.Schema;

var User = new Schema({
    name: {
        type: String,
        required : [ true, 'name is required'],
        lowercase : true
    },
    email: {
        type: String,
        required : [ true, 'email is required'],
        unique : true,
        lowercase : true
    },
    password: {
        type: String,
        required : [ true, 'password is required']
    },
    roles: {
        type: Array,
        default: "NORMAL"
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('User', User);
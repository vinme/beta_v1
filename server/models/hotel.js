// shop.js file (server/models/shop.js)

let mongoose = require('mongoose');
let Schema = mongoose.Schema;

var Hotel = new Schema({
    code: {
        type: String,
        required : [ true, 'code is required']
    },
    name: {
        type: String,
        required : [ true, 'name is required']
    },
    motto: {
        type: String,
        required : [ true, 'motto is required']
    },
    shortdescription: {
        type: String,
        required : [ true, 'short description is required']
    },
    address: {
        type: String,
        required : [ true, 'address is required'],
    },
    address2: {
        type: String
    },
    city: {
        type: String,
        required : [ true, 'city id is required']
    },
    state: {
        type: String,
        required : [ true, 'state id is required']
    },
    country: {
        type: String,
        required : [ true, 'country id is required']
    },
    zipcode:{
        type: String,
        required : [ true, 'zipcode required']
    },
    telephone:{
        type: String,
        required : [ true, 'telephone no is required']
    },
    fax:{
        type: String,
    },
    tollfree:{
        type: String,
    },
    email:{
        type: String,
    },
    image:{
        type: String,
    },
    images:{
        type: Array
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Hotel', Hotel);
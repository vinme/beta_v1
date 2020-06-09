// shop.js file (server/models/shop.js)

let mongoose = require('mongoose');
let Schema = mongoose.Schema;

var Shop = new Schema({
    name: {
        type: String,
        required : [ true, 'name is required']
    },
    address: {
        type: String,
        required : [ true, 'address is required'],
    },
    description: {
        type: String,
        required : [ true, 'description is required']
    },
    city: {
        type: String,
        required : [ true, 'city is required']
    },
    country: {
        type: String,
        required : [ true, 'country is required']
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Shop', Shop);
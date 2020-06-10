// v1.js file   (server/routes/apis/v1.js)

const userController = require('../../controllers/apis/v1/users');
const authController = require('../../controllers/apis/v1/auth');
const shopController = require('../../controllers/apis/v1/shops');
const hotelController = require('../../controllers/apis/v1/hotel');

const express = require('express');
let router = express.Router();
router.use('/users', userController);
router.use('/auth', authController);
router.use('/shops', shopController);
router.use('/hotel', hotelController);
module.exports = router;
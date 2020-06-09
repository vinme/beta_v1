// v1.js file   (server/routes/apis/v1.js)

const userController = require('../../controllers/apis/v1/users');
const authController = require('../../controllers/apis/v1/auth');
const shopController = require('../../controllers/apis/v1/shops');

const express = require('express');
let router = express.Router();
router.use('/users', userController);
router.use('/auth', authController);
router.use('/shops', shopController);
module.exports = router;
//shops.js (server/controllers/apis/v1/shops.js)

const express = require('express');
const shopService = require('../../../services/v1/shops/shops');
const authClientRequest = require('../../../middlewares/authGuard');
const validation = require('../../../middlewares/validation');
let router = express.Router();

router.get('/:shopId', authClientRequest.authClientToken ,shopService.getShopDetails);
router.get('/', authClientRequest.authClientToken ,shopService.getAllShops);
router.post('/new', authClientRequest.authClientToken, validation.validateShopBody(), shopService.createNewShop);

module.exports = router;
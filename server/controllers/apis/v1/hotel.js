//hotel.js (server/controllers/apis/v1/hotel.js)

const express = require('express');
const hotelService = require('../../../services/v1/hotel/hotel');
const authClientRequest = require('../../../middlewares/authGuard');
const validation = require('../../../middlewares/validation');
let router = express.Router();

router.get('/:hotelId', authClientRequest.authClientToken ,hotelService.getHotelDetails);
router.get('/', authClientRequest.authClientToken ,hotelService.getHotels);
router.post('/new', authClientRequest.authClientToken, validation.validateHotelBody(), hotelService.createHotel);
router.post('/update/:hotelId', authClientRequest.authClientToken, validation.validateHotelBody(), hotelService.updateHotel);
router.post('/delete/:hotelId', authClientRequest.authClientToken,  hotelService.deleteHotel);

module.exports = router;
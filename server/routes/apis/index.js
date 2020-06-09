// index.js file   (server/routes/apis/index.js)

const express = require('express');
const v1ApiController = require('./v1');
let router = express.Router();
router.use('/v1', v1ApiController);
module.exports = router;
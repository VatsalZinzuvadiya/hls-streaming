const express = require('express');
const { refreshToken } = require('../controller/auth');

const router = express.Router();

router.post('/test', testController);


module.exports = router;

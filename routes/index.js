const express = require('express');

const router = express.Router();

router.use('/admin',require('./admin'))

module.exports = router
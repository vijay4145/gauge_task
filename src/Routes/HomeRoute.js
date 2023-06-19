const express = require('express');
const router = express.Router();
const HomeController = require('../Controller/HomeController');

router.get('/', HomeController.get);

module.exports = router;
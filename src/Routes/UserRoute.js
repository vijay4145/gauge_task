const express = require('express');
const UserController = require('../Controller/UserController');
const router = express.Router();

router.get('/', UserController.getUserList);
router.get('/:id', UserController.getById);

module.exports = router;
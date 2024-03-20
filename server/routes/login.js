const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController')

//POST
router.post('/', userController.findUser);

module.exports = router;
const express = require('express');

const router = express.Router();
const userController = require("../../controllers/UserController");

router.post('/signup', userController.signup);
router.post('/signin', userController.signin);
router.post('/access-token', userController.generateAccessToken);

module.exports = router;
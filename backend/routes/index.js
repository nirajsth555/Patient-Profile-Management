const express = require('express');
const router = express.Router();

const allergy = require('./Allergy/index');
const user = require('./User/index');
const patient = require("./Patient/index");
const authenticate = require('./../middleware/authenticate');

router.use('/users', user);
router.use('/allergies', authenticate, allergy);
router.use('/patients', authenticate, patient);

module.exports = router;
const express = require('express');
const router = express.Router();

const allergy = require('./Allergy/index');
const user = require('./User/index');
const patient = require("./Patient/index");

router.use('/users', user);
router.use('/allergies', allergy);
router.use('/patients', patient);

module.exports = router;
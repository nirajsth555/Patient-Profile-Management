const express = require('express');
const router = express.Router();

const allergy = require('./Allergy/index');
const user = require('./User/index');

router.use('/users', user);
router.use('/allergies', allergy);

module.exports = router;
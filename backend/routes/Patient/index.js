const express = require('express');

const router = express.Router();
const { store, index, show, update, remove } = require("../../controllers/PatientController");

router.post('/', store);
router.get('/', index);
router.get('/:id', show);
router.put('/:id', update);
router.delete('/:id', remove);

module.exports = router;
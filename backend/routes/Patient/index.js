const express = require('express');
const router = express.Router();

const singleImageHandlerMiddleware = require("../../middleware/imageHandler");

const { store, index, show, update, remove } = require("../../controllers/PatientController");

router.post('/', singleImageHandlerMiddleware, store);
router.get('/', index);
router.get('/:id', show);
router.put('/:id', singleImageHandlerMiddleware, update);
router.delete('/:id', remove);

module.exports = router;
const express = require('express');

const router = express.Router();
const { getAllergies, createAllergy, allergyDetail, updateAllergyDetail, removeAllergy } = require("../../controllers/AllergyController");

router.get('/', getAllergies);
router.post('/', createAllergy);
router.get('/:id', allergyDetail);
router.put("/:id", updateAllergyDetail);
router.delete("/:id", removeAllergy);

module.exports = router;
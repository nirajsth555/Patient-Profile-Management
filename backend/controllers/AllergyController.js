const { getAllAllergies, createNewAllergy, allergyDetailById, updateAllergy, deleteAllergy } = require("../services/AllergyService");
const { success, code, error } = require("../helpers/constants");
const { successResponse } = require("../helpers/apiResponse");
const { createAllergyRequestValidate } = require("../validations/Allergy");

const getAllergies = async (req, res, next) => {
    try {
        const allergies = await getAllAllergies();
        return res.status(code.SUCCESS).json(successResponse(allergies, success.ALLERGIES_LISTED));
    } catch (err) {
        next();
    }
}

const createAllergy = async (req, res, next) => {
    try {
        await createAllergyRequestValidate(req.body);
        const { allergy } = req.body;
        const createdAllergy = await createNewAllergy({ allergy });
        return res.status(code.RECORD_CREATED).json(successResponse(createdAllergy, success.ALLERGY_CREATED, code.RECORD_CREATED));
    } catch (err) {
        next(err);
    }
}

const allergyDetail = async (req, res, next) => {
    try {
        const allergy = await allergyDetailById(req.params.id);
        return res.status(code.SUCCESS).json(successResponse(allergy, success.ALLERGY_DETAIL));
    } catch (err) {
        next(err);
    }
}

const updateAllergyDetail = async (req, res, next) => {
    try {
        await createAllergyRequestValidate(req.body);
        const { allergy } = req.body;
        const updatedAllergy = await updateAllergy(req.params.id, { allergy });
        return res.status(code.SUCCESS).json(successResponse(updatedAllergy, success.ALLERGY_UPDATED));
    } catch (err) {
        next(err);
    }
}

const removeAllergy = async (req, res, next) => {
    try {
        await deleteAllergy(req.params.id);
        return res.status(code.SUCCESS).json(successResponse([], success.ALLERGY_DELETED));
    } catch (err) {
        next(err);
    }
}

module.exports = {
    getAllergies,
    createAllergy,
    allergyDetail,
    updateAllergyDetail,
    removeAllergy
}
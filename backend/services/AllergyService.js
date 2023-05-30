const { getAllergies, createAllergy, getAllergyById, updateAllergyById, deleteAllergyById } = require("../models/AllergyModel");
const { error } = require("../helpers/constants");

const getAllAllergies = async () => {
    try {
        const allergies = await getAllergies();
        return allergies;
    } catch (err) {
        throw err;
    }
}

const createNewAllergy = async (data) => {
    try {
        const allergy = await createAllergy(data);
        return allergy;
    } catch (err) {
        throw err;
    }
}

const allergyDetailById = async (allergyId) => {
    try {
        const allergy = await getAllergyById(allergyId);
        if (!allergy) {
            throw new Error(error.ALLERGY_NOT_FOUND)
        }
        return allergy;
    } catch (err) {
        throw err;
    }
}

const updateAllergy = async (allergyId, data) => {
    try {
        const allergy = await getAllergyById(allergyId);
        if (!allergy) {
            throw new Error(error.ALLERGY_NOT_FOUND)
        }
        const updatedAllergy = await updateAllergyById(allergyId, data);
        return updatedAllergy;
    } catch (err) {
        throw err
    }
}

const deleteAllergy = async (allergyId) => {
    try {
        const allergy = await getAllergyById(allergyId);
        if (!allergy) {
            throw new Error(error.ALLERGY_NOT_FOUND)
        }
        return await deleteAllergyById(allergyId);
    } catch (err) {
        throw err;
    }
}

module.exports = {
    getAllAllergies,
    createNewAllergy,
    allergyDetailById,
    updateAllergy,
    deleteAllergy
}
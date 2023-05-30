const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const getAllergies = async () => {
    try {
        const allergies = await prisma.allergy.findMany({
            orderBy: [
                {
                    allergy: 'asc'
                }
            ]
        });
        return allergies;
    } catch (err) {
        throw err;
    }
}

const createAllergy = async (payload) => {
    try {
        const allergy = await prisma.allergy.create({ data: payload });
        return allergy;
    } catch (error) {
        throw err;
    }
}

const getAllergyById = async (allergyId) => {
    try {
        return await prisma.allergy.findUnique({
            where: {
                id: parseInt(allergyId)
            }
        })
    } catch (err) {
        throw err;
    }
}

const updateAllergyById = async (allergyId, payload) => {
    try {
        const allergy = await prisma.allergy.update({
            where: {
                id: parseInt(allergyId)
            },
            data: payload
        });
        return allergy
    } catch (err) {
        throw err;
    }
}

const deleteAllergyById = async (allergyId) => {
    try {
        await prisma.allergy.delete({
            where: {
                id: parseInt(allergyId)
            }
        });
        return true;
    } catch (err) {
        throw err;
    }
}

module.exports = {
    getAllergies,
    createAllergy,
    getAllergyById,
    updateAllergyById,
    deleteAllergyById
}
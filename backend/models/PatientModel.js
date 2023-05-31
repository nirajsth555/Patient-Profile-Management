const { PrismaClient } = require('@prisma/client');
const { error } = require('../helpers/constants');
const prisma = new PrismaClient();

const getPatients = async () => {
    try {
        const patients = await prisma.patient.findMany({
            orderBy: [
                {
                    needs_special_attention: 'desc'
                },
                {
                    first_name: 'asc'
                }
            ],
            include: {
                allergies: {
                    include: {
                        allergy: true
                    }
                }
            }
        });
        return patients;
    } catch (err) {
        throw err;
    }
}

const createPatient = async (payload) => {
    try {
        const { allergies, ...data } = payload
        const patient = await prisma.patient.create({
            data
        });
        if (allergies && allergies.length > 0) {
            await createPatientAllergy(patient.id, allergies)
        }
        return patient;
    } catch (err) {
        console.log(err);
        throw err;
    }
}

const getUniquePatient = async (queryParams) => {
    try {
        const patient = await prisma.patient.findUnique({
            where: queryParams,
            include: {
                allergies: {
                    include: {
                        allergy: true
                    }
                }
            }
        });
        if (!patient) {
            throw new Error(error.PATIENT_NOT_FOUND);
        }
        return patient;
    } catch (err) {
        throw err;
    }
}

const updatePatientById = async (patientId, payload) => {
    try {
        const { allergies, ...data } = payload;
        const patient = await prisma.patient.update({
            where: {
                id: patientId
            },
            data: {
                ...data,
                allergies: {
                    deleteMany: {},
                    create: allergies?.map((allergy) => ({
                        allergy_id: parseInt(allergy)
                    }))
                }
            },
            include: {
                allergies: {
                    include: {
                        allergy: true
                    }
                }
            }
        })
        return patient;
    } catch (err) {
        throw err;
    }
}

const deletePatientById = async (patientId) => {
    try {
        await prisma.$transaction(async (prisma) => {
            await prisma.patientAllergy.deleteMany({
                where: {
                    patient_id: parseInt(patientId)
                }
            });

            await prisma.patient.delete({
                where: {
                    id: parseInt(patientId)
                }
            });
        });
        return true;
    } catch (err) {
        throw err;
    }
};

const createPatientAllergy = async (patientId, allergies) => {
    try {
        await prisma.patientAllergy.createMany({
            data: allergies.map((allergy) => ({
                allergy_id: parseInt(allergy),
                patient_id: patientId
            }))
        });
        return true;
    } catch (err) {
        throw err;
    }
}

module.exports = {
    getPatients,
    createPatient,
    getUniquePatient,
    updatePatientById,
    deletePatientById
}

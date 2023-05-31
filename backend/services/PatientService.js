const { error } = require("../helpers/constants");
const { createPatient, getPatients, getUniquePatient, updatePatientById, deletePatientById } = require("../models/PatientModel")
const storePatient = async (payload) => {
    try {
        const { email } = payload;
        let checkExistingUser;
        try {
            checkExistingUser = await getUniquePatient({ email });
        } catch (err) {
            const patient = await createPatient(payload);
            return patient;
        }
        if (checkExistingUser) {
            throw new Error(error.PATIENT_EMAIL_EXIST);
        }
    } catch (err) {
        throw err;
    }
}

const listPatient = async () => {
    try {
        const patientList = await getPatients();
        return patientList;
    } catch (err) {
        throw err;
    }
}

const patientDetailById = async (patientId) => {
    try {
        const patient = await getUniquePatient({ id: patientId });
        return patient;
    } catch (err) {
        throw err;
    }
}

const updatePatient = async (patientId, payload) => {
    try {
        const { needs_special_attention } = payload;
        const data = {
            ...payload,
            needs_special_attention: (needs_special_attention === "true" || needs_special_attention === "TRUE" || needs_special_attention === "1") ? true : false,
        };
        const patient = await getUniquePatient({ id: patientId });
        if (!patient) {
            throw new Error(error.PATIENT_NOT_FOUND);
        }
        const updatedPatient = updatePatientById(patientId, data);
        return updatedPatient;
    } catch (err) {
        throw err;
    }
}

const deletePatient = async (patientId) => {
    try {
        const patient = await getUniquePatient({ id: patientId });
        if (!patient) {
            throw new Error(error.PATIENT_NOT_FOUND);
        }
        await deletePatientById(patientId);
        return true;
    } catch (err) {
        throw err;
    }
}

module.exports = {
    storePatient,
    listPatient,
    patientDetailById,
    updatePatient,
    deletePatient
}
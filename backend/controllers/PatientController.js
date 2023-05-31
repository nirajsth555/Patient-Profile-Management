const { successResponse } = require("../helpers/apiResponse");
const { code, success } = require("../helpers/constants");
const { listPatient, storePatient, patientDetailById, updatePatient, deletePatient } = require("../services/PatientService");
const { createPatientRequestValidate } = require("../validations/Patient");
const cloudinaryService = require("../services/CloudinaryService");

const index = async (req, res, next) => {
    try {
        const patientList = await listPatient();
        return res.status(code.SUCCESS).json(successResponse(patientList, success.PATIENTS_LISTED));
    } catch (err) {
        next(err);
    }
};

const store = async (req, res, next) => {
    try {
        await createPatientRequestValidate(req.body);
        if (req.fileName) {
            req.body.image = req.fileURL;
        }
        const patient = await storePatient(req.body);
        return res.status(code.RECORD_CREATED).json(successResponse(patient, success.PATIENT_CREATED));
    } catch (err) {
        // if (req.fileName) {
        //     await cloudinaryService.deleteImage(req.fileName);
        // }
        next(err);
    }
}

const show = async (req, res, next) => {
    try {
        const patient = await patientDetailById(Number(req.params.id));
        return res.status(code.SUCCESS).json(successResponse(patient, success.PATIENT_DETAIL));
    } catch (err) {
        next(err);
    }
}

const update = async (req, res, next) => {
    try {
        await createPatientRequestValidate(req.body);
        if (req.fileName) {
            req.body.image = req.fileURL;
        }
        const patient = await updatePatient(Number(req.params.id), req.body);
        return res.status(code.SUCCESS).json(successResponse(patient, success.PATIENT_UPDATED));
    } catch (err) {
        next(err);
    }
}

const remove = async (req, res, next) => {
    try {
        await deletePatient(Number(req.params.id));
        return res.status(code.SUCCESS).json(successResponse([], success.PATIENT_DELETED));
    } catch (err) {
        next(err);
    }
}

module.exports = {
    index,
    store,
    show,
    update,
    remove
}
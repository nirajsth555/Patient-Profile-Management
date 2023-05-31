const validate = require("../index");
const createPatientSchema = require("./createPatientSchema");

const createPatientRequestValidate = validate(createPatientSchema);

module.exports = {
    createPatientRequestValidate
}
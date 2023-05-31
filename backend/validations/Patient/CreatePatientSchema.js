const yup = require("yup");
const createPatientSchema = yup.object({
    first_name: yup.string().required(),
    last_name: yup.string().required(),
    email: yup.string().email().required(),
    date_of_birth: yup.string().required(),
    contact: yup.string().required(),
    address: yup.string(),
    needs_special_attention: yup.bool(),
    allergies: yup.array().of(yup.number().integer())
});

module.exports = createPatientSchema;
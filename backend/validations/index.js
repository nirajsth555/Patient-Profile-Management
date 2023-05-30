const { error, code } = require("../helpers/constants");
const validate = (schema) => async (payload) => {
    try {
        await schema.validate(payload, { abortEarly: false });
    } catch (err) {
        throw {
            message: error.VALIDATION_FAILED,
            statusCode: code.VALIDATION_FAILED,
            errors: formatValidationErrors(err),
        };
    }
};

// Format validation errors for Yup
const formatValidationErrors = (error) => {
    const errors = {};
    error.inner.forEach((detail) => {
        const key = detail.path;
        const message = detail.message.replace(/['"]/g, '');
        if (!errors[key]) {
            errors[key] = [];
        }
        errors[key].push(message);
    });
    return errors;
};

module.exports = validate;

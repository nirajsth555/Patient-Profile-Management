const { validationFailedResponse, errorResponse } = require("../helpers/apiResponse");
const { error, code } = require("../helpers/constants");

const errorHandlerMiddleware = (err, req, res, next) => {
    const { message } = err;
    switch (message) {
        case error.USER_EMAIL_EXIST:
        case error.PATIENT_EMAIL_EXIST:
            return res.status(code.RECORD_ALREADY_EXISTS).json(errorResponse(err.message, code.RECORD_ALREADY_EXISTS));
        case error.ALLERGY_NOT_FOUND:
        case error.PATIENT_NOT_FOUND:
            return res.status(code.RECORD_NOT_FOUND).json(errorResponse(err.message, code.RECORD_NOT_FOUND));
        case error.VALIDATION_FAILED:
            const response = validationFailedResponse(err.errors);
            return res.status(code.VALIDATION_FAILED).json(response);
        default:
            return res.status(code.INTERNAL_SERVER_ERROR).json(errorResponse())
    }
};

module.exports = errorHandlerMiddleware;

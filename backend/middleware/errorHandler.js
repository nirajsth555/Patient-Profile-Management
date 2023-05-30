const { validationFailedResponse, errorResponse } = require("../helpers/apiResponse");
const { error } = require("../helpers/constants");

const errorHandlerMiddleware = (err, req, res, next) => {
    const { message } = err;
    switch (message) {
        case error.USER_EMAIL_EXIST:
            return res.status(409).json(errorResponse(err.message, 409));
        case error.VALIDATION_FAILED:
            const response = validationFailedResponse(err.errors);
            return res.status(response.statusCode).json(response);
        default:
            return res.status(500).json(errorResponse())
    }
};

module.exports = errorHandlerMiddleware;

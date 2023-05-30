const { successResponse } = require("../helpers/apiResponse");
const { createUser } = require("../services/UserService");
const { createUserRequestValidate } = require("../validations/User/index");
const { code, success } = require("../helpers/constants");

exports.signup = async (req, res, next) => {
    try {
        const { body } = req;
        await createUserRequestValidate(body);
        const user = await createUser(body);
        return res.status(code.RECORD_CREATED).json(successResponse(user, success.USER_CREATED, code.RECORD_CREATED));
    } catch (err) {
        next(err);
    }
}
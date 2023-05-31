const { successResponse } = require("../helpers/apiResponse");
const { createUser } = require("../services/UserService");
const { createUserRequestValidate, userSignInRequestValidate, createTokenRequestValidate } = require("../validations/User/index");
const { code, success } = require("../helpers/constants");
const { authenticate, generateToken } = require("../services/AuthenticationService");

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

exports.signin = async (req, res, next) => {
    try {
        await userSignInRequestValidate(req.body);
        const { email, password } = req.body;
        const data = await authenticate(email, password);
        return res.status(code.SUCCESS).json(successResponse(data, success.AUTHENTICATION_SUCCESS));
    } catch (err) {
        next(err);
    }
}

exports.generateAccessToken = async (req, res, next) => {
    try {
        await createTokenRequestValidate(req.body);
        const { refresh_token } = req.body;
        const data = await generateToken(refresh_token);
        return res.status(code.SUCCESS).json(successResponse(data, success.TOKEN_GENERATED));
    } catch (err) {
        next(err);
    }
}
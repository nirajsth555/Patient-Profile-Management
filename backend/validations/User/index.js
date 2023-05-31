const validate = require("../index");
const createUserSchema = require("./createUserSchema");
const userSignInSchema = require('./UserSignInSchema');
const createTokenSchema = require("./CreateTokenSchema");

const createUserRequestValidate = validate(createUserSchema);
const userSignInRequestValidate = validate(userSignInSchema);
const createTokenRequestValidate = validate(createTokenSchema);

module.exports = {
    createUserRequestValidate,
    userSignInRequestValidate,
    createTokenRequestValidate
}; 
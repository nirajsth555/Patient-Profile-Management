const validate = require("../index");
const createUserSchema = require("./createUserSchema");

const createUserRequestValidate = validate(createUserSchema);

module.exports = {
    createUserRequestValidate
}; 
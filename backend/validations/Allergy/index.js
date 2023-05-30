const validate = require("../index");
const createAllergySchema = require("./createAllergySchema");

const createAllergyRequestValidate = validate(createAllergySchema);

module.exports = {
    createAllergyRequestValidate
}
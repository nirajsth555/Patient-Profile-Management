const yup = require("yup");
const createAllergySchema = yup.object({
    allergy: yup.string().required()
});

module.exports = createAllergySchema;
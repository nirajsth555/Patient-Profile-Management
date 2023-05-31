const yup = require("yup");
const userSignInSchema = yup.object({
    email: yup.string().email().required(),
    password: yup.string().required(),
});

module.exports = userSignInSchema;
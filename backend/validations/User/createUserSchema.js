const yup = require("yup");
const createUserSchema = yup.object({
    email: yup.string().email().required(),
    name: yup.string().required(),
    password: yup.string().min(6).required(),
    confirm_password: yup.string().oneOf([yup.ref('password')]).required()
});

module.exports = createUserSchema;
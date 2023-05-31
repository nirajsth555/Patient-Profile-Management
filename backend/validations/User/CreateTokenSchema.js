const yup = require("yup");
const createTokenSchema = yup.object({
    refresh_token: yup.string().required(),
});

module.exports = createTokenSchema;
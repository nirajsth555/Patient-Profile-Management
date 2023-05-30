const { createUser, findUser } = require('../models/UserModel');
const bcrypt = require('bcrypt');
const { error } = require("../helpers/constants");

module.exports = {
    createUser: async (data) => {
        try {
            const { name, email, password } = data;
            let checkExistingUser;
            try {
                checkExistingUser = await findUser({ email });
            } catch (error) {
                const hashedPassword = await bcrypt.hash(password, 10);
                const user = await createUser({ name, email, password: hashedPassword });
                return user;
            }
            if (checkExistingUser) {
                throw new Error(error.USER_EMAIL_EXIST);
            }
        } catch (err) {
            throw err
        }

    }
}
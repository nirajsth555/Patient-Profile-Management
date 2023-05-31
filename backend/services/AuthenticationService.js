const { generateAccessToken, generateRefreshToken, validateRefreshToken } = require("../helpers/authenticationToken");
const { compare } = require("../helpers/bcrypt");
const { error } = require("../helpers/constants");
const { findUser } = require("../models/UserModel");

const authenticate = async (email, password) => {
    try {
        const user = await findUser({ email });
        if (!user) {
            throw new Error(error.USER_NOT_FOUND);
        }
        const check = await compare(user.password, password);
        if (!check) {
            throw new Error(error.AUTHENTICATION_FAILED);
        }
        const access_token = generateAccessToken({ id: user.id });
        const refresh_token = generateRefreshToken({ id: user.id });
        return { access_token, refresh_token };
    } catch (err) {
        throw err;
    }
}

const generateToken = async (refresh_token) => {
    try {
        const data = await validateRefreshToken(refresh_token);
        const { id } = data;
        const access_token = generateAccessToken({ id });
        return { access_token };
    } catch (err) {
        throw err;
    }
}

module.exports = {
    authenticate,
    generateToken
}
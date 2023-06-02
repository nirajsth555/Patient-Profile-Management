const jwt = require('jsonwebtoken');
const { error } = require('./constants');

const generateAccessToken = (payload, expiresIn = 60) => {
    try {
        const token = jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET, {
            expiresIn
        });
        return token;
    } catch (err) {
        throw err;
    }

};

const generateRefreshToken = (payload, expiresIn = "1h") => {
    try {
        const token = jwt.sign(payload, process.env.REFERSH_TOKEN_SECRET, {
            expiresIn
        });
        return token;
    } catch (err) {
        throw err;
    }
};

const validateRefreshToken = (refreshToken) => {
    try {
        const decodedToken = jwt.verify(refreshToken, process.env.REFERSH_TOKEN_SECRET);
        return decodedToken;
    } catch (err) {
        throw new Error(error.INVALID_REFRESH_TOKEN);
    }
}

const validateAccessToken = (accessToken) => {
    try {
        jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET);
        return true;
    } catch (err) {
        if (err?.name === "TokenExpiredError") {
            throw new Error(error.ACCESS_TOKEN_EXPIRED)
        }
        throw new Error(error.INVALID_ACCESS_TOKEN)
    }
}

module.exports = {
    generateAccessToken,
    generateRefreshToken,
    validateRefreshToken,
    validateAccessToken
}
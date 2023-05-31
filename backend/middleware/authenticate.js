const { errorResponse } = require("../helpers/apiResponse");
const { validateAccessToken } = require("../helpers/authenticationToken");
const { error, code } = require("../helpers/constants");

const authenticate = async (req, res, next) => {
    try {
        const header = req.headers.authorization;
        const token = header && header.split(' ')[1];
        if (!token) {
            return res.status(401).json(errorResponse(error.UNAUTHENTICATED, code.UNAUTHENTICATED));
        }
        await validateAccessToken(token);
        next();
    } catch (err) {
        return res.status(code.FORBIDDEN).json(errorResponse(err.message, code.FORBIDDEN))
    }

}

module.exports = authenticate;
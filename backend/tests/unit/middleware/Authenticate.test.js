const authenticate = require("../../../middleware/authenticate");
const { validateAccessToken } = require("../../../helpers/authenticationToken");
const { error, code } = require("../../../helpers/constants");
const { errorResponse } = require("../../../helpers/apiResponse");

jest.mock('../../../helpers/authenticationToken');

describe("Authenticate middleware test", () => {
    let req, res, next;

    beforeEach(() => {
        req = {
            headers: {
                authorization: "Bearer valid-token"
            }
        };

        res = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn()
        };

        next = jest.fn();
    });

    afterEach(() => {
        jest.clearAllMocks();
    })

    it("should call next if token is valid", async () => {
        validateAccessToken.mockResolvedValue(true);

        await authenticate(req, res, next);

        expect(validateAccessToken).toHaveBeenCalledTimes(1);
        expect(validateAccessToken).toHaveBeenCalledWith("valid-token");
        expect(next).toHaveBeenCalledTimes(1);
        expect(res.status).not.toHaveBeenCalled();
        expect(res.json).not.toHaveBeenCalled();
    });

    it("should return error response if validateAccessToken throws error", async () => {
        validateAccessToken.mockRejectedValue(new Error(error.ACCESS_TOKEN_EXPIRED));

        await authenticate(req, res, next);

        expect(validateAccessToken).toHaveBeenCalledTimes(1);
        expect(validateAccessToken).toHaveBeenCalledWith("valid-token");
        expect(next).not.toHaveBeenCalled();
        expect(res.status).toHaveBeenCalledWith(code.FORBIDDEN);
        expect(res.json).toHaveBeenCalledWith(errorResponse(error.ACCESS_TOKEN_EXPIRED, code.FORBIDDEN));


    });

    it("should throw error if authorization is not present in header", async () => {
        req.headers = {};

        await authenticate(req, res, next);

        expect(validateAccessToken).not.toHaveBeenCalled();
        expect(next).not.toHaveBeenCalled();
        expect(res.status).toHaveBeenCalledTimes(1);
        expect(res.status).toHaveBeenCalledWith(401);
        expect(res.json).toHaveBeenCalledTimes(1);
        expect(res.json).toHaveBeenCalledWith(errorResponse(error.UNAUTHENTICATED, code.UNAUTHENTICATED));
    });

    it("should throw error if token is missing", async () => {
        req.headers.authorization = null;

        await authenticate(req, res, next);

        expect(validateAccessToken).not.toHaveBeenCalled();
        expect(next).not.toHaveBeenCalled();
        expect(res.status).toHaveBeenCalledTimes(1);
        expect(res.status).toHaveBeenCalledWith(401);
        expect(res.json).toHaveBeenCalledTimes(1);
        expect(res.json).toHaveBeenCalledWith(errorResponse(error.UNAUTHENTICATED, code.UNAUTHENTICATED));
    });
})

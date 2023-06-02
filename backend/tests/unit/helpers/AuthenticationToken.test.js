const jwt = require('jsonwebtoken');
const { error } = require("../../../helpers/constants");
const { generateAccessToken, generateRefreshToken, validateAccessToken } = require("../../../helpers/authenticationToken");

jest.mock('jsonwebtoken');

describe("Authentication token service tests", () => {
    afterEach(() => {
        jest.clearAllMocks();
    });

    describe("generateAccessToken tests", () => {
        it("should generate an access token", () => {
            const payload = { userId: 123 };
            const expiresIn = 60;
            const generatedToken = "generated-token";

            jwt.sign.mockReturnValue(generatedToken);
            const result = generateAccessToken(payload, expiresIn);

            expect(result).toBe(generatedToken);
            expect(jwt.sign).toHaveBeenCalledTimes(1);
            expect(jwt.sign).toHaveBeenCalledWith(payload, process.env.ACCESS_TOKEN_SECRET, {
                expiresIn
            });
        });

        it("should throw an error if jwt.sign throws an error", () => {
            const payload = { userId: 123 };
            const expiresIn = 60;
            const mockedError = new Error('Failed to generate token');

            jwt.sign.mockImplementation(() => {
                throw mockedError;
            });

            expect(() => generateAccessToken(payload, expiresIn)).toThrow(mockedError);
            expect(jwt.sign).toHaveBeenCalledTimes(1);
            expect(jwt.sign).toHaveBeenCalledWith(payload, process.env.ACCESS_TOKEN_SECRET, {
                expiresIn
            });
        });
    });

    describe("generateRefreshToken tests", () => {
        it("should generate a refresh token", () => {
            const payload = { userId: 123 };
            const expiresIn = "1h";
            const generatedToken = "generated-token";

            jwt.sign.mockReturnValue(generatedToken);

            const result = generateRefreshToken(payload, expiresIn);

            expect(result).toBe(generatedToken);
            expect(jwt.sign).toHaveBeenCalledTimes(1);
            expect(jwt.sign).toHaveBeenCalledWith(payload, process.env.REFERSH_TOKEN_SECRET, {
                expiresIn
            });
        });

        it("should throw error if jwt.sign throws an error", () => {
            const payload = { userId: 123 };
            const expiresIn = 60;
            const mockedError = new Error('Failed to generate token');

            jwt.sign.mockImplementation(() => {
                throw mockedError;
            });

            expect(() => generateRefreshToken(payload, expiresIn)).toThrow(mockedError);
            expect(jwt.sign).toHaveBeenCalledTimes(1);
            expect(jwt.sign).toHaveBeenCalledWith(payload, process.env.REFERSH_TOKEN_SECRET, {
                expiresIn
            });
        });
    });

    describe("validateAccessToken tests", () => {
        it("should return true if access token is validated", () => {
            const accessToken = "access-token";

            jwt.verify.mockReturnValue(true);

            const result = validateAccessToken(accessToken);

            expect(result).toBe(true);
            expect(jwt.verify).toHaveBeenCalledTimes(1);
        });

        it("should throw error if jwt.verify throws TokenExpiredError", () => {
            const accessToken = 'access-token';

            const mockedError = { name: 'TokenExpiredError' };

            jwt.verify.mockImplementation(() => {
                throw mockedError;
            });

            expect(() => validateAccessToken(accessToken)).toThrow(new Error(error.ACCESS_TOKEN_EXPIRED));
            expect(jwt.verify).toHaveBeenCalledTimes(1);
        });

        it("should throw error if jwt.verify throws error", () => {
            const accessToken = 'access-token';
            const mockedError = new Error('Invalid access token');

            jwt.verify.mockImplementation(() => {
                throw mockedError;
            });

            expect(() => validateAccessToken(accessToken)).toThrow(new Error(error.INVALID_ACCESS_TOKEN));
            expect(jwt.verify).toHaveBeenCalledTimes(1);
        })
    })
})

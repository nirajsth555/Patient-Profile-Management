module.exports = {
    error: {
        USER_EMAIL_EXIST: "User already exists with this email",
        USER_NOT_FOUND: "User not found",
        USER_PASSWORD_MISMATCH: "Email or password donot match",

        AUTHENTICATION_FAILED: "Email or password donot match",
        UNAUTHENTICATED: "You are not authenticated",

        ALLERGY_NOT_FOUND: "Allergy not found",

        PATIENT_NOT_FOUND: "Patient not found",
        PATIENT_EMAIL_EXIST: "Patient already exists with this email",

        VALIDATION_FAILED: "Validation failed",

        INVALID_ACCESS_TOKEN: "Invalid access token",
        ACCESS_TOKEN_EXPIRED: "Access token has expired",
        INVALID_REFRESH_TOKEN: "Invalid refresh token",
        REFRESH_TOKEN_EXPIRED: "Refresh token has expired",

        BCRYPT_COMAPRISON_FAILED: "Bcrypt comparison failed"
    },
    code: {
        SUCCESS: 200,
        BAD_REQUEST: 400,
        VALIDATION_FAILED: 422,
        RECORD_ALREADY_EXISTS: 409,
        RECORD_NOT_FOUND: 404,
        RECORD_CREATED: 201,
        INTERNAL_SERVER_ERROR: 500,
        FORBIDDEN: 403,
        UNAUTHENTICATED: 401
    },
    success: {
        USER_CREATED: "User created successfully",

        AUTHENTICATION_SUCCESS: "Login successfull",
        TOKEN_GENERATED: "New access token generated",

        ALLERGY_CREATED: "Allergy created successfully",
        ALLERGIES_LISTED: "List of allergy",
        ALLERGY_DETAIL: "Allergy detail",
        ALLERGY_UPDATED: "Allergy detail updated",
        ALLERGY_DELETED: "Allergy deleted successfully",

        PATIENTS_LISTED: "List of patient",
        PATIENT_CREATED: "Patient created successfully",
        PATIENT_DETAIL: "Patient detail",
        PATIENT_UPDATED: "Patient detail updated",
        PATIENT_DELETED: "Patient deleted successfully"
    }
}
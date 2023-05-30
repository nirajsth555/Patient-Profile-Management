module.exports = {
    error: {
        USER_EMAIL_EXIST: "User already exists with this email",
        USER_NOT_FOUND: "User not found",

        ALLERGY_NOT_FOUND: "Allergy not found",

        VALIDATION_FAILED: "Validation failed",
    },
    code: {
        SUCCESS: 200,
        BAD_REQUEST: 400,
        VALIDATION_FAILED: 422,
        RECORD_ALREADY_EXISTS: 409,
        RECORD_NOT_FOUND: 404,
        RECORD_CREATED: 201,
        INTERNAL_SERVER_ERROR: 500
    },
    success: {
        USER_CREATED: "User created successfully",

        ALLERGY_CREATED: "Allergy created successfully",
        ALLERGIES_LISTED: "List of allergy",
        ALLERGY_DETAIL: "Allergy detail",
        ALLERGY_UPDATED: "Allergy detail updated",
        ALLERGY_DELETED: "Allergy deleted successfully"
    }
}
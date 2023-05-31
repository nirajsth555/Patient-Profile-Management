const AllergyRequest = require('./Allergy/AllergyRequestSchema');
const AllergyResponse = require('./Allergy/AllergyResponseSchema');

const PatientRequest = require('./Patient/PatientRequestSchema');
const PatientResponse = require('./Patient/PatientResponseSchema');

const UserRequest = require('./User/UserRequestSchema');
const UserResponse = require('./User/UserResponseSchema');
const UserLoginRequest = require('./User/UserLoginRequestSchema');

module.exports = {
    AllergyRequest,
    AllergyResponse,
    PatientRequest,
    PatientResponse,
    UserRequest,
    UserResponse,
    UserLoginRequest
}
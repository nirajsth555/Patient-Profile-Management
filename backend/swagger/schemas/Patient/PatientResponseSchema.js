module.exports = {
    type: 'object',
    properties: {
        id: {
            type: 'integer',
            description: 'Primary key',
            example: 1,
        },
        first_name: {
            type: 'string',
            description: 'First name of patient',
            example: 'John',
        },
        last_name: {
            type: 'string',
            description: 'Last name of patient',
            example: 'Doe',
        },
        image: {
            type: 'string',
            description: 'URL of uploaded image',
        },
        email: {
            type: 'string',
            description: 'Email address of patient',
            example: 'john@gmail.com',
        },
        contact: {
            type: 'string',
            description: 'Contact number of patient',
            example: '9849123456',
        },
        date_of_birth: {
            type: 'string',
            description: 'DOB of patient',
            example: '2000-01-01',
        },
        address: {
            type: 'string',
            description: 'Address of patient',
            example: 'Thankot, Kathmandu',
        },
        allergies: {
            type: 'array',
            items: {
                type: 'object',
                properties: {
                    id: {
                        type: 'integer',
                        description: 'Primary Key',
                        example: 1,
                    },
                    allergy_id: {
                        type: 'integer',
                        description: 'Id of allergy',
                        example: 1,
                    },
                    practitioner_id: {
                        type: 'integer',
                        description: 'Id of the practioner',
                        example: 1,
                    },
                    allergy: {
                        type: 'object',
                        $ref: "#/components/schemas/AllergyResponse"
                    }
                },
            },
        },
        needs_special_attention: {
            type: 'boolean',
            description: 'True or False',
        },
    },
};

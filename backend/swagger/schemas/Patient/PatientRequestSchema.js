module.exports = {
    type: 'object',
    properties: {
        first_name: {
            type: 'string',
            description: 'First name of patient',
        },
        last_name: {
            type: 'string',
            description: 'Last name of patient',
        },
        email: {
            type: 'string',
            description: 'Email address of patient',
        },
        contact: {
            type: 'string',
            description: 'Contact number of patient',
        },
        address: {
            type: 'string',
            description: 'Address of patient',
        },
        date_of_birth: {
            type: 'string',
            description: 'DOB of patient',
        },
        image: {
            type: 'string',
            format: 'binary',
            description: 'Image of patient',
        },
        allergies: {
            type: 'array',
            items: {
                type: 'integer',
                description: 'ID of allergy',
            },
        },
        needs_special_attention: {
            type: 'boolean',
            description: 'True or False',
        },
    },
    required: [
        'first_name',
        'last_name',
        'email',
        'contact',
        'date_of_birth',
    ],
};

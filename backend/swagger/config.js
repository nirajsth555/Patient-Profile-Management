const schemas = require('./schemas/schemas');

module.exports = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Patient Profile Management System',
            version: '1.0.0'
        },
        servers: [
            {
                url: 'http://localhost:5000/api/'
            }
        ],
        basePath: '/',
        components: {
            schemas,
            securitySchemes: {
                bearerAuth: {
                    type: 'http',
                    scheme: 'bearer',
                    bearerFormat: 'JWT',
                },
            },
        }
    },
    apis: ['./routes/**/*.js']
}
const express = require('express');
const errorHandlerMiddleware = require("./middleware/errorHandler");
const app = express();

const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const swaggerOptions = require('./swagger/config');
const specs = swaggerJSDoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));

const routes = require("./routes/index");

app.use(express.json());

app.use('/api', routes);

app.use(errorHandlerMiddleware);

app.listen(5000, () => {
    console.log("Server has started on port 5000");
});
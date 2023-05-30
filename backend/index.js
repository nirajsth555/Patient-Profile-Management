const express = require('express');
const errorHandlerMiddleware = require("./middleware/errorHandler");
const app = express();

const routes = require("./routes/index");

app.use(express.json());

app.use('/api', routes);

app.use(errorHandlerMiddleware);

app.listen(5000, () => {
    console.log("Server has started on port 5000");
});
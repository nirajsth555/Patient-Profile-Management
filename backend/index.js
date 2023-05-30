const express = require('express');
const errorHandlerMiddleware = require("./middleware/errorHandler");
const app = express();

const userRoutes = require("./routes/User/index");

app.use(express.json());

app.use('/users', userRoutes);

app.use(errorHandlerMiddleware);

app.listen(5000, () => {
    console.log("Server has started on port 5000");
});
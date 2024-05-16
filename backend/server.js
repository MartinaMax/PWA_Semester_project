const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require('cors');
const app = express();
const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');


//Swagger setup 
const swaggerDefinition = yaml.load('./swagger.yaml');
app.use('/api/docs', swaggerUi.serve,  swaggerUi.setup(swaggerDefinition));
// Handles CORS
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,PUT,POST,DELETE");
    res.header("Access-Control-Allow-Headers", "auth-token, Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// Importing routes
const projectRoutes = require("./routes/project");
const taskRoutes = require("./routes/task");
const authRoutes = require("./routes/auth");
const userRoute = require("./routes/user");

require("dotenv-flow").config();


// Parse request of content type JSON
app.use(bodyParser.json());

mongoose.set('strictQuery', false);
mongoose.connect
    (
        process.env.DBHOST,
        {
            useUnifiedTopology: true,
            useNewUrlParser: true
        }
    ).catch(error => console.log("Error connecting to MongoDB database:" + error));

mongoose.connection.once("open", () => console.log("Connected succesfully to MongoDB"))



// CRUD routes
app.get("/api/welcome", (req, res) => {
    res.status(200).send({ message: "Welcome to the Kanban board" });
})

app.use("/api/project", projectRoutes);
app.use("/api/task", taskRoutes);
app.use("/api/user", authRoutes);
app.use("/api/users", userRoute)

const PORT = process.env.PORT || 4000;

app.listen(PORT, function () {
    console.log("Server is running on port:" + PORT);
})

module.exports = app;

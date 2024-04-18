const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require('cors');
const app = express();


// Handles CORS
app.use(function(req, res, next) {
    req.header("Access-Control-Allow-Origin", "*");
    req.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,PUT,DELETE");
    req.header("Access-Control-Allow-Headers", "auth-token, Origin, X-Requested-Width, Content-Type, Accept");
    next();
})

// Importing routes
const projectRoutes = require("./routes/project");
const taskRoutes = require("./routes/task");
//const authRoutes = require("./routes/authorization")

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
).catch(error => console.log("Error connecting to MongoDB database:" + error ));

mongoose.connection.once("open", () => console.log("Connected succesfully to MongoDB"))



// CRUD routes
app.get("/api/welcome", (req, res) => {
    res.status(200).send({message: "Welcome to the Kanban board"});
})

app.use("/api/project", projectRoutes);
app.use("/api/task", taskRoutes);

//app.use("/api/user", authRoutes);

const PORT = process.env.PORT || 4000;

app.listen(PORT, function() {
    console.log("Server is running on port:" + PORT);
})

module.exports = app;
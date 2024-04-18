const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const app = express();
const taskRoutes = require("./routes/task.js");

require("dotenv-flow").config();

app.use(bodyParser.json());

//db connection
mongoose.set("strictQuery", false);
mongoose
  .connect(process.env.DB_HOST, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .catch((error) => console.log("Error connecting to MongoDB:" + error));

//db connection checking
mongoose.connection
  .once("open", function () {
    console.log("Connected to MongoDB");
  })

  .on("error", function (err) {
    console.log("Connection failed:" + err);
  });

//routes
app.use("/api/task", taskRoutes);
// app.use("/api/project/task", taskRoutes);

//server start up
const PORT = process.env.PORT || 4000;
app.listen(PORT, function () {
  console.log("Server's running on port: " + PORT);
});

module.exports = app;

const router = require("express").Router();
const task = require("../models/task.js");
const { tokenVerification } = require('../validation');


//Defining the endpoints GET, POST, PUT, DELETE

//GET /api/task/userID
router.get("/:userID", tokenVerification, (req, res) => {
  task
    .findById({userID: req.params.userID})
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
});

//GET /api/task/project
router.get("/:project", tokenVerification, (req, res) => {

  task.find({ project: req.params.project })
    .then(data => {res.send(data); })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
});


//POST /api/task [auth]
router.post("/", tokenVerification, (req, res) => {
// router.post("/", (req, res) => {
  data = req.body;
  task
    .insertMany(data)
    .then((data) => {
      res.status(201).send(data);
    })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
});

//PUT /api/task [auth]
router.put("/:id", tokenVerification, (req, res) => {
// router.put("/:id", (req, res) => {
  const id = req.params.id;

  task
    .findByIdAndUpdate(id, req.body)
    .then((data) => {
      if (!data)
        res.status(404).send({
          message:
            "Cannot update task with id=" + id + ". Maybe task was not found!",
        });
      else res.send({ message: "Task was updated successfully." });
    })
    .catch((err) => {
      res.status(500).send({ message: "Error updating Task with id=" + id });
    });
});

// DELETE /api/
router.delete("/:id", tokenVerification, (req, res) => {
// router.delete("/:id", (req, res) => {
  const id = req.params.id;

  task
    .findByIdAndDelete(id)
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete Task with id=${id}. Maybe Task was not found!`,
        });
      } else {
        res.send({ message: "Task was deleted successfully!" });
      }
    })
    .catch((err) => {
      res.status(500).send({ message: "Could not delete Task with id=" + id });
    });
});

module.exports = router;

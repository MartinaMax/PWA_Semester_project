const router = require("express").Router();
const { ref } = require("joi");
const project = require("../models/project");
const { tokenVerification } = require("../validation");

// GET,POST,UPDATE & DELETE Projects (Only author of the project can)

// GET - Fetch all project based on if you are a user or collaborator
router.get("/:id", tokenVerification, async (req, res) => {
  try {
    const userID = req.params.id;

    const projects = await project.find({
      $or: [
            { author: userID },
            { collaborators: userID}
          ]
    });

     res.send(projects);
    } catch (error) {
        console.error('Error fetching projects:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// POST - Create a new project in the database (tokenVerification)
router.post("/", tokenVerification, (req, res) => {
  data = req.body;

  project
    .insertMany(data)
    .then((data) => {
      res.send({ message: "New project added", data});
    })
    .catch((err) => {
      res.status(500).send(JSON.stringify(err));
    });
});

// UPDATE - Update a project based on the ID  (tokenVerification)
router.put("/:id", tokenVerification, (req, res) => {
  const id = req.params.id;

  project
    .findByIdAndUpdate(id, req.body)
    .then((data) => {
      if (!data) {
        res.status(404).send({ message: "Wrong project id" + id + "." });
      } else {
        res.send({ message: "The project information was modified." });
      }
    })
    .catch((err) => {
      res.status(500).send(JSON.stringify(err));
    });
});

// DELETE - Delete a project based on the ID  (tokenVerification)
router.delete("/:id", tokenVerification, (req, res) => {
  const id = req.params.id;

  project
    .findByIdAndDelete(id)
    .then((data) => {
      if (!data) {
        res
          .status(404)
          .send({ message: "Cannot delete project with id" + id + "." });
      } else {
        res.send({ message: "The project was deleted." });
      }
    })
    .catch((err) => {
      res.status(500).send(JSON.stringify(err));
    });
});

module.exports = router;

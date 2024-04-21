const router = require("express").Router();
const project = require("../models/project");
//const {tokenVerification} = require("../validation");



// GET,POST,UPDATE & DELETE Projects (Only author of the project can)

// GET - Fetch all project based on the userID (tokenVerification)
router.get("/", (req, res) => {

    project.find()
    .then(data => {res.send(data);})
    .catch(err => {res.status(500).send(JSON.stringify(err));})

});


// POST - Create a new project in the database (tokenVerification)
router.post("/", (req, res) => {
   
    data = req.body;

    project.insertMany(data)
    .then(data => {res.send(data);})
    .catch(err => {res.status(500).send(JSON.stringify(err));})
  
});


// UPDATE - Update a project based on the ID  (tokenVerification)
router.put("/:id", (req, res) => {
   
    const id = req.params.id;

    project.findByIdAndUpdate(id, req.body)
    .then(data => {
        if(!data){
            res.status(404).send({message: "Wrong project id" + id + "."})
        }
        else{
            res.send({message: "The project information was modified."})
        }

    })
    .catch(err => {res.status(500).send(JSON.stringify(err)); })
});


// DELETE - Delete a project based on the ID  (tokenVerification)
router.delete("/:id", (req, res) => {
   
    const id = req.params.id;

    project.findByIdAndDelete(id)
    .then(data => {
        if(!data){
            res.status(404).send({message: "Cannot delete project with id" + id + "."})
        }
        else{
            res.send({message: "The project was deleted."})
        }

    })
    .catch(err => {res.status(500).send(JSON.stringify(err)); })
});

module.exports = router;

const router = require("express").Router();
const task = require("../models/task.js");


//Defining the endpoints GET, POST, PUT, DELETE

//GET /api/project/task/?userID
router.get('/userID', (req, res) => {
   task.find(req.params.userID)
    .then(data => { res.send(data); })
    .catch(err => { res.status(500).send({ message: err.message }); });
});

//GET /api/project/task/?state
router.get('/state', (req, res) => {
    task.find(req.params.state)
     .then(data => { res.send(data); })
     .catch(err => { res.status(500).send({ message: err.message }); });
 });

//POST /api/project/task [auth]
// router.post("/", verifyToken, (req, res) => {
    router.post("/", (req, res) => {
        const data = req.body;
        task.insertMany(data)
            .then(data => { res.status(201).send(data); })
            .catch(err => { res.status(500).send({ message: err.message }); });
    });


module.exports = router;
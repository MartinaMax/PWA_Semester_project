const router = require("express").Router();
const { ref } = require("joi");
const user = require("../models/user");
const { tokenVerification } = require("../validation");


router.get("/:userID", tokenVerification,  (req, res) => {
   
    user.findById(req.params.userID)
    .then((data) => {
        res.send(data);
    })
    .catch((err) => {
        res.status(500).send({ message: err.message });
    });
});

module.exports = router;
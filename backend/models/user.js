const mongoose = require("mongoose");

const Schema = mongoose.Schema;

// User schema
let userSchema = new Schema (

    {
        name: { 
            type: String,
            required: true,
            min: 2,
            max: 255
        },
        email: {
            type: String,
            required: true,
            min: 5,
            max: 255
        },
        password: {
            type: String,
            required: true,
            min: 8,
            max: 255
        },
        project: {
            type: Schema.Types.ObjectId, 
            ref: 'project',
        },
        task: [{
            type: Schema.Types.ObjectId, 
            ref: 'task', 
        }]
      
    }
);

module.exports = mongoose.model("user", userSchema);

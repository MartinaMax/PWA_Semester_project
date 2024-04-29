const mongoose = require("mongoose");

const Schema = mongoose.Schema;

// Project schema
let projectSchema = new Schema (

    {
        title: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true,
            max: 255
        },
        startDate: {
            type: Date,
            required: true,
            default: Date.now
        },
        endDate: {
            type: Date,
            required: true,
        },
        author: {
            type: Schema.Types.ObjectId, 
            ref: 'user', 
            required: true
        },
        collaborators: [{
            type: Schema.Types.ObjectId, 
            ref: 'user', 
        }],
        task: [{
            type: Schema.Types.ObjectId, 
            ref: 'task', 
        }],
        status: {
            type: String,
            required: true
        }
    }
);

module.exports = mongoose.model("project", projectSchema);
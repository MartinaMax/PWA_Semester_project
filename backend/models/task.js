const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let taskSchema = new Schema({
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
    default: Date.now
  },

  endDate: {
    type: Date,
    required: true
  },

  author: {
    type: Schema.Types.ObjectId,
    ref: "user",
    required: true
  },

  collaborators: [{
    type: Schema.Types.ObjectId,
    ref: "user"
  }],

  project: [{
    type: Schema.Types.ObjectId, 
    ref: 'task', 
}],

  state: {
    type: String,
    required: true
  }

});

module.exports = mongoose.model("task", taskSchema);

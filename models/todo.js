// add moongoose to the file
const mongoose = require('mongoose');

// schema of the database
const todoSchema = new mongoose.Schema({
    description: {
        type: String,
        required: true
       
    },
    catagory: {
        type: String,
        required: true
    },
    date:{
        type: String,
        required: true
    }
});

const Todo = mongoose.model('Todo',todoSchema);
// schema is exported
module.exports = Todo;
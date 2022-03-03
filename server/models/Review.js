const { Schema } = require('mongoose');

const reviewSchema = new Schema({
    
    title: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    star: {
        type: Number,
        required: true
    },
    comment: {
        type : String,
        required: true
    }
  });


  module.exports = reviewSchema;
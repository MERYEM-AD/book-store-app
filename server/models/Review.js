const { Schema } = require('mongoose');

const reviewSchema = new Schema({
    userID: {
      type: String,
      required: true,
    },
    bookID: {
      type: String,
      required: true,
    },
    star: {
        type: Number,
    },
    comment: {
        type : String
    }

  });

  module.exports = reviewSchema;
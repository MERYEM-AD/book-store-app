const { Schema } = require('mongoose');

const bookSchema = new Schema({
  authors: [
    {
      type: String,
    },
  ],
  description: {
    type: String,
    required: true,
  },
  bookId: {
    type: String,
    required: true,
  },
  image: {
    type: String,
  },
  category: [ {
  type: String,
  }
 ],
  title: {
    type: String,
    required: true,
  },
  price : {
    type: Number
  },
  review : {
    type: String
  },
  rating : {
    type: Number
  }
});


module.exports = bookSchema;

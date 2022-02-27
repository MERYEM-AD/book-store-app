const { Schema } = require('mongoose');

const catSchema = new Schema({
    name: {
      type: String,
      required: true,
    },
    type: {
      type: String,
    }
  });

  module.exports = catSchema;
// Requiring Mongoose
const mongoose = require('mongoose');

//Defining Schema
var albumSchema = mongoose.Schema({
  album: {
    type: String,
    required: true,
  },
  director: {
    type: String,
    required: true,
  },
  singer: {
    type: String,
    required: true,
  },
  year: {
    type: Number,
    required: true
  },
  category: {
    type: String,
    required: true
  },

  cast: {
    type: String,
    required: true
  }

},
)

//Exporting the file
const AlbumModel = mongoose.model('Albumdata', albumSchema);

module.exports = AlbumModel
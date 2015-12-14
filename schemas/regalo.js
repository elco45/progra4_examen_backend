var mongoose = require('mongoose');

var Regalo = new mongoose.Schema({
  name : String,
  descripcion : String,
  peso: Number,
  destinatario: String,
  status: String,
});

module.exports = mongoose.model('regalo', Regalo);

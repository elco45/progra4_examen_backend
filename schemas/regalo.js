var mongoose = require('mongoose');

var Regalo = new mongoose.Schema({
  nombre : String,
  descripcion : String,
  peso: Number,
  destinatario: String,
  status: String,
});

module.exports = mongoose.model('regalo', Regalo);

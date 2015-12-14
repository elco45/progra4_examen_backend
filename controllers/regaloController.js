var regalo = require('../schemas/regalo');

exports.getRegalos = {
  handler: function(request, reply){
    var regalos = regalo.find({});
    reply(regalos);
  }
}

exports.createRegalo = {
  handler: function(request, reply){
    var newRegalo = new regalo({
      name: request.payload.name,
      descripcion: request.payload.descripcion,
      peso: request.payload.peso,
      destinatario: request.payload.destinatario,
      status: request.payload.status
    });
    newRegalo.save();
    console.log('regalo saved');
    return reply('ok');
  }
}

exports.modRegalo ={
  handler: function(request,reply){
    regalo.findOneAndUpdate({
      name: request.payload.name,
      descripcion: request.payload.descripcion,
      peso: request.payload.peso,
      destinatario: request.payload.destinatario,
      status: request.payload.status
    },
    function(err,regalos){
        regalos.save(function(err){
          if (err) {
            alert("ERROR");
          }
        });
      }
    );
  }
}



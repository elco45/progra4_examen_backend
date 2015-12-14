var regaloController = require('./controllers/regaloController');
var usersController = require('./controllers/usersController');
var authController = require('./controllers/authController');

exports.endpoints = [{method: 'GET', path: '/', config: {handler: function(request, reply){reply('API v1, Regalos')}}},
	{method: 'GET', path: '/v1/regalos', config: regaloController.getRegalos},
  	{method: 'POST', path: '/v1/regalo', config: regaloController.createRegalo},
	{method: 'POST', path: '/v1/register', config: usersController.createUser},
	{method: 'POST', path: '/v1/login', config: authController.login},
	{method: 'GET', path: '/v1/logout', config: authController.logout},
	{method: 'PUT', path:'/v1/modRegalo', config: regaloController.modRegalo}
];

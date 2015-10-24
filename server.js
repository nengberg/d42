var keystone = require('keystone');
var engine   = require('ejs-locals');
keystone.init({
  
  'name': 'Dinner for two',
  
  'favicon': 'public/favicon.ico',
  'less': 'public',
  'static': ['public'],
  
  'views': 'templates/views',
  'custom engine': engine,
  'view engine': 'ejs',
  
  'auto update': true,
  'mongo': 'mongodb://localhost/my-project',
  
  'session': true,
  'auth': true,
  'user model': 'User',
  'cookie secret': 'mat123'
  
});
 
require('./models');
 
keystone.set('routes', require('./routes'));
 
keystone.start();

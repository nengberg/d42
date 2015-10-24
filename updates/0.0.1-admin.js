var keystone = require('keystone'),
    User = keystone.list('User');
 
exports = module.exports = function(done) {
    
    new User.model({
        name: { first: 'Caroline', last: 'Andersson' },
        email: 'carro@dinner42.se',
        password: 'admin',
        canAccessKeystone: true
    }).save(done);
    
};
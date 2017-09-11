var admin       = require('../controllers/admin'),
    express     = require('express'),

    adminRoutes;

adminRoutes = function () {
    var router = express.Router();
    router.get('/test', function (req, res) {
        res.send('hi');
    })
    router.get('*', admin.index);
    
    return router;
};

module.exports = adminRoutes;

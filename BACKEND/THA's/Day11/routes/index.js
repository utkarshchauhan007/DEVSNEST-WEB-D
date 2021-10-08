var express = require('express');
var router = express.Router();

const { registerChecks } = require('../middlewares/registerChecks');
const register = require('../controllers/register');

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/register', registerChecks, register)


module.exports = router;

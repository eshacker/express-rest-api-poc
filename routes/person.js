var express = require('express');
var router = express.Router();

var personObj = {
  'name': 'eshacker',
  'location': {
    'street': '42',
    'block': 'b',
    'city': 'c',
    'state': 's'
    },
  'age': '99'
};

/* GET home page. */
router.get('/', function(req, res, next){
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify(personObj));
  next();
});

router.get('/name', function(req, res, next) {
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify(personObj.name));
  next();
});

router.get('/location', function(req, res, next){
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify(personObj.location));
  next();
});

router.get('/location/street', function(req, res, next){
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify(personObj.location.street));
  next();
});

router.delete('/', function(req, res, next){
  res.send("deleted a person object: " + JSON.stringify(personObj));
  next();
});

module.exports = router;

/** EXPRESS */
var express = require('express');

/** ASSERT */
var assert = require('assert');

/** RESTIFY */
var restify = require('restify-clients');

var router = express.Router();



/** Creates a JSON client */
var client = restify.createJsonClient(
{
  
  url: 'http://localhost:4000'

});//end restify.createJsonClient



/* GET users listing. */
router.get('/', function(req, res, next)
{
  client.get('/users', function(err, request, response, obj)
  {
    
    assert.ifError(err);
  
    res.end(JSON.stringify(obj, null, 2));

  });

});//END router.get

module.exports = router;

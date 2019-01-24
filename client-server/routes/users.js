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





router.get('/', function(req, res, next)
{

  client.get('/users', function(err, request, response, obj)
  {
    
    assert.ifError(err);
  
    res.json(obj);

  });

});//END route







router.get('/:id', function(req, res, next)
{

  client.get(`/users/${req.params.id}`, function(err, request, response, obj)
  {
    
    assert.ifError(err);
  
    res.json(obj);

  });

});//END route






router.put('/:id', function(req, res, next)
{

  client.put(`/users/${req.params.id}`, req.body, function(err, request, response, obj)
  {
    
    assert.ifError(err);
  
    res.json(obj);

  });

});//END route








router.delete('/:id', function(req, res, next)
{

  /** Restify chama o método DELETE apenas como 'del' */
  client.del(`/users/${req.params.id}`, function(err, request, response, obj)
  {
    
    assert.ifError(err);
  
    res.json(obj);

  });

});//END route






router.post('/', function(req, res, next)
{

  client.post('/users', req.body, function(err, request, response, obj)
  {
    
    assert.ifError(err);
  
    res.json(obj);

  });

});//END route










/** MODULE EXPORTS */
module.exports = router;

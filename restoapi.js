var pg = require('pg');
var express = require('express');
var app = express();
var conString = "postgres://oponrmwidypexs:_vpbC0gM1LgSNYjrbM0t3zswd3@ec2-107-22-235-119.compute-1.amazonaws.com:5432/dclelckuq7us2q?ssl=true&sslfactory=org.postgresql.ssl.NonValidatingFactory";


app.get('https://heroku-postgres-42a15bfd.herokuapp.com/', function(request, response, next) {
var id = request.params.id;
var client = new pg.Client(conString);
client.connect(function(err) {
  if(err) {
    return console.error('could not connect to postgres', err);
  }
  client.query('SELECT restaurant.stime, restaurant.etime FROM restaurant WHERE restaurant.id=id', function(err, result) {
    if(err) {
      return console.error('error running query', err);
    }
    console.log(result.rows[0]);
    client.end();
  });
});
  }); 

'use strict';

var mongoose = require('mongoose');


var dbUrl = process.env.MONGOHQ_URL || 'mongodb://127.0.0.1/gestaourbana-mapas';
//var connection = mongoose.createConnection(dbUrl);
var connection = mongoose.connect(dbUrl);
// CONNECTION EVENTS
// When successfully connected
mongoose.connection.on('connected', function () {
  console.log('Mongoose default connection open to ' + dbUrl);
});
// If the connection throws an error
mongoose.connection.on('error',function (err) {
  console.log('Mongoose default connection error: ' + err);
});
// When the connection is disconnected
mongoose.connection.on('disconnected', function () {
  console.log('Mongoose default connection disconnected');
});
// If the Node process ends, close the Mongoose connection
process.on('SIGINT', function() {
  mongoose.connection.close(function () {
    console.log('Mongoose default connection disconnected through app termination');
    process.exit(0);
  });
});

module.exports = mongoose.connection;

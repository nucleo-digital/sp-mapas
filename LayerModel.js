'use strict';

var mongoose = require('mongoose');
var GeoJSON = require('mongoose-geojson-schema');

var Schema = mongoose.Schema;

var LayerSchema = new Schema({
  name: { type: String, index: true },
  features: GeoJSON.FeatureCollection,
  created_at: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Layer', LayerSchema);

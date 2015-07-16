'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var types = 'payable receivable bank cash credit expense income'.split(' ');

var AccountSchema = new Schema({
	number: Number,
  name: String,
  description: String,
  type: {type: String, enum: types},
  active: Boolean
});

module.exports = mongoose.model('Account', AccountSchema);
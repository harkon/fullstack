'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var roundings = 'line total'.split(' ');
// each line item seperately
// at the invoice total

var TaxSchema = new Schema({
  name: String,
  abbreviation: String,
  description: String,
  registrationNo: Number,
  rate: Number, // percentage, required
  effectiveDate: Date,
  prevName: String,
  prevAbbreviation: String,
  prevRate: Number,
  rounding: {type: String, enum: roundings},
  registered: Boolean, // Yes, track taxes paid and collected so I can file this tax
  cumulative: Boolean, //this tax is calculated using the value after other taxes.
  active: Boolean,
  receivableAccount: String, // reference
  payableAccount: String, //ref
  expenseAccount: String //ref
  // incomeAccount: String // ref
});

module.exports = mongoose.model('Tax', TaxSchema);
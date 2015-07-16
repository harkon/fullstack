'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

//NOTE: misses the relationship with the accountant (admin user)
var OrganizationSchema = new Schema({
	// hash of the afm and secondary index. could also be a concatantion of user id + org afm
	organization_id: String, 
  organization_name: String,
  contact_firstname: String,
  contact_surname: String,
  email: String,
  address1: String,
  address2: String,
  city: String,
  po_box: String,
  state: String,
  country: String,
  phone: String,
  fax: String,
  mobile: String,
  // fiscal
  fiscal_year_start_date: Date,
  fiscal_year_end_data: Date,
  // currency
  currency_id: Number,
  currency_code: {type: String, uppercase: true, trim: true},
  currency_symbol: String,
  currency_format: String,
  price_precision: Number,
  // locale
  language_code: {type: String, lowercase: true, trim: true},
  time_zone: String,
  // db
  created: Date,
  updated: { type: Date, default: Date.now },
  // status
  active: Boolean,
  tax_group_enabled: Boolean 
});

/**
 * Virtuals
 */
OrganizationSchema
  .virtual('contact_name')
  .set(function(name) {
  	var nameParts = name.split(" ");
    this.contact_firstname = nameParts[0];
    this.contact_surname = nameParts[1];
  })
  .get(function() {
    return this.contact_firstname + " " + this.contact_surname;
  });


module.exports = mongoose.model('Organization', OrganizationSchema);


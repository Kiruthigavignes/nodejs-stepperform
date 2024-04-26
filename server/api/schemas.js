const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const teamMemberSchema = new Schema({
  name: { type: String },
  designation: { type: String },
  profilesummary: { type: String },
  linkedin: { type: String },
});
const productSchema = new Schema({
  productname: { type: String},
  productportfolio: { type: String },
  facebookurl: { type: String },
});

const contactSchema = new Schema({
  companyName: { type: String },
  headOfficeName: { type: String},
  country: { type: String},
  postalCode: { type: String},
  city: { type: String },
  countrycode: { type: String },
  contactnumber: { type: String },
  websiteUrl: { type: String },
  name: { type: String,  },
  designation: { type: String,  },
  contactnumber2: { type: String,  },
  email: { type: String,  },
  companyprofile: { type: String,  },
  facebookurl: { type: String,  },
  vision: { type: String,  },
  teamMembers: [teamMemberSchema],
  product: [productSchema],

  entryDate: { type: Date, default: Date.now },
});

const Contact = mongoose.model("Contact", contactSchema, "contact_form");
const mySchemas = { Contact: Contact };

module.exports = mySchemas;

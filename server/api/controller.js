const schemas = require("./schemas");

const handleContact = async (req, res) => {
  const action = req.params.a;

  const {
    companyName,
    headOfficeName,
    country,
    postalCode,
    city,
    countrycode,
    contactnumber,
    websiteUrl,
    name,
    designation,
    contactnumber2,
    email,
    companyprofile,
    facebookurl,
    vision,
    teamMembers,
    product,
  } = req.body;

  switch (action) {
    case "send":
      try {
        const newContact = new schemas.Contact({
          companyName,
          headOfficeName,
          country,
          postalCode,
          city,
          countrycode,
          contactnumber,
          websiteUrl,
          name,
          designation,
          contactnumber2,
          email,
          companyprofile,
          facebookurl,
          vision,
          teamMembers,
          product,
        });

        const savedContact = await newContact.save();

        res.status(201).json({
          success: true,
          message: "Contact information sent successfully.",
          data: savedContact,
        });
      } catch (error) {
        console.error("Error saving contact information:", error);

        res.status(500).json({
          success: false,
          message: "Failed to send contact information.",
          error: error.message,
        });
      }
      break;

    default:
      res.status(400).json({
        success: false,
        message: "Invalid request action.",
      });
      break;
  }

  res.end();
};


const handleDataRetrieval = async (req, res) => {
  try {
      const allContacts = await schemas.Contact.find(); 

    
      res.status(200).json({
          success: true,
          message: "Data retrieved successfully.",
          data: allContacts,
      });
  } catch (error) {
      console.error("Error retrieving data:", error);

      res.status(500).json({
          success: false,
          message: "Failed to retrieve data.",
          error: error.message,
      });
  }
};


module.exports = {
  handleContact,
  handleDataRetrieval,

};

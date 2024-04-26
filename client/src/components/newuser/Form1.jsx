import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  TextField,
  Button,
  Stepper,
  Step,
  StepLabel,
  Typography,
  IconButton,
} from "@material-ui/core";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import Box from "@mui/material/Box";
import { useNavigate } from "react-router-dom";
import MenuItem from "@mui/material/MenuItem";
import { Delete } from "@mui/icons-material";
import { useFormik } from "formik";


import { Grid } from "@mui/material";
import NextFormPage from "./Details";


const LinearStepper = () => {
  const [activeStep, setActiveStep] = useState(0);
  const navigate = useNavigate(); 

  const validationSchema = Yup.object({
    // Define validation for form fields
    companyName: Yup.string().required("Company Name is required"),
  })

  
  const [formData, setFormData] = useState({
    companyName: "",
    headOfficeName: "",
    country: "",
    postalCode: "",
    city: "",
    countrycode: "",
    contactnumber: "",
    websiteUrl: "",
    name: "",
    designation: "",
    contactnumber2: "",
    email: "",
    companyprofile: "",
    facebookurl: "",
    vision: "",
    teamMembers: [
      { id: 1, name: "", designation: "", profilesummary: "", linkedin: "" },
    ],
    product: [
      { id: 1, productname: "", productportfolio: "", facebookurl: "" },
    ],
  });

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.post(
        "http://localhost:4000/contact/send",
        formData
      );
      if (response.status === 201) {
        console.log(response.data);
        window.alert("Data has been sent successfully.");
        navigate('/table', { state: { formData } });  
           } else {
        console.error(`Unexpected response status: ${response.status}`);
        window.alert("An error occurred while sending data.");
      }
    } catch (error) {
      console.error("Error sending data:", error);
      window.alert(
        "An error occurred while sending data. Please try again later."
      );
    }
  };

  const handleChange = (field, value) => {
    setFormData((prevState) => ({
      ...prevState,
      [field]: value,
    }));
  };

  const handleTeamMemberChange = (id, field, value) => {
    const updatedMembers = formData.teamMembers.map((member) => {
      if (member.id === id) {
        return {
          ...member,
          [field]: value,
        };
      }
      return member;
    });

    setFormData((prevState) => ({
      ...prevState,
      teamMembers: updatedMembers,
    }));
  };

  const handleproduct = (id, field, value) => {
    const updatedMembers = formData.product.map((member) => {
      if (member.id === id) {
        return {
          ...member,
          [field]: value,
        };
      }
      return member;
    });

    setFormData((prevState) => ({
      ...prevState,
      product: updatedMembers,
    }));
  };

  const addTeamMember = () => {
    const newId = formData.teamMembers.length + 1;
    setFormData((prevState) => ({
      ...prevState,
      teamMembers: [
        ...prevState.teamMembers,
        {
          id: newId,
          name: "",
          designation: "",
          profilesummary: "",
          linkedin: "",
        },
      ],
    }));
  };

  const removeTeamMember = (id) => {
    setFormData((prevState) => ({
      ...prevState,
      teamMembers: prevState.teamMembers.filter((member) => member.id !== id),
    }));
  };

  const addproduct = () => {
    const newId = formData.product.length + 1;
    setFormData((prevState) => ({
      ...prevState,
      product: [
        ...prevState.product,
        { id: newId, productname: "", productportfolio: "", facebookurl: "" },
      ],
    }));
  };

  const removeproduct = (id) => {
    setFormData((prevState) => ({
      ...prevState,
      product: prevState.product.filter((member) => member.id !== id),
    }));
  };

  const getSteps = () => {
    return ["Basic Details", "Team Details", "Product Details"];
  };

  const getStepContent = () => {
    switch (activeStep) {
      case 0:
        return (
          <Form>
            <Typography
              variant="h5"
              style={{ fontWeight: "700" }}
            >
              Basic Company Information
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  id="companyName"
                  name="companyName"
                  label="Company Name"
                  variant="outlined"
                  placeholder="Enter Company Name"
                  fullWidth
                  margin="normal"
                  onChange={(e) => handleChange("companyName", e.target.value)}
                  value={formData.companyName}
               
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  id="headOfficeName"
                  name="headOfficeName"
                  label="Head Office Address"
                  variant="outlined"
                  placeholder="Street Number, House Number"
                  fullWidth
                  margin="normal"
                  onChange={(e) =>
                    handleChange("headOfficeName", e.target.value)
                  }
                  value={formData.headOfficeName}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  id="country"
                  name="country"
                  label="Country"
                  variant="outlined"
                  select
                  fullWidth
                  margin="normal"
                  onChange={(e) => handleChange("country", e.target.value)}
                  value={formData.country}
                >
                  <MenuItem value="USA">USA</MenuItem>
                  <MenuItem value="UK">UK</MenuItem>
                  <MenuItem value="Canada">Canada</MenuItem>
                  <MenuItem value="India">India</MenuItem>
                </TextField>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  id="postalCode"
                  name="postalCode"
                  label="Postal Code"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  onChange={(e) => handleChange("postalCode", e.target.value)}
                  value={formData.postalCode}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  id="city"
                  name="city"
                  label="City"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  onChange={(e) => handleChange("city", e.target.value)}
                  value={formData.city}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  id="countrycode"
                  name="countrycode"
                  label="Country Code"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  onChange={(e) => handleChange("countrycode", e.target.value)}
                  value={formData.countrycode}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  id="contactnumber"
                  name="contactnumber"
                  label="Contact Number"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  onChange={(e) =>
                    handleChange("contactnumber", e.target.value)
                  }
                  value={formData.contactnumber}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  id="websiteUrl"
                  name="websiteUrl"
                  label="Website URL"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  onChange={(e) => handleChange("websiteUrl", e.target.value)}
                  value={formData.websiteUrl}
                />
              </Grid>
              <Typography
                variant="h5"
                style={{
                  fontWeight: "700",
                  paddingLeft: "15px",
                  paddingTop: "20px",
                }}
              >
                Key Contact Person
              </Typography>
              <Grid item xs={12}>
                <TextField
                  id="name"
                  name="name"
                  label="Name"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  onChange={(e) => handleChange("name", e.target.value)}
                  value={formData.name}
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  id="designation"
                  name="designation"
                  label="Designation"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  onChange={(e) => handleChange("designation", e.target.value)}
                  value={formData.designation}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  id="contactnumber2"
                  name="contactnumber2"
                  label="Contact Number"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  onChange={(e) =>
                    handleChange("contactnumber2", e.target.value)
                  }
                  value={formData.contactnumber2}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  id="email"
                  name="email"
                  label="Email"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  onChange={(e) => handleChange("email", e.target.value)}
                  value={formData.email}
                />
              </Grid>

            
            
            </Grid>
            <Box sx={{display:'flex',justifyContent:'end',marginTop:'20px'}}>
            <Button variant="contained" color="primary" onClick={handleNext}>
                Continue
              </Button>
              </Box>
          </Form>
        );
      case 1:
        return (
          <Form>
            <Typography
              variant="h5"
              style={{ fontWeight: "700", }}
            >
              Tell us more about yourself
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  id="companyprofile"
                  name="companyprofile"
                  label="Brief company profile"
                  variant="outlined"
                  placeholder="Description (Max 200 Words)"
                  fullWidth
                  margin="normal"
                  multiline
                  rows={4}
                  onChange={(e) =>
                    handleChange("companyprofile", e.target.value)
                  }
                  value={formData.companyprofile}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  id="facebookurl"
                  name="facebookurl"
                  label="Facebook/Linkedin page URL. Youtube link, etc."
                  variant="outlined"
                  placeholder="http://"
                  fullWidth
                  margin="normal"
                  multiline
                  rows={4}
                  onChange={(e) => handleChange("facebookurl", e.target.value)}
                  value={formData.facebookurl}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  id="vision"
                  name="vision"
                  label="Vision/Mission"
                  variant="outlined"
                  placeholder="Description (Max 200 Words)"
                  fullWidth
                  margin="normal"
                  multiline
                  rows={4}
                  onChange={(e) => handleChange("vision", e.target.value)}
                  value={formData.vision}
                />
              </Grid>

              <Typography
                variant="h5"
                style={{
                  fontWeight: "700",
                  paddingLeft: "15px",
                  paddingTop: "20px",
                }}
              >
                Management Team Details
              </Typography>
              <div style={{ height: '450px', overflowY: 'auto',width:'100%',paddingLeft:'14px' }}>
              {formData.teamMembers.map((member) => (
                <React.Fragment key={member.id}>
                  <Grid
                    item
                    xs={12}
                    style={{ display: "flex", justifyContent: "flex-end" }}
                  >
                    <IconButton onClick={() => removeTeamMember(member.id)}>
                      <Delete />
                    </IconButton>
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      id={`name-${member.id}`}
                      name={`name-${member.id}`}
                      label="Name"
                      variant="outlined"
                      fullWidth
                      margin="normal"
                      onChange={(e) =>
                        handleTeamMemberChange(
                          member.id,
                          "name",
                          e.target.value
                        )
                      }
                      value={member.name}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      id={`designation-${member.id}`}
                      name={`designation-${member.id}`}
                      label="Designation"
                      variant="outlined"
                      fullWidth
                      margin="normal"
                      onChange={(e) =>
                        handleTeamMemberChange(
                          member.id,
                          "designation",
                          e.target.value
                        )
                      }
                      value={member.designation}
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <TextField
                      id={`profilesummary-${member.id}`}
                      name={`profilesummary-${member.id}`}
                      label="Profile Summary"
                      variant="outlined"
                      fullWidth
                      margin="normal"
                      onChange={(e) =>
                        handleTeamMemberChange(
                          member.id,
                          "profilesummary",
                          e.target.value
                        )
                      }
                      value={member.profilesummary}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      id={`linkedin-${member.id}`}
                      name={`linkedin-${member.id}`}
                      label="Linkedin Profile"
                      variant="outlined"
                      fullWidth
                      margin="normal"
                      onChange={(e) =>
                        handleTeamMemberChange(
                          member.id,
                          "linkedin",
                          e.target.value
                        )
                      }
                      value={member.linkedin}
                    />
                  </Grid>
                </React.Fragment>
              ))}
             
              <Grid item xs={12}>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={addTeamMember}
                  style={{ width: "100%",marginTop:'20px' }}
                >
                  + Add Team Member
                </Button>
              </Grid>
              </div>
            
            </Grid>
            <Box sx={{display:'flex',justifyContent:'end',marginTop:'20px'}}>
            <Button variant="contained" color="primary" onClick={handleNext}>
                Continue
              </Button>
              </Box>
          </Form>
        );
      case 2:
        return (
          <Form>
            <Typography
              variant="h5"
              style={{ fontWeight: "700" }}
            >
              {" "}
              Show your product portfolio
            </Typography>
<div style={{ height: '450px', overflowY: 'auto',width:'100%' }} >
            <Grid container spacing={2}>
          
                              {formData.product.map((member) => (
                <React.Fragment key={member.id}>
                  <Grid
                    item
                    xs={12}
                    style={{ display: "flex", justifyContent: "flex-end" }}
                  >
                    <IconButton onClick={() => removeproduct(member.id)}>
                      <Delete />
                    </IconButton>
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      id={`productname-${member.id}`}
                      name={`productname-${member.id}`}
                      label="Product Name"
                      variant="outlined"
                      placeholder="Product Name"
                      fullWidth
                      margin="normal"
                      onChange={(e) =>
                        handleproduct(member.id, "productname", e.target.value)
                      }
                      value={member.productname}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      id={`productportfolio-${member.id}`}
                      name={`productportfolio-${member.id}`}
                      label="Product portfolio description"
                      variant="outlined"
                      placeholder="Brief portfolio description"
                      fullWidth
                      margin="normal"
                      onChange={(e) =>
                        handleproduct(
                          member.id,
                          "productportfolio",
                          e.target.value
                        )
                      }
                      value={member.productportfolio}
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <TextField
                      id={`facebookurl-${member.id}`}
                      name={`facebookurl-${member.id}`}
                      label="Facebook/Linkedin page URL. Youtube link, etc."
                      variant="outlined"
                      placeholder="http://"
                      fullWidth
                      margin="normal"
                      onChange={(e) =>
                        handleproduct(member.id, "facebookurl", e.target.value)
                      }
                      value={member.facebookurl}
                    />
                  </Grid>
                </React.Fragment>
              ))}
            
              <Grid item xs={12}>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={addproduct}
                  style={{ width: "100%",marginTop:'20px' }}
                >
                  + Add Team Member
                </Button>
              </Grid>

            </Grid>
            </div>
            <Box sx={{display:'flex',justifyContent:'end',marginTop:'20px'}}>
            <Button variant="contained" color="primary" onClick={handleSubmit}>
                Submit
              </Button>
              </Box>
          </Form>
        );
      default:
        return "Unknown step";
    }
  };

  return (
    <div>
           <Stepper activeStep={activeStep} style={{ position: "fixed", top: 0, width: "90%", zIndex: 15, backgroundColor: "#fff" }}>
        {getSteps().map((label, index) => (
          <Step key={index}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
    <div style={{  display: "flex", justifyContent: "center", alignItems: "center",marginTop:'50px' }}>

      <Box
        sx={{
        
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "50px",
          width: "500px",
        }}
        maxWidth="xs"
      >
        <Formik>
          {() => (
            <Form>
              {getStepContent()}
              <Box
                sx={{
              
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <Button
                  disabled={activeStep === 0}
                  onClick={handleBack}
                  variant="outlined"
                  style={{marginTop:'-35px'}}
                >
                  Back
                </Button>
              </Box>
            </Form>
          )}
        </Formik>
      </Box>
      </div>
    </div>
  );
};

export default LinearStepper;

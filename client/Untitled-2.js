// import React, { useState } from "react";
// import {
//   TextField,
//   Button,
//   Stepper,
//   Step,
//   StepLabel,
//   Typography,
//   IconButton,
// } from "@material-ui/core";
// import { Formik, Form, Field } from "formik";
// import * as Yup from "yup";
// import { createTheme, ThemeProvider } from "@mui/material/styles";
// import Box from "@mui/material/Box";
// import { useNavigate } from "react-router-dom";
// import MenuItem from "@mui/material/MenuItem";
// import { Delete } from "@mui/icons-material";
// import { useFormik } from "formik";

// import { Grid } from "@mui/material";
// import NextFormPage from "./Details";

// const theme = createTheme({
//   palette: {
//     primary: {
//       light: "#757ce8",
//       main: "#3f50b5",
//       dark: "#002884",
//       contrastText: "#fff",
//     },
//   },
// });

// function getSteps() {
//    return ["Basic information", "Contact Information", "Personal Information"];
//   // return ["Basic information", "Contact Information" ];

// }

// const BasicForm = () => {
//   const formik = useFormik({
//     initialValues: {
//       companyName: "",
//       headOfficeName: "",
//       country: "",
//       postalCode: "",
//       city: "",
//       countrycode: "",
//       contactnumber: "",
//       websiteUrl: "",
//       name: "",
//       designation: "",
//       contactnumber2: "",
//       email: "",
//     },
//     onSubmit: (values) => {
//       console.log(values);
//     },
//   });

//   return (
//   <>
//     <Grid container spacing={2}>
//       <Typography
//         variant="h5"
//         style={{ fontWeight: "700", paddingLeft: "15px" }}
//       >
//         Basic Company Information
//       </Typography>
//       <Grid item xs={12}>
//           <TextField
//             id="companyName"
//             name="companyName"
//             label="Company Name"
//             variant="outlined"
//             placeholder="Enter Company Name"
//             fullWidth
//             margin="normal"
//             {...formik.getFieldProps("companyName")}
//           />
//         </Grid>
//         <Grid item xs={12}>
//           <TextField
//             id="headOfficeName"
//             name="headOfficeName"
//             label="Head Office Address"
//             variant="outlined"
//             placeholder="Street Number,House number"
//             fullWidth
//             margin="normal"
//             {...formik.getFieldProps("headOfficeName")}
//           />
//         </Grid>
//         <Grid item xs={12}>
//   <TextField
//     id="country"
//     name="country"
//     label="Country"
//     variant="outlined"
//     fullWidth
//     margin="normal"
//     select
//     {...formik.getFieldProps("country")}
//   >

//     <MenuItem value="USA">USA</MenuItem><br/>
//     <MenuItem value="UK">UK</MenuItem><br/>
//     <MenuItem value="Canada">Canada</MenuItem><br/>
//     <MenuItem value="india">india</MenuItem>

//   </TextField>
// </Grid>

//       <Box
//         sx={{
//           paddingTop: "10px",
//           paddingLeft: "15px",
//           display: "flex",
//           flexDirection: "row",
//           gap: "55px",
//         }}
//       >
//         <Grid item xs={6}>
//         <TextField
//             id="postalCode"
//             name="postalCode"
//             label="Postal Code"
//             variant="outlined"
//             placeholder="Postal Code"
//             fullWidth
//             margin="normal"
//             {...formik.getFieldProps("headOfficeName")}
//           />
//         </Grid>
//         <Grid item xs={12}>
//         <TextField
//             id="city"
//             name="city"
//             label="City"
//             variant="outlined"
//             placeholder="Enter City"
//             fullWidth
//             margin="normal"
//             {...formik.getFieldProps("city")}

//           />
//         </Grid>
//       </Box>
//       <Box
//         sx={{
//           paddingTop: "10px",
//           paddingLeft: "15px",
//           display: "flex",
//           flexDirection: "row",
//           gap: "55px",
//         }}
//       >
//         <Grid item xs={6}>
//         <TextField
//             id="countrycode"
//             name="countrycode"
//             label="Country Code"
//             variant="outlined"
//             placeholder="Country Code"
//             fullWidth
//             margin="normal"
//             {...formik.getFieldProps("countrycode")}
//             />
//         </Grid>
//         <Grid item xs={12}>
//         <TextField
//             id="contactnumber"
//             name="contactnumber"
//             label="Contact Number"
//             variant="outlined"
//             placeholder="Contact Number"
//             fullWidth
//             margin="normal"
//             {...formik.getFieldProps("contactnumber")}
//           />
//         </Grid>
//       </Box>
//       <Grid item xs={12}>
//       <TextField
//           id="websiteUrl"
//           name="websiteUrl"
//           label="Website URL"
//           variant="outlined"
//           placeholder="http://"
//           fullWidth
//           margin="normal"
//           {...formik.getFieldProps("websiteUrl")}        />
//       </Grid>

//       <Typography
//         variant="h5"
//         style={{ fontWeight: "700", paddingLeft: "15px", paddingTop: "20px" }}
//       >
//         Key Contact Person
//       </Typography>

//       <Grid item xs={12}>
//       <TextField
//          id="name"
//           name="name"
//           label="Name"
//           variant="outlined"
//           placeholder="Enter Name"
//           fullWidth
//           margin="normal"
//           {...formik.getFieldProps("name")}

//         />
//       </Grid>
//       <Grid item xs={12}>
//       <TextField
//           id="designation"
//           name="designation"
//           label="Designation"
//           variant="outlined"
//           placeholder="Enter Designation"
//           fullWidth
//           margin="normal"
//           {...formik.getFieldProps("designation")}

//         />
//       </Grid>
//       <Box
//         sx={{
//           paddingTop: "10px",
//           paddingLeft: "15px",
//           display: "flex",
//           flexDirection: "row",
//           gap: "55px",
//         }}
//       >
//         <Grid item xs={6}>
//         <TextField
//             id="countrycode"
//             name="countrycode"
//             label="Country Code"
//             variant="outlined"
//             placeholder="Code"
//             fullWidth
//             margin="normal"
//             {...formik.getFieldProps("countrycode")}

//           />
//         </Grid>
//         <Grid item xs={12}>
//         <TextField
//             id="contactnumber2"
//             name="contactnumber2"
//             label="Contact Number"
//             variant="outlined"
//             placeholder="Contact Number"
//             fullWidth
//             margin="normal"
//             {...formik.getFieldProps("contactnumber")}

//           />
//         </Grid>
//       </Box>
//       <Grid item xs={12}>
//       <TextField
//           id="email"
//           name="email"
//           label="Email"
//           variant="outlined"
//           placeholder="Enter Email"
//           fullWidth
//           margin="normal"
//           {...formik.getFieldProps("email")}

//         />
//       </Grid>
//     </Grid>
//   </>
// );
// }

// const ContactForm = () => {
//   const [teamMembers, setTeamMembers] = useState([{ id: 1 }]);

//   const addTeamMember = () => {
//     const newId = teamMembers.length + 1;
//     setTeamMembers([...teamMembers, { id: newId }]);
//   };

//   const removeTeamMember = (id) => {
//     setTeamMembers(teamMembers.filter(member => member.id !== id));
//   };

//   return (
//     <>
//       <Grid container spacing={2}>
//         <Typography
//           variant="h5"
//           style={{ fontWeight: "700", paddingLeft: "15px" }}
//         >
//           Tell us more about yourself
//         </Typography>
//         <Grid item xs={12}>
//           <Field
//             as={TextField}
//             id="companyprofile"
//             name="companyprofile"
//             label="Brief company profile"
//             variant="outlined"
//             placeholder="Description (Max 200 Words)"
//             fullWidth
//             margin="normal"
//             multiline
//             rows={4}
//           />
//         </Grid>

//         <Grid item xs={12}>
//           <Field
//             as={TextField}
//             id="facebookurl"
//             name="facebookurl"
//             label="Facebook/Linkedin page URL. Youtube link, etc."
//             variant="outlined"
//             placeholder="http://"
//             fullWidth
//             margin="normal"
//           />
//         </Grid>

//         <Grid item xs={12}>
//           <Field
//             as={TextField}
//             id="vision"
//             name="vision"
//             label="Vision/Mission"
//             variant="outlined"
//             placeholder="Description (Max 200 Words)"
//             fullWidth
//             margin="normal"
//             multiline
//             rows={4}
//           />
//         </Grid>

//         <Typography
//           variant="h5"
//           style={{ fontWeight: "700", paddingLeft: "15px", paddingTop: "20px" ,}}
//         >
//          Management Team Details
//         </Typography>
//         <div style={{ height: '500px', overflowY: 'auto',width:'100%' }}>
//         {teamMembers.map(member => (
//           <>

//           <React.Fragment key={member.id}>
//           <Grid item xs={12} style={{display:'flex',justifyContent:'flex-end'}}>
//           <IconButton onClick={() => removeTeamMember(member.id)}>
//            <Delete />
//            </IconButton>
//           </Grid>

//             <Grid item xs={12}>
//               <Field
//                 as={TextField}
//                 id={`name-${member.id}`}
//                 name={`name-${member.id}`}
//                 label="Name"
//                 variant="outlined"
//                 placeholder="Enter Name"
//                 fullWidth
//                 margin="normal"
//               />
//             </Grid>

//             <Grid item xs={12}>
//               <Field
//                 as={TextField}
//                 id={`designation-${member.id}`}
//                 name={`designation-${member.id}`}
//                 label="Designation"
//                 variant="outlined"
//                 placeholder="Enter Designation"
//                 fullWidth
//                 margin="normal"
//               />
//             </Grid>

//             <Grid item xs={12}>
//               <Field
//                 as={TextField}
//                 id={`profilesummary-${member.id}`}
//                 name={`profilesummary-${member.id}`}
//                 label="Profile Summary"
//                 variant="outlined"
//                 placeholder="Description (Max 200 Words)"
//                 fullWidth
//                 margin="normal"
//                 multiline
//                 rows={4}
//               />
//             </Grid>

//             <Grid item xs={12}>
//               <Field
//                 as={TextField}
//                 id={`linkedin-${member.id}`}
//                 name={`linkedin-${member.id}`}
//                 label="Linkedin Profile"
//                 variant="outlined"
//                 placeholder="Profile Link"
//                 fullWidth
//                 margin="normal"
//               />

//             </Grid>

//           </React.Fragment>
//           </>
//         ))}
// </div>
//         <Grid item xs={12}>
//           <Button variant="contained" color="primary" onClick={addTeamMember} style={{width:'100%'}}>
//           +  Add Team Member
//           </Button>
//         </Grid>
//       </Grid>
//     </>
//   );
// }

// const PersonalForm = () => {
//   const [product, setproduct] = useState([{ id: 1 }]);

//   const addproduct = () => {
//     const newId = product.length + 1;
//     setproduct([...product, { id: newId }]);
//   };

//   const removeproduct = (id) => {
//     setproduct(product.filter((member) => member.id !== id));
//   };
//   return (
//     <>
//       <Grid container spacing={2}>
//         <Typography
//           variant="h5"
//           style={{ fontWeight: "700", paddingLeft: "15px" }}
//         >
//           Show your product portfolio
//         </Typography>
//         <div
//           style={{
//             height: "370px",
//             overflowY: "auto",
//             width: "100%",
//             paddingLeft: "15px",
//           }}
//         >
//           {product.map((member) => (
//             <>
//               <Grid
//                 item
//                 xs={12}
//                 style={{ display: "flex", justifyContent: "flex-end" }}
//               >
//                 <IconButton onClick={() => removeproduct(member.id)}>
//                   <Delete />
//                 </IconButton>
//               </Grid>
//               <Grid item xs={12}>
//                 <Field
//                   as={TextField}
//                   id={`productname-${member.id}`}
//                   name={`productname-${member.id}`}
//                   label="Product Name"
//                   variant="outlined"
//                   placeholder="Product Name"
//                   fullWidth
//                   margin="normal"
//                 />
//               </Grid>

//               <Grid item xs={12}>
//                 <Field
//                   as={TextField}
//                   id={`productportfolio-${member.id}`}
//                   name={`productportfolio-${member.id}`}
//                   label="Product portfolio description"
//                   variant="outlined"
//                   placeholder="Brief portfolio description"
//                   fullWidth
//                   margin="normal"
//                   multiline
//                   rows={4}
//                 />
//               </Grid>
//               <Grid item xs={12}>
//                 <Field
//                   as={TextField}
//                   id={`facebookurl-${member.id}`}
//                   name={`facebookurl-${member.id}`}
//                   label="Facebook/Linkedin page URL. Youtube link, etc."
//                   variant="outlined"
//                   placeholder="http://"
//                   fullWidth
//                   margin="normal"
//                 />
//               </Grid>
//             </>
//           ))}
//         </div>

//         <Grid item xs={12}>
//           <Button
//             variant="contained"
//             color="primary"
//             onClick={addproduct}
//             style={{ width: "100%" }}
//           >
//             + Add New Product
//           </Button>
//         </Grid>
//       </Grid>
//     </>
//   );
// };

// function getStepContent(step, values) {
//   switch (step) {
//     case 0:
//       return <BasicForm />;

//     case 1:
//       return <ContactForm />;

//     case 2:
//       return <PersonalForm />;

//     default:
//       return "unknown step";
//   }
// }

// const LinearStepper = () => {
//   const [activeStep, setActiveStep] = useState(0);
//   const steps = getSteps();
//   const navigate = useNavigate();

//   const handleNext = (values) => {
//     setActiveStep(activeStep + 1);
//   };

//   const handleBack = () => {
//     setActiveStep(activeStep - 1);
//   };

//   return (
//     <div>
//       {/* <Stepper alternativeLabel activeStep={activeStep}>
//         {steps.map((step, index) => (
//           <Step key={index}>
//             <StepLabel>{step}</StepLabel>
//           </Step>
//         ))}
//       </Stepper> */}
//       <Box
//         sx={{
//           marginTop: 8,
//           display: "flex",
//           flexDirection: "column",
//           alignItems: "center",
//           padding: "50px",
//           width: "500px",
//         }}
//         maxWidth="xs"
//       >
//         <Formik
//           initialValues={{
//             firstName: "",
//             lastName: "",
//             phone: "",
//             country: "",
//             state: "",
//             address1: "",
//             address2: "",
//             email: "",
//             pincode: "",
//           }}
//           onSubmit={(values) => {
//             if (activeStep === steps.length - 1) {
//               navigate("/message");

//               console.log("Finish button clicked");
//               // Display the new component
//             } else {
//               handleNext(values);
//             }
//             console.log(values);
//           }}
//         >
//           {({ errors }) => (
//             <Form>
//               {getStepContent(activeStep)}

//               <Box
//                 sx={{
//                   marginTop: "40px",
//                   display: "flex",
//                   justifyContent: "space-between",
//                 }}
//               >
//                 <Button
//                   disabled={activeStep === 0}
//                   onClick={handleBack}
//                   variant="outlined"
//                 >
//                   Back
//                 </Button>
//                 <Button
//                   variant="contained"
//                   color="primary"
//                   type="submit"
//                   disabled={Object.keys(errors).length > 0}
//                 >
//                   {activeStep === steps.length - 1 ? "Finish" : "Continue"}
//                 </Button>
//               </Box>
//             </Form>
//           )}
//         </Formik>
//       </Box>
//     </div>
//   );
// };

// export default LinearStepper;

// import { useState, useEffect } from "react"
// import axios from "axios"

// function Contact() {
//     const [email, setEmail] = useState('')
//     const [message, setMessage] = useState('')
//     const [error, setError] = useState('')
//     const [selectData, setSelectData] = useState([])
//     const [selectValue, setSelectValue] = useState('')

//     useEffect( () => {
//         let processing = true
//         axiosFetchData(processing)
//         return () => {
//             processing = false
//         }
//     },[])

//     const axiosFetchData = async(processing) => {
//         await axios.get('http://localhost:4000/users')
//         .then(res => {
//             if (processing) {
//                 setSelectData(res.data)
//             }
//         })
//         .catch(err => console.log(err))
//     }

//     const axiosPostData = async() => {
//         const postData = {
//             email: email,
//             website: selectValue,
//             message: message
//         }

//         await axios.post('http://localhost:4000/contact/send', postData)
//         .then(res => setError(<p className="success">{res.data}</p>))
//     }

//     const SelectDropdown = () => {
//         return (
//             <select value={selectValue} onChange={(e) => setSelectValue(e.target.value)}>
//                 <option value="" key="none"> -- Select One -- </option>
//                 {
//                     selectData?.map( (item) => (
//                         <option value={item.website} key={item.website}>{item.website}</option>
//                     ))
//                 }
//             </select>
//         )
//     }

//     const handleSubmit = (e) => {
//         e.preventDefault()

//         if (!message) {
//             setError(<p className="required">Message is empty. Please type a message.</p>)
//         } else {
//             setError('')
//             axiosPostData()
//         }
//     }

//     return (
//         <>
//             <h1>Contact Us</h1>

//             <form className="contactForm">
//                 <label>Email</label>
//                 <input type="text" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />

//                 <label>How Did You Hear About Us?</label>
//                 <SelectDropdown />

//                 <label>Message</label>
//                 <textarea id="message" name="message" value={message} onChange={(e) => setMessage(e.target.value)}></textarea>

//                 {error}

//                 <button type="submit" onClick={handleSubmit}>Submit</button>
//             </form>
//         </>
//     )
// }

// export default Contact

// import React, { useState } from "react";
// import {
//   TextField,
//   Button,
//   Stepper,
//   Step,
//   StepLabel,
//   Typography,
//   IconButton,
// } from "@material-ui/core";
// import { Formik, Form, Field } from "formik";
// import * as Yup from "yup";
// import { createTheme, ThemeProvider } from "@mui/material/styles";
// import Box from "@mui/material/Box";
// import { useNavigate } from "react-router-dom";
// import MenuItem from "@mui/material/MenuItem";
// import { Delete } from "@mui/icons-material";
// import { useFormik } from "formik";

// import { Grid } from "@mui/material";
// import NextFormPage from "./Details";

// const theme = createTheme({
//   palette: {
//     primary: {
//       light: "#757ce8",
//       main: "#3f50b5",
//       dark: "#002884",
//       contrastText: "#fff",
//     },
//   },
// });

// function getSteps() {
//   //  return ["Basic information", "Contact Information", "Personal Information"];
// return ["Basic information", ];

// }

// const BasicForm = () => {
//   const formik = useFormik({
//     initialValues: {
//         companyName: "",
//         headOfficeName: "",
//         country: "",
//         postalCode: "",
//         city: "",
//         countrycode: "",
//         contactnumber: "",
//         websiteUrl: "",
//         name: "",
//         designation: "",
//         contactnumber2: "",
//         email: "",
//     },
//     onSubmit: async (values) => {
//         try {
//             const response = await fetch('http://localhost:4000/users', {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify(values),
//             });

//             if (response.ok) {
//                 console.log('Data sent successfully');
//             } else {
//                 console.error('Failed to send data');
//             }
//         } catch (error) {
//             console.error('Error sending data:', error);
//         }
//     },
// });

//   return (
//   <>
//     <Grid container spacing={2}>
//       <Typography
//         variant="h5"
//         style={{ fontWeight: "700", paddingLeft: "15px" }}
//       >
//         Basic Company Information
//       </Typography>
//       <Grid item xs={12}>
//           <TextField
//             id="companyName"
//             name="companyName"
//             label="Company Name"
//             variant="outlined"
//             placeholder="Enter Company Name"
//             fullWidth
//             margin="normal"
//             {...formik.getFieldProps("companyName")}
//           />
//         </Grid>
//         <Grid item xs={12}>
//           <TextField
//             id="headOfficeName"
//             name="headOfficeName"
//             label="Head Office Address"
//             variant="outlined"
//             placeholder="Street Number,House number"
//             fullWidth
//             margin="normal"
//             {...formik.getFieldProps("headOfficeName")}
//           />
//         </Grid>
//         <Grid item xs={12}>
//   <TextField
//     id="country"
//     name="country"
//     label="Country"
//     variant="outlined"
//     fullWidth
//     margin="normal"
//     select
//     {...formik.getFieldProps("country")}
//   >

//     <MenuItem value="USA">USA</MenuItem><br/>
//     <MenuItem value="UK">UK</MenuItem><br/>
//     <MenuItem value="Canada">Canada</MenuItem><br/>
//     <MenuItem value="india">india</MenuItem>

//   </TextField>
// </Grid>

//       <Box
//         sx={{
//           paddingTop: "10px",
//           paddingLeft: "15px",
//           display: "flex",
//           flexDirection: "row",
//           gap: "55px",
//         }}
//       >
//         <Grid item xs={6}>
//         <TextField
//             id="postalCode"
//             name="postalCode"
//             label="Postal Code"
//             variant="outlined"
//             placeholder="Postal Code"
//             fullWidth
//             margin="normal"
//             {...formik.getFieldProps("headOfficeName")}
//           />
//         </Grid>
//         <Grid item xs={12}>
//         <TextField
//             id="city"
//             name="city"
//             label="City"
//             variant="outlined"
//             placeholder="Enter City"
//             fullWidth
//             margin="normal"
//             {...formik.getFieldProps("city")}

//           />
//         </Grid>
//       </Box>
//       <Box
//         sx={{
//           paddingTop: "10px",
//           paddingLeft: "15px",
//           display: "flex",
//           flexDirection: "row",
//           gap: "55px",
//         }}
//       >
//         <Grid item xs={6}>
//         <TextField
//             id="countrycode"
//             name="countrycode"
//             label="Country Code"
//             variant="outlined"
//             placeholder="Country Code"
//             fullWidth
//             margin="normal"
//             {...formik.getFieldProps("countrycode")}
//             />
//         </Grid>
//         <Grid item xs={12}>
//         <TextField
//             id="contactnumber"
//             name="contactnumber"
//             label="Contact Number"
//             variant="outlined"
//             placeholder="Contact Number"
//             fullWidth
//             margin="normal"
//             {...formik.getFieldProps("contactnumber")}
//           />
//         </Grid>
//       </Box>
//       <Grid item xs={12}>
//       <TextField
//           id="websiteUrl"
//           name="websiteUrl"
//           label="Website URL"
//           variant="outlined"
//           placeholder="http://"
//           fullWidth
//           margin="normal"
//           {...formik.getFieldProps("websiteUrl")}        />
//       </Grid>

//       <Typography
//         variant="h5"
//         style={{ fontWeight: "700", paddingLeft: "15px", paddingTop: "20px" }}
//       >
//         Key Contact Person
//       </Typography>

//       <Grid item xs={12}>
//       <TextField
//          id="name"
//           name="name"
//           label="Name"
//           variant="outlined"
//           placeholder="Enter Name"
//           fullWidth
//           margin="normal"
//           {...formik.getFieldProps("name")}

//         />
//       </Grid>
//       <Grid item xs={12}>
//       <TextField
//           id="designation"
//           name="designation"
//           label="Designation"
//           variant="outlined"
//           placeholder="Enter Designation"
//           fullWidth
//           margin="normal"
//           {...formik.getFieldProps("designation")}

//         />
//       </Grid>
//       <Box
//         sx={{
//           paddingTop: "10px",
//           paddingLeft: "15px",
//           display: "flex",
//           flexDirection: "row",
//           gap: "55px",
//         }}
//       >
//         <Grid item xs={6}>
//         <TextField
//             id="countrycode"
//             name="countrycode"
//             label="Country Code"
//             variant="outlined"
//             placeholder="Code"
//             fullWidth
//             margin="normal"
//             {...formik.getFieldProps("countrycode")}

//           />
//         </Grid>
//         <Grid item xs={12}>
//         <TextField
//             id="contactnumber2"
//             name="contactnumber2"
//             label="Contact Number"
//             variant="outlined"
//             placeholder="Contact Number"
//             fullWidth
//             margin="normal"
//             {...formik.getFieldProps("contactnumber")}

//           />
//         </Grid>
//       </Box>
//       <Grid item xs={12}>
//       <TextField
//           id="email"
//           name="email"
//           label="Email"
//           variant="outlined"
//           placeholder="Enter Email"
//           fullWidth
//           margin="normal"
//           {...formik.getFieldProps("email")}

//         />
//       </Grid>
//     </Grid>
//   </>
// );
// }

// function getStepContent(step, values) {
//   switch (step) {
//     case 0:
//       return <BasicForm />;

//     // case 1:
//     //   return <ContactForm />;

//     // case 2:
//     //   return <PersonalForm />;

//     default:
//       return "unknown step";
//   }
// }

// const LinearStepper = () => {
//   const [activeStep, setActiveStep] = useState(0);
//   const steps = getSteps();
//   const navigate = useNavigate();

//   const handleNext = (values) => {
//     setActiveStep(activeStep + 1);
//   };

//   const handleBack = () => {
//     setActiveStep(activeStep - 1);
//   };

//   return (
//     <div>
//       {/* <Stepper alternativeLabel activeStep={activeStep}>
//         {steps.map((step, index) => (
//           <Step key={index}>
//             <StepLabel>{step}</StepLabel>
//           </Step>
//         ))}
//       </Stepper> */}
//       <Box
//         sx={{
//           marginTop: 8,
//           display: "flex",
//           flexDirection: "column",
//           alignItems: "center",
//           padding: "50px",
//           width: "500px",
//         }}
//         maxWidth="xs"
//       >
//         <Formik
//         >
//           {({ errors }) => (
//             <Form>
//               {getStepContent(activeStep)}

//               <Box
//                 sx={{
//                   marginTop: "40px",
//                   display: "flex",
//                   justifyContent: "space-between",
//                 }}
//               >
//                 <Button
//                   disabled={activeStep === 0}
//                   onClick={handleBack}
//                   variant="outlined"
//                 >
//                   Back
//                 </Button>
//                 <Button
//                   variant="contained"
//                   color="primary"
//                   type="submit"
//                   disabled={Object.keys(errors).length > 0}
//                 >
//                   {activeStep === steps.length - 1 ? "Finish" : "Continue"}
//                 </Button>
//               </Box>
//             </Form>
//           )}
//         </Formik>
//       </Box>
//     </div>
//   );
// };

// export default LinearStepper;

// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import {
//   TextField,
//   Button,
//   Stepper,
//   Step,
//   StepLabel,
//   Typography,
//   IconButton,
// } from "@material-ui/core";
// import { Formik, Form, Field } from "formik";
// import * as Yup from "yup";
// import { createTheme, ThemeProvider } from "@mui/material/styles";
// import Box from "@mui/material/Box";
// import { useNavigate } from "react-router-dom";
// import MenuItem from "@mui/material/MenuItem";
// import { Delete } from "@mui/icons-material";
// import { useFormik } from "formik";

// import { Grid } from "@mui/material";
// import NextFormPage from "./Details";

// const theme = createTheme({
//   palette: {
//     primary: {
//       light: "#757ce8",
//       main: "#3f50b5",
//       dark: "#002884",
//       contrastText: "#fff",
//     },
//   },
// });

// function getSteps() {
//   //  return ["Basic information", "Contact Information", "Personal Information"];
// return ["Basic information", "Contact Information"];

// }

// const BasicForm = () => {

//     const [companyName, setcompanyName] = useState('')
//     const [headOfficeName, setheadOfficeName] = useState('')
//     const [country, setcountry] = useState('')
//     const [postalCode, setpostalCode] = useState('')
//     const [city, setcity] = useState('')
//     const [countrycode, setcountrycode] = useState('')

//     const [contactnumber, setcontactnumber] = useState('')

//     const [websiteUrl, setwebsiteUrl] = useState('')
//     const [name, setname] = useState('')
//     const [designation, setdesignation] = useState('')
//     const [contactnumber2, setcontactnumber2] = useState('')
//     const [email, setemail] = useState('')

//     const [error, setError] = useState('')
//     const [selectData, setSelectData] = useState([])
//     const [selectValue, setSelectValue] = useState('')

//     useEffect( () => {
//         let processing = true
//         axiosFetchData(processing)
//         return () => {
//             processing = false
//         }
//     },[])

//     const axiosFetchData = async(processing) => {
//         await axios.get('http://localhost:4000/users')
//         .then(res => {
//             if (processing) {
//                 setSelectData(res.data)
//             }
//         })
//         .catch(err => console.log(err))
//     }

//     const axiosPostData = async() => {
//         const postData = {
//             companyName: companyName,
//              headOfficeName: headOfficeName,
//               country: country,
//               postalCode: postalCode,
//               city:city,
//                countrycode: countrycode,
//                contactnumber:contactnumber,
//                 websiteUrl:websiteUrl,
//                 name:name,
//                 designation:designation,
//                 contactnumber2:contactnumber2,
//             email:email

//         };

//         await axios.post('http://localhost:4000/contact/send', postData)
//         .then(res => {
//             setError(<p className="success">{res.data}</p>);
//             // Show an alert message
//             window.alert('Data has been sent successfully.');
//             // Refresh the page
//             console.log(postData)
//             window.location.reload();
//         })
//         .catch(err => {
//             // Handle errors (you may want to update error state here)
//             console.error(err);
//         });
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault()

//         if (!postalCode) {
//             setError(<p className="required">Message is empty. Please type a message.</p>)
//         } else {
//             setError('')
//             axiosPostData()
//         }
//     }

// //   const formik = useFormik({
// //       initialValues: {
// //           companyName: "",
// //           headOfficeName: "",
// //           country: "",
// //           postalCode: "",
// //           city: "",
// //           countrycode: "",
// //           contactnumber: "",
// //           websiteUrl: "",
// //           name: "",
// //           designation: "",
// //           contactnumber2: "",
// //           email: "",
// //       },
// //       onSubmit: async (values) => {
// //           try {
// //               const response = await fetch("http://localhost:4000/users", {
// //                   method: "POST",
// //                   headers: {
// //                       "Content-Type": "application/json",
// //                   },
// //                   body: JSON.stringify(values),
// //               });

// //               if (response.ok) {
// //                   console.log("Data sent successfully");
// //               } else {
// //                   console.error("Failed to send data");
// //               }
// //           } catch (error) {
// //               console.error("Error sending data:", error);
// //           }
// //       },
// //   });

//   return (
//       <>
//           <Typography variant="h5" style={{ fontWeight: "700", paddingLeft: "15px" }}>
//               Basic Company Information
//           </Typography>
//           <Formik

//           >

//                   <Form onSubmit={handleSubmit}>
//                       <Grid container spacing={2}>
//                           <Grid item xs={12}>
//                               <TextField
//                                   id="companyName"
//                                   name="companyName"
//                                   label="Company Name"
//                                   variant="outlined"
//                                   placeholder="Enter Company Name"
//                                   fullWidth
//                                   margin="normal"
//                                   onChange={(e)=>setcompanyName(e.target.value)}
//                                   value={companyName}
//                               />
//                           </Grid>
//                           <Grid item xs={12}>
//                               <TextField
//                                   id="headOfficeName"
//                                   name="headOfficeName"
//                                   label="Head Office Address"
//                                   variant="outlined"
//                                   placeholder="Street Number, House Number"
//                                   fullWidth
//                                   margin="normal"
//                                   onChange={(e)=>setheadOfficeName(e.target.value)}
//                                   value={headOfficeName}
//                               />
//                           </Grid>
//                           <Grid item xs={12}>
//                               <TextField
//                                   id="country"
//                                   name="country"
//                                   label="Country"
//                                   variant="outlined"
//                                   select
//                                   fullWidth
//                                   margin="normal"
//                                   onChange={(e)=>setcountry(e.target.value)}
//                                   value={country}
//                               >
//                                   <MenuItem value="USA">USA</MenuItem>
//                                   <MenuItem value="UK">UK</MenuItem>
//                                   <MenuItem value="Canada">Canada</MenuItem>
//                                   <MenuItem value="India">India</MenuItem>
//                               </TextField>
//                           </Grid>
//                           <Grid item xs={12}>
//                               <TextField
//                                   id="postalCode"
//                                   name="postalCode"
//                                   label="Postal Code"
//                                   variant="outlined"
//                                   fullWidth
//                                   margin="normal"
//                                   onChange={(e)=>setpostalCode(e.target.value)}
//                                   value={postalCode}
//                               />
//                           </Grid>
//                          <Grid item xs={12}>
//                               <TextField
//                                   id="city"
//                                   name="city"
//                                   label="City"
//                                   variant="outlined"
//                                   fullWidth
//                                   margin="normal"
//                                   onChange={(e)=>setcity(e.target.value)}

//                                   value={city}
//                               />
//                           </Grid>
//                           <Grid item xs={12}>
//                               <TextField
//                                   id="countrycode"
//                                   name="countrycode"
//                                   label="Country Code"
//                                   variant="outlined"
//                                   fullWidth
//                                   margin="normal"
//                                   onChange={(e)=>setcountrycode(e.target.value)}

//                                   value={countrycode}
//                               />
//                           </Grid>
//                           <Grid item xs={12}>
//                               <TextField
//                                   id="contactnumber"
//                                   name="contactnumber"
//                                   label="Contact Number"
//                                   variant="outlined"
//                                   fullWidth
//                                   margin="normal"
//                                   onChange={(e)=>setcontactnumber(e.target.value)}

//                                   value={contactnumber}
//                               />
//                           </Grid>
//                           <Grid item xs={12}>
//                               <TextField
//                                   id="websiteUrl"
//                                   name="websiteUrl"
//                                   label="Website URL"
//                                   variant="outlined"
//                                   fullWidth
//                                   margin="normal"
//                                   onChange={(e)=>setwebsiteUrl(e.target.value)}

//                                   value={websiteUrl}
//                               />
//                           </Grid>
//                           <Typography
//                               variant="h5"
//                               style={{ fontWeight: "700", paddingLeft: "15px", paddingTop: "20px" }}
//                           >
//                               Key Contact Person
//                           </Typography>
//                           <Grid item xs={12}>
//                               <TextField
//                                   id="name"
//                                   name="name"
//                                   label="Name"
//                                   variant="outlined"
//                                   fullWidth
//                                   margin="normal"
//                                   onChange={(e)=>setname(e.target.value)}

//                                   value={name}
//                               />
//                           </Grid>
//                           <Grid item xs={12}>
//                               <TextField
//                                   id="designation"
//                                   name="designation"
//                                   label="Designation"
//                                   variant="outlined"
//                                   fullWidth
//                                   margin="normal"
//                                   onChange={(e)=>setdesignation(e.target.value)}

//                                   value={designation}
//                               />
//                           </Grid>
//                           <Grid item xs={12}>
//                               <TextField
//                                   id="contactnumber2"
//                                   name="contactnumber2"
//                                   label="Contact Number"
//                                   variant="outlined"
//                                   fullWidth
//                                   margin="normal"
//                                   onChange={(e)=>setcontactnumber2(e.target.value)}
//                                   value={contactnumber2}
//                               />
//                           </Grid>
//                           <Grid item xs={12}>
//                               <TextField
//                                   id="email"
//                                   name="email"
//                                   label="Email"
//                                   variant="outlined"
//                                   fullWidth
//                                   margin="normal"
//                                   onChange={(e)=>setemail(e.target.value)}
//                                   value={email}
//                               />
//                           </Grid>
//                           <Grid item xs={12}>
//                               <Button variant="contained" color="primary" type="submit" onClick={handleSubmit}>
//                                   Submit
//                               </Button>
//                           </Grid>
//                       </Grid>
//                   </Form>

//           </Formik>
//       </>
//   );
// };

// const ContactForm = () => {
//   const [teamMembers, setTeamMembers] = useState([{ id: 1 }]);

//   const addTeamMember = () => {
//     const newId = teamMembers.length + 1;
//     setTeamMembers([...teamMembers, { id: newId }]);
//   };

//   const removeTeamMember = (id) => {
//     setTeamMembers(teamMembers.filter(member => member.id !== id));
//   };

//   return (
//     <>
//       <Grid container spacing={2}>
//         <Typography
//           variant="h5"
//           style={{ fontWeight: "700", paddingLeft: "15px" }}
//         >
//           Tell us more about yourself
//         </Typography>
//         <Grid item xs={12}>
//           <Field
//             as={TextField}
//             id="companyprofile"
//             name="companyprofile"
//             label="Brief company profile"
//             variant="outlined"
//             placeholder="Description (Max 200 Words)"
//             fullWidth
//             margin="normal"
//             multiline
//             rows={4}
//           />
//         </Grid>

//         <Grid item xs={12}>
//           <Field
//             as={TextField}
//             id="facebookurl"
//             name="facebookurl"
//             label="Facebook/Linkedin page URL. Youtube link, etc."
//             variant="outlined"
//             placeholder="http://"
//             fullWidth
//             margin="normal"
//           />
//         </Grid>

//         <Grid item xs={12}>
//           <Field
//             as={TextField}
//             id="vision"
//             name="vision"
//             label="Vision/Mission"
//             variant="outlined"
//             placeholder="Description (Max 200 Words)"
//             fullWidth
//             margin="normal"
//             multiline
//             rows={4}
//           />
//         </Grid>

//         <Typography
//           variant="h5"
//           style={{ fontWeight: "700", paddingLeft: "15px", paddingTop: "20px" ,}}
//         >
//          Management Team Details
//         </Typography>
//         <div style={{ height: '500px', overflowY: 'auto',width:'100%' }}>
//         {teamMembers.map(member => (
//           <>

//           <React.Fragment key={member.id}>
//           <Grid item xs={12} style={{display:'flex',justifyContent:'flex-end'}}>
//           <IconButton onClick={() => removeTeamMember(member.id)}>
//            <Delete />
//            </IconButton>
//           </Grid>

//             <Grid item xs={12}>
//               <Field
//                 as={TextField}
//                 id={`name-${member.id}`}
//                 name={`name-${member.id}`}
//                 label="Name"
//                 variant="outlined"
//                 placeholder="Enter Name"
//                 fullWidth
//                 margin="normal"
//               />
//             </Grid>

//             <Grid item xs={12}>
//               <Field
//                 as={TextField}
//                 id={`designation-${member.id}`}
//                 name={`designation-${member.id}`}
//                 label="Designation"
//                 variant="outlined"
//                 placeholder="Enter Designation"
//                 fullWidth
//                 margin="normal"
//               />
//             </Grid>

//             <Grid item xs={12}>
//               <Field
//                 as={TextField}
//                 id={`profilesummary-${member.id}`}
//                 name={`profilesummary-${member.id}`}
//                 label="Profile Summary"
//                 variant="outlined"
//                 placeholder="Description (Max 200 Words)"
//                 fullWidth
//                 margin="normal"
//                 multiline
//                 rows={4}
//               />
//             </Grid>

//             <Grid item xs={12}>
//               <Field
//                 as={TextField}
//                 id={`linkedin-${member.id}`}
//                 name={`linkedin-${member.id}`}
//                 label="Linkedin Profile"
//                 variant="outlined"
//                 placeholder="Profile Link"
//                 fullWidth
//                 margin="normal"
//               />

//             </Grid>

//           </React.Fragment>
//           </>
//         ))}
// </div>
//         <Grid item xs={12}>
//           <Button variant="contained" color="primary" onClick={addTeamMember} style={{width:'100%'}}>
//           +  Add Team Member
//           </Button>
//         </Grid>
//       </Grid>
//     </>
//   );
// }

// function getStepContent(step, values) {
//   switch (step) {
//     case 0:
//       return <BasicForm />;

//     case 1:
//       return <ContactForm />;

//     // case 2:
//     //   return <PersonalForm />;

//     default:
//       return "unknown step";
//   }
// }

// const LinearStepper = () => {
//   const [activeStep, setActiveStep] = useState(0);
//   const steps = getSteps();
//   const navigate = useNavigate();

//   const handleNext = (values) => {
//     setActiveStep(activeStep + 1);
//   };

//   const handleBack = () => {
//     setActiveStep(activeStep - 1);
//   };

//   return (
//     <div>
//       {/* <Stepper alternativeLabel activeStep={activeStep}>
//         {steps.map((step, index) => (
//           <Step key={index}>
//             <StepLabel>{step}</StepLabel>
//           </Step>
//         ))}
//       </Stepper> */}
//       <Box
//         sx={{
//           marginTop: 8,
//           display: "flex",
//           flexDirection: "column",
//           alignItems: "center",
//           padding: "50px",
//           width: "500px",
//         }}
//         maxWidth="xs"
//       >
//         <Formik
//         >
//           {({ errors }) => (
//             <Form>
//               {getStepContent(activeStep)}

//               <Box
//                 sx={{
//                   marginTop: "40px",
//                   display: "flex",
//                   justifyContent: "space-between",
//                 }}
//               >
//                 <Button
//                   disabled={activeStep === 0}
//                   onClick={handleBack}
//                   variant="outlined"
//                 >
//                   Back
//                 </Button>
//                 <Button
//                   variant="contained"
//                   color="primary"
//                   type="submit"
//                   disabled={Object.keys(errors).length > 0}
//                 >
//                   {activeStep === steps.length - 1 ? "Finish" : "Continue"}
//                 </Button>
//               </Box>
//             </Form>
//           )}
//         </Formik>
//       </Box>
//     </div>
//   );
// };

// export default LinearStepper;
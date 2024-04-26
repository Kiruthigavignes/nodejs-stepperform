import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import { Paper, Typography, Box ,Button } from '@mui/material';

import { useNavigate } from 'react-router-dom';


const DataTable = () => {
    const location = useLocation(); 

    const [data, setData] = useState([]);
    const formData = location.state?.formData;
    const navigate = useNavigate(); 


    useEffect(() => {
        if (formData) {
            setData([formData]);
        } else {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:4000/contact/data');
                if (Array.isArray(response.data.data)) {
                    setData(response.data.data); 
                } else {
                    console.error('Unexpected data format:', response.data);
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }
}, [formData]);

const handleBack = () => {
    navigate('/form'); 
};
    return (
        <Paper style={{ margin: '20px', padding: '10px' }}>
            <Box sx={{display:'flex',justifyContent:'end'}}>
              <Button variant="contained" color="primary" onClick={handleBack} style={{ marginBottom: '20px' }}>
                Back
            </Button>
            </Box>
        {data.map((contact, index) => (
            <Box key={index} style={{ marginBottom: '20px' }}>
                <Typography variant="h6" style={{fontWeight:'700'}}>Contact Details</Typography>
                <hr/>
                <Box display="flex">
                    <Typography variant="body2" style={{ width: '30%', fontWeight: 'bold' }}>
                        Company Name:
                    </Typography>
                    <Typography variant="body2">{contact.companyName}</Typography>
                </Box>
                <Box display="flex">
                    <Typography variant="body2" style={{ width: '30%', fontWeight: 'bold' }}>
                        Head Office Name:
                    </Typography>
                    <Typography variant="body2">{contact.headOfficeName}</Typography>
                </Box>
                <Box display="flex">
                    <Typography variant="body2" style={{ width: '30%', fontWeight: 'bold' }}>
                        Country:
                    </Typography>
                    <Typography variant="body2">{contact.country}</Typography>
                </Box>
                <Box display="flex">
                    <Typography variant="body2" style={{ width: '30%', fontWeight: 'bold' }}>
                        City:
                    </Typography>
                    <Typography variant="body2">{contact.city}</Typography>
                </Box>
                <Box display="flex">
                    <Typography variant="body2" style={{ width: '30%', fontWeight: 'bold' }}>
                        Postal Code:
                    </Typography>
                    <Typography variant="body2">{contact.postalCode}</Typography>
                </Box>
                <Box display="flex">
                    <Typography variant="body2" style={{ width: '30%', fontWeight: 'bold' }}>
                        Country Code:
                    </Typography>
                    <Typography variant="body2">{contact.countrycode}</Typography>
                </Box>
                <Box display="flex">
                    <Typography variant="body2" style={{ width: '30%', fontWeight: 'bold' }}>
                        Contact Number:
                    </Typography>
                    <Typography variant="body2">{contact.contactnumber}</Typography>
                </Box>
                <Box display="flex">
                    <Typography variant="body2" style={{ width: '30%', fontWeight: 'bold' }}>
                        Website URL:
                    </Typography>
                    <Typography variant="body2"><a href={contact.websiteUrl} target="_blank" rel="noopener noreferrer">{contact.websiteUrl}</a></Typography>
                </Box>
                <Typography variant="h6" style={{ marginTop: '20px' ,fontWeight:'700'}}>Key Contact Details</Typography>
<hr/>
                <Box display="flex">
                    <Typography variant="body2" style={{ width: '30%', fontWeight: 'bold' }}>
                        Name:
                    </Typography>
                    <Typography variant="body2">{contact.name}</Typography>
                </Box>
                <Box display="flex">
                    <Typography variant="body2" style={{ width: '30%', fontWeight: 'bold' }}>
                        Designation:
                    </Typography>
                    <Typography variant="body2">{contact.designation}</Typography>
                </Box>
                <Box display="flex">
                    <Typography variant="body2" style={{ width: '30%', fontWeight: 'bold' }}>
                        Contact Number:
                    </Typography>
                    <Typography variant="body2">{contact.contactnumber2}</Typography>
                </Box>
                <Box display="flex">
                    <Typography variant="body2" style={{ width: '30%', fontWeight: 'bold' }}>
                        Email:
                    </Typography>
                    <Typography variant="body2">{contact.email}</Typography>
                </Box>
                <Typography variant="h6" style={{ marginTop: '10px' ,fontWeight:'700'
            }}>Company Profile</Typography>
            <hr/>
                <Box display="flex">
                    <Typography variant="body2" style={{ width: '30%', fontWeight: 'bold' }}>
                        Company Profile:
                    </Typography>
                    <Typography variant="body2">{contact.companyprofile}</Typography>
                </Box>
                <Box display="flex">
                    <Typography variant="body2" style={{ width: '30%', fontWeight: 'bold' }}>
                        Facebook URL:
                    </Typography>
                    <Typography variant="body2"><a href={contact.facebookurl} target="_blank" rel="noopener noreferrer">{contact.facebookurl}</a></Typography>
                </Box>
                <Box display="flex">
                    <Typography variant="body2" style={{ width: '30%', fontWeight: 'bold' }}>
                        Vision:
                    </Typography>
                    <Typography variant="body2">{contact.vision}</Typography>
                </Box>
                <Typography variant="h6" style={{ marginTop: '10px',fontWeight:'700' }}>Team Members</Typography>
                <hr/>
              
                {contact.teamMembers.map((member, idx) => (
                    <Box key={idx} style={{ marginLeft: '20px',marginTop:'15px' }}>
                        <Box display="flex">
                            <Typography variant="body2" style={{ width: '30%', fontWeight: 'bold' }}>
                                Name:
                            </Typography>
                            <Typography variant="body2">{member.name}</Typography>
                        </Box>
                        <Box display="flex">
                            <Typography variant="body2" style={{ width: '30%', fontWeight: 'bold' }}>
                                Designation:
                            </Typography>
                            <Typography variant="body2">{member.designation}</Typography>
                        </Box>
                        <Box display="flex">
                            <Typography variant="body2" style={{ width: '30%', fontWeight: 'bold' }}>
                                Profile Summary:
                            </Typography>
                            <Typography variant="body2">{member.profilesummary}</Typography>
                        </Box>
                        <Box display="flex">
                            <Typography variant="body2" style={{ width: '30%', fontWeight: 'bold' }}>
                                LinkedIn:
                            </Typography>
                            <Typography variant="body2"><a href={member.linkedin} target="_blank" rel="noopener noreferrer">{member.linkedin}</a></Typography>
                        </Box>
                    </Box>
                ))}
                <Typography variant="h6" style={{ marginTop: '10px',fontWeight:'700' }}>Products</Typography>
                <hr/>
                {contact.product.map((prod, idx) => (
                    <Box key={idx} style={{ marginLeft: '20px' ,marginTop:'15px'}}>
                        <Box display="flex">
                            <Typography variant="body2" style={{ width: '30%', fontWeight: 'bold' }}>
                                Product Name:
                            </Typography>
                            <Typography variant="body2">{prod.productname}</Typography>
                        </Box>
                        <Box display="flex">
                            <Typography variant="body2" style={{ width: '30%', fontWeight: 'bold' }}>
                                Portfolio Description:
                            </Typography>
                            <Typography variant="body2">{prod.productportfolio}</Typography>
                        </Box>
                        <Box display="flex">
                            <Typography variant="body2" style={{ width: '30%', fontWeight: 'bold' }}>
                                Facebook URL:
                            </Typography>
                            <Typography variant="body2"><a href={prod.facebookurl} target="_blank" rel="noopener noreferrer">{prod.facebookurl}</a></Typography>
                        </Box>
                    </Box>
                ))}
            </Box>
        ))}
    </Paper>
);
};

export default DataTable;




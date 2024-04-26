import React from 'react';
import { useSelector } from 'react-redux';
import { Table, TableBody, TableCell, TableContainer, TableRow, Paper, Button } from '@material-ui/core';


const NextFormPage = () => {
  const {formData} = useSelector((state)=>state.formData);
 
  console.log(formData);
  const handleButtonClick = () => {
    console.log(formData);
  };

  return (
    <>
      <h2>Check Details</h2>
      <TableContainer component={Paper}>
        <Table aria-label="form data table">
        
          <TableBody>
            <TableRow>
              <TableCell>FirstName:</TableCell>
              <TableCell>{formData?.firstName}</TableCell>
            </TableRow>
          </TableBody>
          <TableBody>
            <TableRow>
              <TableCell>LastName:</TableCell>
              <TableCell>{formData?.lastName}</TableCell>
            </TableRow>
          </TableBody>
          <TableBody>
            <TableRow>
              <TableCell>Address1:</TableCell>
              <TableCell>{formData?.address1}</TableCell>
            </TableRow>
          </TableBody>
          <TableBody>
            <TableRow>
              <TableCell>Address2:</TableCell>
              <TableCell>{formData?.address2}</TableCell>
            </TableRow>
          </TableBody>
          <TableBody>
            <TableRow>
              <TableCell>Country:</TableCell>
              <TableCell>{formData?.country}</TableCell>
            </TableRow>
          </TableBody>
          <TableBody>
            <TableRow>
              <TableCell>State:</TableCell>
              <TableCell>{formData?.state}</TableCell>
            </TableRow>
          </TableBody>
          <TableBody>
            <TableRow>
              <TableCell>Eamil:</TableCell>
              <TableCell>{formData?.email}</TableCell>
            </TableRow>
          </TableBody>
         
        </Table>
      </TableContainer>
    </>
  );
};

export default NextFormPage;

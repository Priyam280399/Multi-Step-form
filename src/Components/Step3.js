import React from 'react';
import { Box } from '@mui/material';

const Step3 = ({ formData }) => {
  return (
    <Box>
      <h2>Step 3: Confirmation</h2>
      <p>Name: {formData.name}</p>
      <p>Email: {formData.email}</p>
      <p>Phone: {formData.phone}</p>
      <p>Address Line 1: {formData.address1}</p>
      <p>Address Line 2: {formData.address2}</p>
      <p>City: {formData.city}</p>
      <p>State: {formData.state}</p>
      <p>Zip Code: {formData.zip}</p>
    </Box>
  );
};

export default Step3;

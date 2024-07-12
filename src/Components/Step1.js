import React from 'react';
import { TextField, Box } from '@mui/material';

const Step1 = ({ formData, handleChange, errors }) => {
  return (
    <Box>
      <h2>Step 1: Personal Information</h2>
      <TextField
        label="Name"
        variant="outlined"
        fullWidth
        margin="normal"
        value={formData.name}
        onChange={handleChange('name')}
        error={!!errors.name}
        helperText={errors.name}
      />
      <TextField
        label="Email"
        variant="outlined"
        fullWidth
        margin="normal"
        value={formData.email}
        onChange={handleChange('email')}
        error={!!errors.email}
        helperText={errors.email}
      />
      <TextField
        label="Phone"
        variant="outlined"
        fullWidth
        margin="normal"
        value={formData.phone}
        onChange={handleChange('phone')}
        error={!!errors.phone}
        helperText={errors.phone}
      />
    </Box>
  );
};

export default Step1;

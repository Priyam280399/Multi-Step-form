import React from 'react';
import { TextField, Box } from '@mui/material';

const Step2 = ({ formData, handleChange, errors }) => {
  return (
    <Box>
      <h2>Step 2: Address Information</h2>
      <TextField
        label="Address Line 1"
        variant="outlined"
        fullWidth
        margin="normal"
        value={formData.address1}
        onChange={handleChange('address1')}
        error={!!errors.address1}
        helperText={errors.address1}
      />
      <TextField
        label="Address Line 2"
        variant="outlined"
        fullWidth
        margin="normal"
        value={formData.address2}
        onChange={handleChange('address2')}
      />
      <TextField
        label="City"
        variant="outlined"
        fullWidth
        margin="normal"
        value={formData.city}
        onChange={handleChange('city')}
        error={!!errors.city}
        helperText={errors.city}
      />
      <TextField
        label="State"
        variant="outlined"
        fullWidth
        margin="normal"
        value={formData.state}
        onChange={handleChange('state')}
        error={!!errors.state}
        helperText={errors.state}
      />
      <TextField
        label="Zip Code"
        variant="outlined"
        fullWidth
        margin="normal"
        value={formData.zip}
        onChange={handleChange('zip')}
        error={!!errors.zip}
        helperText={errors.zip}
      />
    </Box>
  );
};

export default Step2;

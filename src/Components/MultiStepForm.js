import React, { useState, useEffect } from 'react';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import { Container, Paper, Button, Box, Stepper, Step, StepLabel } from '@mui/material';

const MultiStepForm = () => {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address1: '',
    address2: '',
    city: '',
    state: '',
    zip: ''
  });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    const savedData = localStorage.getItem('formData');
    if (savedData) {
      setFormData(JSON.parse(savedData));
    }
  }, []);

  const handleChange = (input) => (e) => {
    setFormData({ ...formData, [input]: e.target.value });
  };

  const handleNext = () => {
    if (validateForm()) {
      setStep(step + 1);
      localStorage.setItem('formData', JSON.stringify(formData));
    }
  };

  const handleBack = () => {
    setStep(step - 1);
  };

  const validateForm = () => {
    let currentErrors = {};
    if (step === 0) {
      if (!formData.name) currentErrors.name = 'Name is required';
      if (!formData.email) currentErrors.email = 'Email is required';
      if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)) {
        currentErrors.email = 'Invalid email address';
      }
      if (!formData.phone) currentErrors.phone = 'Phone is required';
    } else if (step === 1) {
      if (!formData.address1) currentErrors.address1 = 'Address Line 1 is required';
      if (!formData.city) currentErrors.city = 'City is required';
      if (!formData.state) currentErrors.state = 'State is required';
      if (!formData.zip) currentErrors.zip = 'Zip Code is required';
    }
    setErrors(currentErrors);
    return Object.keys(currentErrors).length === 0;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      console.log('Form submitted', formData);
      localStorage.removeItem('formData');
    }
  };

  const steps = ['Personal Information', 'Address Information', 'Confirmation'];

  return (
    <Container maxWidth="sm">
      <Paper elevation={3} sx={{ p: 3 }}>
        <Stepper activeStep={step} alternativeLabel>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
        {step === 0 && <Step1 formData={formData} handleChange={handleChange} errors={errors} />}
        {step === 1 && <Step2 formData={formData} handleChange={handleChange} errors={errors} />}
        {step === 2 && <Step3 formData={formData} />}
        <Box mt={2}>
          {step > 0 && <Button variant="contained" color="primary" onClick={handleBack}>Back</Button>}
          {step < 2 && <Button variant="contained" color="primary" onClick={handleNext}>Next</Button>}
          {step === 2 && <Button variant="contained" color="primary" onClick={handleSubmit}>Submit</Button>}
        </Box>
      </Paper>
    </Container>
  );
};

export default MultiStepForm;

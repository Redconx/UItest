// src/utils/validate.js
export const validateStep = (step, formData) => {
    const errors = {};
    if (step === 1 && !formData.personalInfo.name.trim()) {
      errors.name = 'Name is required';
    }
    if (step === 2 && !formData.contactInfo.email.includes('@')) {
      errors.email = 'Invalid email';
    }
    return errors;
  };
// src/store/formSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  step: 1,
  formData: {
    complaintType: "",
    complainantDetails: {
      organizationName: "",
      organizationType: "",
      email: "",
      address: {
        street: "",
        city: "",
        state: "",
        zipCode: "",
      },
      country: "",
    },
    personalInfo: { name: "", age: "" },
    contactInfo: { email: "", phone: "" },
    faeDetails: {
      organizationName: "",
      organizationType: "",
      email: "",
      otherOrganizationType: "",
      phone: "",
      department: "",
    },
    complaintDetails: {
      incidentDate: "",
      uniqueIdentifierType: "",
      subject: "",
      title: "",
      description: "",
    },
  },
  errors: {},
};

export const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    nextStep: (state) => {
      state.step += 1;
    },
    prevStep: (state) => {
      state.step -= 1;
    },
    updateFormData: (state, action) => {
      state.formData = {
        ...state.formData,
        ...action.payload,
      };
    },
    setErrors: (state, action) => {
      state.errors = action.payload;
    },
    resetForm: () => initialState,
  },
});

export const { nextStep, prevStep, updateFormData, setErrors, resetForm } =
  formSlice.actions;
export default formSlice.reducer;

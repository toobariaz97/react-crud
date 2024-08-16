import React, { useState } from "react";
import { createUser } from "../data/user";
import * as yup from "yup";
import { toast } from "react-toastify";

export const CreateUser = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const schema = yup.object().shape({
    name: yup.string().required(),
    email: yup.string().email().required(),
    phone: yup.string().required(),
  });
  const nextStep = async () => {
    try {
      const errors = await schema.validate(formData);
    
      setStep(step + 1);
    } catch (error) {
      alert(error);
    }
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const handleSubmit = async (e) => {
    // if (errors.length > 0) {
    //   // toast.error(errors);
    // } else {

    const { status, message } = await createUser(formData);
    if (status) alert(message);
    // }
  };

  return (
    <div style={styles.container}>
      <form>
        {step === 1 && (
          <div style={styles.step}>
            <h2>Step 1: Personal Details</h2>
            <div style={styles.formGroup}>
              <label htmlFor="name" style={styles.label}>
                Name:
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                style={styles.input}
                placeholder="Enter your name"
              />
            </div>
            <div style={styles.formGroup}>
              <label htmlFor="email" style={styles.label}>
                Email:
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                style={styles.input}
                placeholder="Enter your email"
              />
            </div>
            <div style={styles.formGroup}>
              <label htmlFor="phone" style={styles.label}>
                Phone:
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                style={styles.input}
                placeholder="Enter your phone number"
              />
            </div>
            <button type="button" onClick={nextStep} style={styles.button}>
              Next
            </button>
          </div>
        )}

        {step === 2 && (
          <div style={styles.step}>
            <h2>Step 2: Address Details</h2>
            <div style={styles.formGroup}>
              <label htmlFor="address" style={styles.label}>
                Address:
              </label>
              <input
                type="text"
                id="address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                style={styles.input}
                placeholder="Enter your address"
              />
            </div>
            <div style={styles.formGroup}>
              <label htmlFor="city" style={styles.label}>
                City:
              </label>
              <input
                type="text"
                id="city"
                name="city"
                value={formData.city}
                onChange={handleChange}
                style={styles.input}
                placeholder="Enter your city"
              />
            </div>
            <div style={styles.formGroup}>
              <label htmlFor="state" style={styles.label}>
                State:
              </label>
              <input
                type="text"
                id="state"
                name="state"
                value={formData.state}
                onChange={handleChange}
                style={styles.input}
                placeholder="Enter your state"
              />
            </div>
            <button type="button" onClick={prevStep} style={styles.button}>
              Back
            </button>
            <button type="button" onClick={nextStep} style={styles.button}>
              Next
            </button>
          </div>
        )}

        {step === 3 && (
          <div style={styles.step}>
            <h2>Step 3: Review & Submit</h2>
            <ul style={styles.reviewList}>
              <li>
                <strong>Name:</strong> {formData.name}
              </li>
              <li>
                <strong>Email:</strong> {formData.email}
              </li>
              <li>
                <strong>Phone:</strong> {formData.phone}
              </li>
              <li>
                <strong>Address:</strong> {formData.address}
              </li>
              <li>
                <strong>City:</strong> {formData.city}
              </li>
              <li>
                <strong>State:</strong> {formData.state}
              </li>
            </ul>
            <button type="button" onClick={prevStep} style={styles.button}>
              Back
            </button>
            <button type="submit" style={styles.button} onClick={()=>handleSubmit()}>
              Submit
            </button>
          </div>
        )}
      </form>
    </div>
  );
};

const styles = {
  container: {
    padding: "20px",
    backgroundColor: "#f9f9f9",
    borderRadius: "8px",
    boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
    maxWidth: "600px",
    margin: "0 auto",
  },
  step: {
    marginBottom: "20px",
  },
  formGroup: {
    marginBottom: "15px",
  },
  label: {
    display: "block",
    marginBottom: "5px",
    fontSize: "14px",
    fontWeight: "bold",
    color: "#333",
  },
  input: {
    width: "100%",
    padding: "10px",
    borderRadius: "4px",
    border: "1px solid #ccc",
    fontSize: "14px",
  },
  button: {
    marginTop: "10px",
    padding: "10px 15px",
    borderRadius: "4px",
    backgroundColor: "#007bff",
    color: "#fff",
    fontSize: "16px",
    border: "none",
    cursor: "pointer",
    marginRight: "10px",
  },
  reviewList: {
    listStyleType: "none",
    paddingLeft: "0",
  },
};

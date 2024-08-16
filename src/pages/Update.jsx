import React, { useState, useEffect } from "react";
import { updateUser, getUser } from "../data/user"; // Assuming these functions exist
import * as yup from "yup";
import { toast } from "react-toastify";
import { useParams } from "react-router-dom";

export const Update = () => {

  const {id}= useParams();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
  state: "",
  });

  useEffect(() => {
    // Fetch the user data when the component mounts
    const fetchUser = async () => {
      const userData = await getUser(id);
      console.log(userData);
      
      setFormData(userData);
    
    };

    fetchUser();
  }, [id]);

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

  const handleSubmit = async (e) => {
    console.log("handle submit clicked!!!")
    e.preventDefault();

    try {
      // await schema.validate(formData);
      
        window.alert("user data updated!")
      
    } catch (error) {
      window.alert(error.message);
    }
  };

  return (
    <div style={styles.container}>
      <form onSubmit={handleSubmit}>
        <h2>Update User</h2>
        <div style={styles.formGroup}>
          <label htmlFor="name" style={styles.label}>
            Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData?.name}
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
            value={formData?.email}
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
            value={formData?.phone}
            onChange={handleChange}
            style={styles.input}
            placeholder="Enter your phone number"
          />
        </div>
        <div style={styles.formGroup}>
          <label htmlFor="address" style={styles.label}>
            Address:
          </label>
          <input
            type="text"
            id="address"
            name="address"
            value={formData?.address}
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
            value={formData?.city}
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
            value={formData?.state}
            onChange={handleChange}
            style={styles.input}
            placeholder="Enter your state"
          />
        </div>
        <button type="submit" style={styles.button}>
          Update
        </button>
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
    marginTop: "20px",
    padding: "10px 15px",
    borderRadius: "4px",
    backgroundColor: "#007bff",
    color: "#fff",
    fontSize: "16px",
    border: "none",
    cursor: "pointer",
    display: "block",
    width: "100%",
  },
};

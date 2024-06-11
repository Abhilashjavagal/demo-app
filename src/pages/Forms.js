import "./Forms.css";
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "../components/Navbar";

const Forms = () => {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        address: ''
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value
        });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
      };
    
      const handleCancel = () => {
        setFormData({
          name: '',
          email: '',
          phone: '',
          address: ''
        });
      };
    

return(
    <div className="forms">
        <Navbar />
    <div className="container mt-5">
    <h2 className="text-center mb-4">Contact Form</h2>
    <form onSubmit={handleSubmit} className="p-4 shadow-lg rounded custom-form">
      <div className="mb-3">
        <label htmlFor="name" className="form-label">Name</label>
        <input  type="text"  className="form-control"  id="name"  name="name"  value={formData.name}  onChange={handleChange} />
      </div>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">Email</label>
        <input type="email" className="form-control"  id="email"  name="email"  value={formData.email}  onChange={handleChange}/>
      </div>
      <div className="mb-3">
        <label htmlFor="phone" className="form-label">Phone</label>
        <input  type="tel"  className="form-control"  id="phone"  name="phone"  value={formData.phone}  onChange={handleChange}/>
      </div>
      <div className="mb-3">
        <label htmlFor="address" className="form-label">Address</label>
        <textarea  className="form-control"  id="address"  name="address"  rows="3"  value={formData.address}  onChange={handleChange}></textarea>
      </div>
      <div className="d-flex justify-content-between">
        <button type="submit" className="btn btn-primary">Submit</button>
        <button type="button" className="btn btn-secondary" onClick={handleCancel}>Cancel</button>
      </div>
    </form>
  </div>
</div>
)
}
export default Forms;
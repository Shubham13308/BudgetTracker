import React, { useState } from 'react';
import './AddDetails.css'; 

const AddDetails = ({ handleFormData }) => {
  const [formdata, setFormData] = useState({
    category: '',
    amount: '',
    type: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formdata, [name]: value });
  };

  const handleSubmit = () => {
    handleFormData(formdata);
  };

  return (
    <div className="add-details-container">
      <div className="dropdown-box">
        <select name="category" onChange={handleChange} style={{ width: "120px" }}>
          <option value="">Select Category</option>
          <option value="Fashion and Lifestyle">Fashion and Lifestyle</option>
          <option value="Traveling">Traveling</option>
          <option value="Food & Beverages">Food & Beverages</option>
          <option value="Electronics">Electronics</option>
          <option value="Emi">Emi</option>
          <option value="Healthcare">Healthcare</option>
          <option value="Utilities">Utilities</option>
          <option value="Entertainment">Entertainment</option>
          <option value="Education">Education</option>
          <option value="Miscellaneous">Miscellaneous</option>
        </select>
      </div>
      <div className="amount-box">
        <input type="number" name="amount" placeholder="Amount" onInput={handleChange} />
      </div>
      <div className="dropdown-box">
        <select name="type" onChange={handleChange} style={{ width: "70px" }}>
          <option value="">Select Type</option>
          <option value="income">Income</option>
          <option value="expense">Expense</option>
        </select>
      </div>
      <div className="button-box">
        <button className="crystal-button" onClick={handleSubmit}>Add</button>
      </div>
    </div>
  );
};

export default AddDetails;

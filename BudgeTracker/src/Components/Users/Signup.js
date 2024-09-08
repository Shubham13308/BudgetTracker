import React, { useState } from 'react';
import './Signup.css';
import { Link } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import axios from 'axios'; 

const Signup = () => {
  const [formdata, setFormdata] = useState({
    username: '',
    email: '',
    password: '',
    budget: '',
    image: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormdata({ ...formdata, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:4001/users/signup', formdata)
      .then(response => {
        console.log(response.data);
        setFormdata({
          username: '',
          email: '',
          password: '',
          budget: '',
          image: ''
        });
      })
      .catch(error => {
        console.error(error);
      });
  };
  

  return (
    <div className="signup-container">
      <form className="signup-form" onSubmit={handleSubmit}>
        <h2>Sign Up</h2>
        <Form.Group className="mb-3" controlId="username">
          <Form.Label>Username:</Form.Label>
          <Form.Control
            type="text"
            name="username"
            placeholder="Add Username"
            value={formdata.username}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="email">
          <Form.Label>Email address:</Form.Label>
          <Form.Control
            type="email"
            name="email"
            placeholder="name@example.com"
            value={formdata.email}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="password">
          <Form.Label>Password:</Form.Label>
          <Form.Control
            type="password"
            name="password"
            placeholder="Enter password"
            value={formdata.password}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="budget">
          <Form.Label>Enter First budget:</Form.Label>
          <Form.Control
            type="number"
            name="budget"
            placeholder="Enter budget"
            value={formdata.budget}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="image">
          <Form.Label>Upload Image:</Form.Label>
          <Form.Control type="file" name="image" onChange={handleChange} />
        </Form.Group>

        <div>
          <p>
            Already have an account?{' '}
            <Link className="signup-link" to="/">
              Login Now
            </Link>
          </p>
        </div>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default Signup;

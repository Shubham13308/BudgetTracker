import React, { useState } from 'react';
import './Login.css';
import { Link, useNavigate } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const { email, password } = formData;
    if (!email) {
      toast.error('Email is required');
      return false;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      toast.error('Email is invalid');
      return false;
    }
    if (!password) {
      toast.error('Password is required');
      return false;
    }
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      axios.post('http://localhost:4001/users/login', formData)
        .then(response => {
          const { token, userId } = response.data;
          localStorage.setItem('token', token);
          localStorage.setItem('userId', userId);
          toast.success('Login Successful');
          navigate('/dashboard');
        })
        .catch(error => {
          toast.error('Login Failed');
          console.error(error);
        });
    }
  };
  
  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Login</h2>
        <Form.Group className="mb-3">
          <Form.Label>Email:</Form.Label>
          <Form.Control
            type="email"
            name="email"
            placeholder="Enter Email"
            value={formData.email}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Password:</Form.Label>
          <Form.Control
            type="password"
            name="password"
            placeholder="Enter Password"
            value={formData.password}
            onChange={handleChange}
          />
        </Form.Group>
        <div>
          <p>Don't have an account? <Link className="signup-link" to="/signup">Signup</Link></p>
        </div>
        <button type="submit">Login</button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default Login;

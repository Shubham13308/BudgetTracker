import React, { useState, useEffect } from 'react';
import './Dashboard.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddDetails from './AddDetails';
import PieChart from './PieChart';
import Description from './Description';
import axios from 'axios';

const Dashboard = () => {
  const [formData, setFormData] = useState([]);
  const [userData, setUserData] = useState({});
  const [loading, setLoading] = useState(true);
  const [amount, setAmount] = useState(0);
  const [remaining, setRemaining] = useState(0);
  const [spent, setSpent] = useState(0);

  const handleFormData = (data) => {
    setFormData(prevData => [...prevData, data]);
    if (data.type === 'income') {
      setAmount(prevAmount => (prevAmount || 0) + (parseFloat(data.amount) || 0));
      setRemaining(prevRemaining => (prevRemaining || 0) + (parseFloat(data.amount) || 0));
    } else if (data.type === 'expense') {
      setSpent(prevSpent => (prevSpent || 0) + (parseFloat(data.amount) || 0));
      setRemaining(prevRemaining => (prevRemaining || 0) - (parseFloat(data.amount) || 0));
    }
  };

  const handleDelete = (index) => {
    setFormData(prevData => prevData.filter((_, i) => i !== index));
  };

  useEffect(() => {
    const token = localStorage.getItem('token');

    if (token) {
      axios.get('http://localhost:4001/users/dashboard', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      .then(response => {
        const data = response.data;
        setUserData(data);
        setAmount(data.amount);
        setRemaining(data.remaining);
        setSpent(data.spent);
        setFormData(data.formData || []); 
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching user data:', error);
        setLoading(false);
      });
    } else {
      setLoading(false);
    }
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className='dash-container'>
      <div className='row'>
        <div className='col-md-6'>
          <div className='row'>
            <div className="col-md-4">
              <div className="box">
                Budget: <br/>
                {amount}
              </div>
            </div>
            <div className="col-md-4">
              <div className="box">
                Remaining: <br/>
                {remaining}
              </div>
            </div>
            <div className="col-md-4">
              <div className="box">
                Spent: <br/>
                {spent}
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='col-md-12'>
              <div className='box'>
                <AddDetails handleFormData={handleFormData} />
              </div>
            </div>
            <div className='col-md-12'>
              <div className='box'>
                <Description formData={formData} handleDelete={handleDelete} />
              </div>
            </div>
          </div>
        </div>
        <div className='col-md-6'>
          <div className='box'>
            <PieChart formData={formData} spent={spent} remaining={remaining} amount={amount}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

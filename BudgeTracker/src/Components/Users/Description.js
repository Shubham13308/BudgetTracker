import React from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

const Description = ({ formData = [], handleDelete }) => {
  console.log("Description", formData);

  return (
    <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>Sr No.</th>
          <th>Description</th>
          <th>Amount</th>
          <th>Type</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        {formData.map((data, index) => (
          <tr key={index}>
            <td>{index + 1}</td>
            <td>{data.category}</td>
            <td>${data.amount}</td>
            <td>{data.type}</td>
            <td>
              <Button variant="danger" onClick={() => handleDelete(index)}>Delete</Button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default Description;

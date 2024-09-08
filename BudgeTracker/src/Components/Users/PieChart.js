import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = ({ spent, remaining, amount }) => {
  console.log(spent,remaining,amount)

  
  const data = {
    labels: ['Spent', 'Remaining', 'Budget'],
    datasets: [
      {
        label: 'Budget Breakdown',
        data: [spent, remaining, amount],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
        hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56']
      }
    ]
  };

  return (
    <div>
      <Pie data={data} />
    </div>
  );
}

export default PieChart;

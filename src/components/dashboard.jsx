import React from 'react';
import './dashboard.css'

function Dashboard(props) {
  return (
    <div className="Dashboard">
      <h2>Dashboard</h2>
      <div className="dashboard-overview">
        <div>Total Income: ₹{props.total}</div>
        <div>Total Expenses: ₹{props.expense}</div>
        <div>Balance: ₹{props.balance}</div>
      </div>
    </div>
  );
}

export default Dashboard;

import React from 'react';
import RecentTransactions from './recentTransaction';
import Footer from './footer';
import './components.css'

function Dashboard(props) {
  return (
    <div className="Dashboard">
      <h2 className='heading'>Dashboard</h2>
      <div className="dashboard-overview">
        <div>Total Income: ₹{props.total}</div>
        <div>Total Expenses: ₹{props.expense}</div>
        <div>Balance: ₹{props.balance}</div>
      </div>
      <RecentTransactions transactions = {props.transactions}></RecentTransactions>
      
    </div>
  );
}

export default Dashboard;

import React from 'react';

import Footer from './footer';
import './components.css'

function Dashboard(props) {
  return (
    <div className="Dashboard">
      <h2 className='heading'>Dashboard</h2>
      <div className="dashboard-overview">
        <div>Total Income: <div className="money" >₹{props.total}</div> </div>
        <div>Total Expenses: <div className="money" >₹{props.expense}</div> </div>
        <div>Balance: <div className="money" >₹{props.balance}</div></div>
      </div>
      
      
    </div>
  );
}

export default Dashboard;

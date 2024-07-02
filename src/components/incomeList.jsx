import React from 'react';

function IncomeList(props) {
  return (<div className="transaction-list">
    
    <ul className="TransactionList">
      {props.incomes.map((income, index) => (
        <li className='transaction' key={index}>
          <div className="transaction-details">
            <div className="date">Date: {income.date}</div> <div className="category">Category: {income.category}</div> <div className="amount money">₹{income.amount}</div> <div className="description">Description: {income.description}</div>
            {income.recurring ?  <div className="recurring">Recurring</div>:<div className="recurring">Non-Recurring</div>}
          </div>
          <div className="transaction-actions">
            <button id='editButton' onClick={() => props.startEditingIncome(index)}>Edit</button>
            <button id='deleteButton' onClick={() => props.deleteIncome(index)}>Delete</button>
          </div>
        </li>
      ))}
    </ul>
  </div>

  );
}

export default IncomeList;

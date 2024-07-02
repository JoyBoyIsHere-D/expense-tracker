import React from 'react';

function TransactionList(props) {
  return (<div className="transaction-list">
    
    <ul className="TransactionList">
      {props.transactions.map((transaction, index) => (
        <li className='transaction' key={index}>
          <div className="transaction-details">
            <div className="date">Date: {transaction.date}</div> <div className="category">Category: {transaction.category}</div> <div className="amount money">₹{transaction.amount}</div> <div className="description">Description: {transaction.description}</div>
            {transaction.recurring && <div className="recurring">Recurring</div>}
          </div>
          <div className="transaction-actions">
            <button id='editButton' onClick={() => props.startEditingTransaction(index)}>Edit</button>
            <button id='deleteButton' onClick={() => props.deleteTransaction(index)}>Delete</button>
          </div>
        </li>
      ))}
    </ul>
  </div>

  );
}

export default TransactionList;

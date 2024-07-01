import React from 'react';

function TransactionList(props) {
  return ( <div className="transaction-list">
    <h2 className='heading'>Transaction List</h2>
    <ul>
    {props.transactions.map((transaction, index) => (
      <li className='transaction' key={index}>
        {transaction.date} - {transaction.category}: ${transaction.amount} ({transaction.description}) {transaction.recurring && <div>Recurring</div> }
        <button id='editButton' onClick={() => props.startEditingTransaction(index)}>Edit</button>
        <button id='deleteButton' onClick={() => props.deleteTransaction(index)}>Delete</button>
      </li>
    ))}
  </ul></div>
    
  );
}

export default TransactionList;

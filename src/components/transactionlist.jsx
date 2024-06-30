import React from 'react';

function TransactionList(props) {
  return (
    <ul>
      {props.transactions.map((transaction, index) => (
        <li key={index}>
          {transaction.date} - {transaction.category}: ${transaction.amount} ({transaction.description}) {transaction.recurring && <div>Recurring</div> }
          <button onClick={() => props.startEditingTransaction(index)}>Edit</button>
          <button onClick={() => props.deleteTransaction(index)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}

export default TransactionList;

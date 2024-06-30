import React from 'react';

function TransactionList({ transactions, deleteTransaction }) {
  return (
    <ul>
      {transactions.map((transaction, index) => (
        <li key={index}>
          {transaction.date} - {transaction.category}: ${transaction.amount} ({transaction.description})
          <button onClick={() => deleteTransaction(index)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}

export default TransactionList;

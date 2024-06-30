import React, { useState } from 'react';
import Dashboard from './components/dashboard';
import TransactionForm from './components/transactionform';
import TransactionList from './components/transactionlist';

function App() {
  const [transactions, setTransactions] = useState([]);

  const addTransaction = (transaction) => {
    setTransactions([...transactions, transaction]);
  };

  const deleteTransaction = (index) => {
    const newTransactions = transactions.filter((transaction, i) => i !== index);
    setTransactions(newTransactions);
  };

  return (
    <div className="App">
      <Dashboard />
      <TransactionForm addTransaction={addTransaction} />
      <TransactionList transactions={transactions} deleteTransaction={deleteTransaction} />
    </div>
  );
}

export default App;

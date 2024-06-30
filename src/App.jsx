import React, { useState } from 'react';
import Dashboard from './components/dashboard';
import TransactionForm from './components/transactionform';
import TransactionList from './components/transactionlist';
import Navbar from './components/Navbar';
import Footer from './components/footer';

function App() {
  const [total,setTotal] = useState(10000);
  const [balance,setBalance] = useState(total);
  const [expense,setExpense] = useState(0);

  const [transactions, setTransactions] = useState([]);
  const [editingTransaction,setEditingTransaction] = useState(null);

  function addTransaction (transaction)  {
    setTransactions([...transactions, transaction]);
    setExpense((prevValue) => {
      return Number(prevValue + Number(transaction.amount));
    })
    setBalance((prevValue) => {
      return Number(prevValue - transaction.amount);
    })
  };

  function deleteTransaction (index)  {
    const newTransactions = transactions.filter((transaction, i) => i !== index);
    const deletedTransaction = transactions.find((transaction, i) => i === index);
    setTransactions(newTransactions);
    setExpense((prevValue) => {
      return Number(prevValue - Number(deletedTransaction.amount));
    })
    setBalance((prevValue) => {
      return Number(prevValue + Number(deletedTransaction.amount));
    })
  };

  function startEditingTransaction (index) {
    setEditingTransaction({ index, ...transactions[index] });
  };

  function editTransaction(updatedTransaction){
    const oldTransaction = transactions.find((transaction, index) => 
      index === editingTransaction.index
    );
    
    const newTransactions = transactions.map((transaction, index) =>
      index === editingTransaction.index ? updatedTransaction : transaction
    );

    
    setExpense((prevValue) => {
      return Number(prevValue + Number(updatedTransaction.amount) -Number(oldTransaction.amount)  );
    })
    setBalance((prevValue) => {
      return Number(prevValue + Number(oldTransaction.amount) - Number(updatedTransaction.amount)  );
    })
    setTransactions(newTransactions);
    setEditingTransaction(null);
  }

  return (    
    <div className="App">
      <Navbar/>
      <Dashboard total = {total} expense = {expense} balance = {balance}/>
      <TransactionForm
          addTransaction={addTransaction}
          editTransaction={editTransaction}
          editingTransaction={editingTransaction}
        />
        <TransactionList
          transactions={transactions}
          deleteTransaction={deleteTransaction}
          startEditingTransaction={startEditingTransaction}
        />
        <Footer/>
    </div>
  );
}

export default App;

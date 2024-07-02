import React, { useState } from 'react';
import Dashboard from './components/dashboard';
import TransactionForm from './components/transactionform';
import TransactionList from './components/transactionlist';
import Footer from './components/footer';
import Header from './components/header';
import RecentTransactions from './components/recentTransaction';
import SpendingChart from './components/spendingCharts';
import IncomeForm from './components/incomeForm';
import IncomeList from './components/incomeList';
import './App.css'

function App() {
  const [total, setTotal] = useState(10000);
  const [balance, setBalance] = useState(total);
  const [expense, setExpense] = useState(0);

  const [transactions, setTransactions] = useState([]);
  const [editingTransaction, setEditingTransaction] = useState(null);

  const [editingIncome, setEditingIncome] = useState(null);
  const [incomes, setIncomes] = useState([]);

  function addTransaction(transaction) {
    setTransactions([...transactions, transaction]);
    setExpense((prevValue) => {
      return Number(prevValue + Number(transaction.amount));
    })
    setBalance((prevValue) => {
      return Number(prevValue - transaction.amount);
    })
  };

  function deleteTransaction(index) {
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

  function startEditingTransaction(index) {
    setEditingTransaction({ index, ...transactions[index] });
  };

  function editTransaction(updatedTransaction) {
    const oldTransaction = transactions.find((transaction, index) =>
      index === editingTransaction.index
    );

    const newTransactions = transactions.map((transaction, index) =>
      index === editingTransaction.index ? updatedTransaction : transaction
    );
    setTotal((prevValue) => {
      return Number(prevValue + Number(updatedTransaction.amount) - Number(oldTransaction.amount));
    })
    setBalance((prevValue) => {
      return Number(prevValue - Number(oldTransaction.amount) + Number(updatedTransaction.amount));
    })
    setTransactions(newTransactions);
    setEditingTransaction(null);
  }

  const addIncome = (income) => {
    setIncomes([...incomes, income]);
    setTotal((prevValue) => {
      return Number(prevValue + Number(income.amount));
    })
    setBalance((prevValue) => {
      return Number(prevValue + Number(income.amount));
    })
  };

  const deleteIncome = (index) => {
    const newIncomes = incomes.filter((income, i) => i !== index);
    const deletedIncome = incomes.find((income, i) => i === index);
    setIncomes(newIncomes);
    setTotal((prevValue) => {
      return Number(prevValue - Number(deletedIncome.amount));
    })
    setBalance((prevValue) => {
      return Number(prevValue - Number(deletedIncome.amount));
    })
  };

  const startEditingIncome = (index) => {
    setEditingIncome({ index, ...incomes[index] });
  };

  const editIncome = (updatedIncome) => {
    const oldIncome = incomes.find((income, index) =>
      index === editingIncome.index
    );
    const newIncomes = incomes.map((income, index) =>
      index === editingIncome.index ? updatedIncome : income
    );
    setExpense((prevValue) => {
      return Number(prevValue + Number(updatedIncome.amount) - Number(oldIncome.amount));
    })
    setBalance((prevValue) => {
      return Number(prevValue + Number(oldIncome.amount) - Number(updatedIncome.amount));
    })
    setIncomes(newIncomes);
    setEditingIncome(null);
  };

  return (
    <div className="App">
      <Header></Header>

      <Dashboard total={total} expense={expense} balance={balance} transactions={transactions} />
      <div className="container">
        <RecentTransactions transactions={transactions}></RecentTransactions>
        <TransactionForm
          addTransaction={addTransaction}
          editTransaction={editTransaction}
          editingTransaction={editingTransaction}
        />
        <IncomeForm
          addIncome={addIncome}
          editIncome={editIncome}
          editingIncome={editingIncome}
        />
      </div>
      <h2 className='heading'>Transaction List</h2>
      <div className="container">
      
        <TransactionList
          transactions={transactions}
          deleteTransaction={deleteTransaction}
          startEditingTransaction={startEditingTransaction}
        />
        <IncomeList incomes = {incomes} deleteIncome = {deleteIncome} startEditingIncome = {startEditingIncome}></IncomeList>
      </div>

      <SpendingChart transactions={transactions}></SpendingChart>
      <Footer />
    </div>
  );
}

export default App;

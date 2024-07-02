import React, { useState, useEffect } from 'react';
import './components.css'

function TransactionForm({ addTransaction, editTransaction, editingTransaction }) {
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');
  const [recurring, setRecurring] = useState(false)

  useEffect(() => {
    if (editingTransaction) {
      setAmount(editingTransaction.amount);
      setDate(editingTransaction.date);
      setCategory(editingTransaction.category);
      setDescription(editingTransaction.description);
    } else {
      setAmount('');
      setDate('');
      setCategory('');
      setDescription('');
      setRecurring(false);
    }
  }, [editingTransaction]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const transaction = { amount, date, category, description, recurring };

    if (editingTransaction) {
      editTransaction(transaction);
    } else {
      addTransaction(transaction);
    }

    setAmount('');
    setDate('');
    setCategory('');
    setDescription('');
    setRecurring(false);
  };



  return (
    <form className="TransactionForm" onSubmit={handleSubmit}>
      <div className="form-row">
        <label htmlFor="amount">Amount</label>
        <input
          type="number"
          id="amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Amount"
          
        />
      </div>
      
      <div className="form-row">
        <label htmlFor="category">Category</label>
        <input
          type="text"
          id="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          placeholder="Category"
          
        />
      </div>
      <div className="form-row">
        <label htmlFor="date">Date</label>
        <input
          type="date"
          id="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          
        />
      </div>
      <div className="form-row">
        <label htmlFor="description">Description</label>
        <input
          type="text"
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Description"
        />
      </div>
      <div className="form-row checkbox" style={{flexDirection: "row"}}>
        <input type="checkbox"
          id='checkbox1'
          value={recurring}
          onChange={(e) => { setRecurring(e.target.checked) }} />
        <label htmlFor="checkbox1">Recurring</label>
      </div>
      <div className="form-row">
        <button type="submit">{editingTransaction ? 'Update' : 'Add'} Expense</button>
      </div>
    </form>
  );
}

export default TransactionForm;

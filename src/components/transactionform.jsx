import React, { useState, useEffect } from 'react';

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
    const transaction = { amount, date, category, description,recurring };

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
    <form onSubmit={handleSubmit}>
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="Amount"
      />
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
      <input
        type="text"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        placeholder="Category"
      />
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
      />
      <input type="checkbox"
        id='checkbox'
        value={recurring}
        onChange={(e) => { setRecurring(e.target.checked) }} />
      <label htmlFor="checkbox">Recurring</label>
      <button type="submit">{editingTransaction ? 'Update' : 'Add'} Transaction</button>
    </form>
  );
}

export default TransactionForm;

import React, { useState, useEffect } from 'react';
import './components.css'

function IncomeForm({ addIncome, editIncome, editingIncome }) {
    const [amount, setAmount] = useState('');
    const [date, setDate] = useState('');
    const [category, setCategory] = useState('');
    const [description, setDescription] = useState('');
    const [recurring, setRecurring] = useState(false)

    useEffect(() => {
        if (editingIncome) {
            setAmount(editingIncome.amount);
            setDate(editingIncome.date);
            setCategory(editingIncome.category);
            setDescription(editingIncome.description);
        } else {
            setAmount('');
            setDate('');
            setCategory('');
            setDescription('');
            setRecurring(false);
        }
    }, [editingIncome]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const income = { amount, date, category, description, recurring };

        if (editingIncome) {
            editIncome(income);
        } else {
            addIncome(income);
        }

        setAmount('');
        setDate('');
        setCategory('');
        setDescription('');
        setRecurring(false);
    };

    return (
        <form className="IncomeForm" onSubmit={handleSubmit}>
            <div className="form-row">
                <label htmlFor="amount">Amount</label>
                <input
                    type="number"
                    id="amount"
                    name="amount"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    placeholder='Amount'
                    required
                />
            </div>

            <div className="form-row">
                <label htmlFor="category">Category</label>
                <input
                    type="text"
                    id="category"
                    name="category"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    placeholder='Category'
                    required
                />
            </div>
            <div className="form-row">
                <label htmlFor="date">Date</label>
                <input
                    type="date"
                    id="date"
                    name="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    required
                />
            </div>

            <div className="form-row">
                <label htmlFor="description">Description</label>
                <input
                    type="text"
                    id="description"
                    name="description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder='Description'
                />
            </div>
            <div className="form-row checkbox" style={{ flexDirection: "row" }}>
                <input
                    type="checkbox"
                    id='checkbox2'
                    checked={recurring}
                    onChange={(e) => { setRecurring(e.target.checked) }}
                />
                <label htmlFor='checkbox2' >Recurring</label>
            </div>
            <div className="form-row"><button type="submit" style={{fontWeight: 'bold'}}>{editingIncome ? 'Edit Income' : 'Add Income'}</button></div>
        </form>
    );
}

export default IncomeForm;

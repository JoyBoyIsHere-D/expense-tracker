import React from 'react';

function printLastFive(arr) {

    const startIndex = Math.max(0, arr.length - 5);

    return arr.map((transaction, index) => {

        if (index >= startIndex) {
            return (<li className='' style={{display:'inline-flex', gap: '10px'}} key={index}>
                <div className="date">{transaction.date}</div> - <div className="category">  {transaction.category}</div>: <div className="amount money">₹{transaction.amount}</div> 
            </li>);
        } 
    });
}

function RecentTransactions(props) {
    return (
        
        <div className="recent">
        
        <h2 className='recent-header'>Expense</h2>
        <h2 className='recent-header'>Income</h2>
        <ul>
            {printLastFive(props.transactions)}
        </ul>
        <ul>
            {printLastFive(props.incomes)}
        </ul>
    </div>
         )
}

export default RecentTransactions;
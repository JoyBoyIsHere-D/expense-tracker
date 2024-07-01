import React from 'react';

function printLastFive(arr) {

    const startIndex = Math.max(0, arr.length - 5);

    return arr.map((transaction, index) => {

        if (index >= startIndex) {
            return (<li key={index}>
                {transaction.date} - {transaction.category}: ${transaction.amount} ({transaction.description}) {transaction.recurring && <div>Recurring</div>}
            </li>);
        } 
    });
}

function RecentTransactions(props) {
    return (<div className="recent">
        <ul>
            {printLastFive(props.transactions)}
        </ul>
    </div>)
}

export default RecentTransactions;
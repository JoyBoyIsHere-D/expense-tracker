import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


function SpendingChart({ transactions }) {
  // Aggregate transaction amounts by date
  const aggregatedData = transactions.reduce((acc, transaction) => {
    const existing = acc.find(item => item.date === transaction.date);
    if (existing) {
        existing.amount = Number(existing.amount);
      existing.amount += Number(transaction.amount);
    } else {
      acc.push({ date: transaction.date, amount: transaction.amount });
    }
    return acc;
  }, []);

  // Ensure amounts are integers
  aggregatedData.forEach(item => {
    item.amount = Math.round(item.amount);
  });

  // Sort data by date
  aggregatedData.sort((a, b) => new Date(a.date) - new Date(b.date));

  return (
    <div>
        <h2 className='heading' >Reports</h2>
        <ResponsiveContainer width="100%" height={400}>
        <BarChart
            data={aggregatedData}
            margin={{
            top: 20, right: 30, left: 20, bottom: 5,
            }}
        >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="amount" fill="#8884d8" />
        </BarChart>
        </ResponsiveContainer>
    </div>
  );
}

export default SpendingChart;
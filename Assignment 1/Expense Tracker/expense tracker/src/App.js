import React, { useState } from 'react';

function ExpenseTracker() {
  const [transactions, setTransactions] = useState([]);
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleAmountChange = (event) => {
    setAmount(event.target.value);
  };

  const handleAddTransaction = () => {
    if (description && amount) {
      const newTransaction = { description, amount: parseFloat(amount) };
      setTransactions(prevTransactions => [...prevTransactions, newTransaction]);
      setDescription('');
      setAmount('');
    }
  };

  const handleDeleteTransaction = (index) => {
    setTransactions(prevTransactions => prevTransactions.filter((_, i) => i !== index));
  };

  const balance = transactions.reduce((total, transaction) => total + transaction.amount, 0);

  return (
    <div>
      <h1>Expense Tracker</h1>
      <p>Balance: ${balance.toFixed(2)}</p>
      <input type="text" placeholder="Description" value={description} onChange={handleDescriptionChange} />
      <input type="number" placeholder="Amount" value={amount} onChange={handleAmountChange} />
      <button onClick={handleAddTransaction}>Add Transaction</button>
      <ul>
        {transactions.map((transaction, index) => (
          <li key={index}>
            {transaction.description} (${transaction.amount.toFixed(2)})
            <button onClick={() => handleDeleteTransaction(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ExpenseTracker;

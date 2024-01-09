

import React from 'react';
import ExpenseItem from './ExpenseItem';

const ExpenseList = (props) => {
  const { items, onDeleteExpense } = props;

  if (items.length === 0) {
    return <p>No expenses found.</p>;
  }

  return (
    <ul>
    
      {items.map((expense) => (
        <ExpenseItem
          key={expense.id}
          id={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
          onDelete={onDeleteExpense}
        />
      ))}
      
    </ul>
  );
};

export default ExpenseList;

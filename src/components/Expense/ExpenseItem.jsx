// ExpenseItem.js

import React from 'react';
import './ExpenseItem.module.css'
const ExpenseItem = (props) => {
  const { id, title, amount, date, onDelete } = props;

  const deleteHandler = () => {
    onDelete(id);
  };

  return (
    <li>
      <div>
        <h2>{title}</h2>
        <div>
          <div>{date.toISOString()}</div>
          <div>${amount}</div>
        </div>
      </div>
      
      <button onClick={deleteHandler}>Delete</button>
    </li>
  );
};

export default ExpenseItem;

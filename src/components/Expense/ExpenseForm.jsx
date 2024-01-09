import React, { useState } from 'react';
import styles from './Expenseform.module.css'

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredAmount, setEnteredAmount] = useState('');
  const [enteredDate, setEnteredDate] = useState('');

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      id: Math.random().toString(),
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };

    props.onSaveExpenseData(expenseData);
    setEnteredTitle('');
    setEnteredAmount('');
    setEnteredDate('');
  };

  return (
 
    <div className={styles.container}>
    <form onSubmit={submitHandler}>
         <h1>Expense Tracker</h1>
         
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          value={enteredTitle}
          onChange={titleChangeHandler}
        />
    
      
       <label htmlFor="">Amount:</label>
        <input
          type="number"
          step="1"
          value={enteredAmount}
          onChange={amountChangeHandler}
        />
    
      
        <label htmlFor="">Date:</label>
        <input
       
          type="date"
          min="2019-01-01"
          max="2023-12-31"
          value={enteredDate}
          onChange={dateChangeHandler}
        />
    
      <button type="submit" className='btn-form'>Add Expense</button>
    </form>
    </div>
   
  );
};

export default ExpenseForm;


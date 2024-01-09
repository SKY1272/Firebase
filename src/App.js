import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ExpenseForm from './components/Expense/ExpenseForm';
import ExpenseList from './components/Expense/ExpenseList';
import Login from './components/Login/Login';
import SignUp from './components/SignUp/SignUp';
import './App.css';

function App() {
  const [expenses, setExpenses] = useState([]);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => [expense, ...prevExpenses]);
  };

  const deleteExpenseHandler = (id) => {
    setExpenses((prevExpenses) =>
      prevExpenses.filter((expense) => expense.id !== id)
    );
  };

  return (
    <Router>
      <div className="App">
        <nav>
          <p>Welcome to the Expense Tracker</p>
          <button className='btn' onClick={() => window.location.replace('/signup')}>
            Logout
          </button>
        </nav>
        <hr />
        <Routes>
          <Route path="/signup" element={<SignUp />} />
          <Route path='/login' element={<Login />} />
          <Route
            path="/"
            element={
              <>
                <ExpenseForm onSaveExpenseData={addExpenseHandler} />
                {expenses.length > 0 && (
                  <ExpenseList
                    items={expenses}
                    onDeleteExpense={deleteExpenseHandler}
                  />
                )}
                {expenses.length === 0 && null /* or an empty div */}
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;









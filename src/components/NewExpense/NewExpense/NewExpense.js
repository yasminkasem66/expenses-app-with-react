import React from 'react';

import ExpenseForm from '../ExpenseForm/ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    };
    props.onAddExpense(expenseData);
  };

  return (
    <div className='new-expense'>
      {/* that the value for this prop should be a function, a function which will eventually be triggered when something happens inside of this component. In this case, when the user saves the entered expense data, so when the form is submitted in the end.  The trick really is that we pass around a pointer at a function. focus on that state and event handling thing and being able to pass data up is a crucial part of it, Lifting State Up.*/}
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  );
};

export default NewExpense;
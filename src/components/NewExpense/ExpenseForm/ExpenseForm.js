import React, { useState } from 'react';

import './ExpenseForm.css';

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredAmount, setEnteredAmount] = useState('');
  const [enteredDate, setEnteredDate] = useState('');
  // const [userInput, setUserInput] = useState({
  //   enteredTitle: '',
  //   enteredAmount: '',
  //   enteredDate: '',
  // });

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredTitle: event.target.value,
    // });
    // setUserInput((prevState) => {
    //   return { ...prevState, enteredTitle: event.target.value };
    // });
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredAmount: event.target.value,
    // });
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredDate: event.target.value,
    // });
  };

  // onChange={(event) =>inputChangeHandler('title',event.target.value)}
  // const inputChangeHandler = (identifier,value) => {
  //   if(identifier === 'title') {
  //     setEnteredTitle(event.target.value);
  //   }
  //   else if(identifier === 'amount') {
  //     setEnteredAmount(event.target.value);
  //   }
  //   else {
  //     setEnteredDate(event.target.value);
  //   }
  // };

  const submitHandler = (event) => {
    // a part of this default browser behavior is that if you do click this button (submit), the page reloads because the browser actually automatically sends a request whenever a form is submitted to the server which is hosting this webpage. So in this case to this development server to this development server and that's not what we want here. Instead here, we wanna handle this form submission with Java script and manually collect with Java script and manually collect and combine the data and do something with it. Thankfully we can disable or prevent this default behavior
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate), //which will parse that date string and converted into a date object.
    };
    // We can create our own event props, if we wanna call it like, and we can expect functions as values and that would allow us to pass a function from a parent component to a child component and then call that function to a child component and then call that function inside of the child component. And when we then call a function, we can of course pass data to that function as a parameter and that's how we can communicate up from child to parent.
    props.onSaveExpenseData(expenseData);
    setEnteredTitle('');
    setEnteredAmount('');
    setEnteredDate('');
  };

  return (
    // If a button,especially with type submitis pressed inside of a form this overall form element will emit an event to which we can listen to which we can listen and that's the submit event.
    <form onSubmit={submitHandler}>
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label>Title</label>
          <input
            type='text'
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className='new-expense__control'>
          <label>Amount</label>
          <input
            type='number'
            min='0.01'
            step='0.01'
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className='new-expense__control'>
          <label>Date</label>
          <input
            type='date'
            min='2019-01-01'
            max='2022-12-31'
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className='new-expense__actions'>
        <button type='submit'>Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
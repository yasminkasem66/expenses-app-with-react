import React, { useState } from 'react';

import Expenses from './components/Expenses/Expense/Expense';
import NewExpense from './components/NewExpense/NewExpense/NewExpense';
const EXPENSES = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];


const App = () => {

  const [expenses, setExpenses] = useState(EXPENSES)

  const addExpensesHandler = (expense) => {
    setExpenses((prevExpense) => {
      return [expense, ...prevExpense];
    });
  };

  // import React, { useState } from 'react';
  //   But that's why you needed to import React from React in all your component files in the past, because this is the under-the-hood code  which kind of gets created automatically when you use JSX.  Now in more modern project setups, you can omit this React import because the project setup is able to make that transformation without the import being added.  But if you see component function  where this import is there, it is there because, in the past,  you always did need to add it.
  // return React.createElement(
  //   'div',
  //   {},
  //   React.createElement('h2', {}, "Let's get started!"),
  //   React.createElement(Expenses, { items: expenses })
  // );

  return (
    <div>
      <NewExpense onAddExpense={addExpensesHandler}/>
       <Expenses items={expenses} />
    </div>
  );
}

export default App;
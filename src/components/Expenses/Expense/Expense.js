import React, { useState } from 'react';
import Card from '../../UI/card/Card';
import './Expense.css';
import ExpensesFilter from '../ExpensesFilter/ExpensesFilter'
import ExpensesList from '../ExpensesList/ExpensesList'
import ExpensesChart from '../ExpensesChart/ExpensesChart'

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('')
  const FilterHandler = (year) => {
    setFilteredYear(year);
  }

  const filteredExpenses = props.items.filter((expense) => {
    if (filteredYear === '') return expense
    return expense.date.getFullYear().toString() === filteredYear;
  });
  // console.log(filteredExpenses);
  //  computed value, a value which we derive based on a state. And whilst you could also manage multiple states, and it wouldn't be a huge problem using derived values like this, it's typically the more elegant and recommended approach.
  let filterInfoText = '';
  
  if (filteredYear === '2019') {
    filterInfoText = '2020,2021,2022';
  } else if (filteredYear === '2020') {
    filterInfoText = '2019,2021,2022';
  } else if (filteredYear === '2021') {
    filterInfoText = '2019, 2020,2022';
  } else{
    filterInfoText = '2019, 2020,2021';
  }
  return (
    <Card className="expenses" >
      <ExpensesFilter selected={filteredYear} onChangeFilter={FilterHandler} />
      { filteredYear?  <p className='text-white'> Date for years are {filterInfoText} are hidden</p> :''}    
      <ExpensesChart expenses={filteredExpenses} />
      <ExpensesList items={filteredExpenses} />

    </Card>
  );
}

export default Expenses;
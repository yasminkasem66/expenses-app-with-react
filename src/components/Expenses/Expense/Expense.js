import React, { useState } from 'react';
import Card from '../../UI/card/Card';
import './Expense.css';
import ExpensesFilter from '../ExpensesFilter/ExpensesFilter'
import ExpensesList from '../ExpensesList/ExpensesList'

const Expenses = (props) => {
     const [filteredYear, setFilteredYear]=useState('2020')    
    const FilterHandler =(year)=>{
      setFilteredYear(year)
    }

   const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });
  return (
    <Card className="expenses" >
            <ExpensesFilter selected={filteredYear} onChangeFilter={FilterHandler}/> 
            {/* <ExpensesChart expenses={filteredExpenses} /> */}
            <ExpensesList items={filteredExpenses} />
        
    </Card>
  );
}

export default Expenses;
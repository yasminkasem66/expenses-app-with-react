import React from 'react';
import ExpenseItem from '../ExpensesItem/ExpenseItem';
import Card from '../../UI/card/Card';
import './Expense.css';
const Expenses = (props) => {
    const data = props.items;
    console.log({data});

  return (
    <Card className="expenses" >
         {data.map((element) => (
      <ExpenseItem
      key={element.id}
      title={element.title}
      amount={element.amount}
      date={element.date}
    />
      ))}

      {/* <ExpenseItem
        title={props.items[1].title}
        amount={props.items[1].amount}
        date={props.items[1].date}
      />
      <ExpenseItem
        title={props.items[2].title}
        amount={props.items[2].amount}
        date={props.items[2].date}
      />
      <ExpenseItem
        title={props.items[3].title}
        amount={props.items[3].amount}
        date={props.items[3].date}
      /> */}
    </Card>
  );
}

export default Expenses;
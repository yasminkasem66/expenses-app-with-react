import React from 'react';

import './ExpenseDate.css';

const ExpenseDate = (props) => {
  // Because this being a date object, it can't be output as texts like this. However, we can call to ISO string for example, or toLocaleString
  const month = props.date.toLocaleString('en-US', { month: 'long' });
  const day = props.date.toLocaleString('en-US', { day: '2-digit' });
  const year = props.date.getFullYear();

  return (
    <div className='expense-date'>
      <div className='expense-date__month'>{month}</div>
      <div className='expense-date__year'>{year}</div>
      <div className='expense-date__day'>{day}</div>
    </div>
  );
};

export default ExpenseDate;
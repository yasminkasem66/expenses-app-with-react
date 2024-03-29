import './ExpenseItem.css'
import ExpenseDate from '../ExpensesDate/ExpenseDate'
import Card from '../../UI/card/Card'

export default function ExpenseItem(props){
  return (
    <li>
    <Card className='expense-item'>
      {/* Generally, this approach of building a user interface from smaller building blocks is called composition. */}
      <ExpenseDate date={props.date} />
      <div className='expense-item__description'>
        <h2>{props.title}</h2>
        <div className='expense-item__price'>${props.amount}</div>
      </div>
    </Card>
    </li>
  );

    }
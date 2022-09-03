import React,{useState} from 'react';
import './Expenses.css';
import ExpenseItem from './ExpenseItem';
import ExpensesFilter from './ExpensesFilter.js'
import Card from './Card';

function Expenses(props) {
    const [filteredYear,setYear] = useState('2020');
    const getFilterValue = (getData) =>{
       console.log(getData);
       setYear(getData);
    }
    return (
        <Card className="expenses">
            <ExpensesFilter selected={filteredYear} filterValue={getFilterValue}/>
            <ExpenseItem title={props.Array[0].title} date={props.Array[0].date} price={props.Array[0].price}></ExpenseItem>
            <ExpenseItem title={props.Array[1].title} date={props.Array[1].date} price={props.Array[1].price}></ExpenseItem>
            <ExpenseItem title={props.Array[2].title} date={props.Array[2].date} price={props.Array[2].price}></ExpenseItem>
        </Card>
    );
}

export default Expenses;
import React, { useState } from 'react';
import './Expenses.css';
import ExpensesFilter from './ExpensesFilter.js'
import Card from './Card';
import ExpenseList from './ExpensesList';
import ExpensesChart from './ExpensesChart';

function Expenses(props) {
    const [filteredYear, setYear] = useState('2020');
    const getFilterValue = (getData) => {
        setYear(getData);
    }
    const filteredResults = props.Array.filter((expense) => expense.date.getFullYear().toString() === filteredYear);
    console.log(filteredResults)
    return (
        <Card className="expenses">
            <ExpensesFilter selected={filteredYear} filterValue={getFilterValue} />
            <ExpensesChart expenses={filteredResults}/>
            <ExpenseList items={filteredResults} />
        </Card>
    );
    /* <ExpenseItem title={props.Array[0].title} date={props.Array[0].date} price={props.Array[0].price}></ExpenseItem>
            <ExpenseItem title={props.Array[1].title} date={props.Array[1].date} price={props.Array[1].price}></ExpenseItem>
            <ExpenseItem title={props.Array[2].title} date={props.Array[2].date} price={props.Array[2].price}></ExpenseItem> */
}

export default Expenses;
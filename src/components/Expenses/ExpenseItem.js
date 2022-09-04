// import React,{useState} from 'react';
import './ExpenseItem.css'; //importing and letting css to change styling of react
import ExpenseDate from './ExpenseDate'
import Card from './Card';

function ExpenseItem(props) {
    /*let ExpenseDate = new Date(2022, 3,21)
    let ExpenseName = 'Car';
    let ExpenseAmount = '$43'; */


    // return <h2>Expense Item!</h2>
    /*return (
    <div className='expense-item'>
        <div className='expense-item_description'>Date</div>
        <div>car</div>
        <div className='expense-item_price'>$34</div>
    </div>
    );*/
    /*return (
        <div className='expense-item'>
            <div className='expense-item__description'>
                <h2>{ExpenseDate.toISOString()}</h2>
                <div>{ExpenseName}</div>
            </div>
            <div className='expense-item__price'>{ExpenseAmount}</div>
        </div>
    );*/
    // const [Title,setTitle] = useState(props.title); //usestate should be called only in react component function , nor outside nor within nested functions

    // It ceates a special variable which when changes leads to call component function again

    // usestate returns an array of the current state value of the variable passed and a function to set that updates the value and it is always in this order

    // const clickHandler = () => {
    //     console.log("submitted!");
    //     setTitle("Submitted!");
    // }

    return (
        <Card className='expense-item'>
            <div className='expense-item__description'>
                <ExpenseDate date={props.date}></ExpenseDate>
                <h2>{props.title}</h2>
            </div>
            <div className='expense-item__price'>${props.price}</div>
            <button>Submit</button> 
        </Card>
    );
    // this doesn't changes the dom. so, we need to load react again
}

export default ExpenseItem;
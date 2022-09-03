import React, {useState} from "react";
import './ExpenseForm.css'

const ExpenseForm = (props) =>{
    const [Title, setTitle] = useState('');
    const [Amount, setAmount] = useState('');
    const [date, setDate] = useState('');
    const ChangeTitleHandler = event => setTitle(event.target.value);
    const ChangeAmountHandler = event => setAmount(event.target.value);
    const ChangeDateHandler = event => setDate(event.target.value);

    // const [userInput, setUserInput] = useState({
    //     Title : '',
    //     Amount: '',
    //     Date: ''
    // });

    // const ChangeTitleHandler = event => setUserInput({
    //     ...userInput,
    //     Title: event.target.value
    // });
    // const ChangeTitleHandler = event => setUserInput((prevState) =>{
    //     return {...prevState, Title:event.target.value}
    // });
    // const ChangeAmountHandler = event => setUserInput({
    //     ...userInput,
    //     Amount: event.target.value
    // });
    // const ChangeDateHandler = event => setUserInput({
    //     ...userInput,
    //     Date: event.target.value
    // });

    const SubmitHandler = (event) =>{
        event.preventDefault();
        const ExpenseData = {
            title: Title,
            price: Amount,
            date: new Date(date)
        }
        console.log(ExpenseData);
        props.onSaveExpenseData(ExpenseData);
        setTitle('');
        setAmount('');
        setDate('');
    };

    return (
        <form onSubmit={SubmitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" onChange={ChangeTitleHandler} value={Title}></input>
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" min="0.01" step="0.01" onChange={ChangeAmountHandler} value={Amount}></input>
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="Date" min='2019-01-01' max="2022-12-31" onChange={ChangeDateHandler} value={date}></input>
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="Submit">Add Expense</button>
            </div>
        </form>
    )

}

export default ExpenseForm;
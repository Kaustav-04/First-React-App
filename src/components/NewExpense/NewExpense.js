import React from "react";
import './NewExpense.css';
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
    const getData = (ExpenseData) => {
        const NewExpenseData = {
            ...ExpenseData,
            id: Math.random().toString(),
        }
        // console.log(NewExpenseData);
        props.NewData(NewExpenseData);
    };
    return (
        <div className="new-expense">
            <ExpenseForm onSaveExpenseData={getData}></ExpenseForm>
        </div>
    );
}
export default NewExpense
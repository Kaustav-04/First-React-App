import React,{useState} from "react";
import './NewExpense.css';
import './ExpenseForm.css'
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
    const getData = (ExpenseData) => {
        const NewExpenseData = {
            id : Math.random().toString(),
            ...ExpenseData,
            
        }
        // console.log(NewExpenseData);
        props.NewData(NewExpenseData);
        setEditing(false);
    };
    const isEditable = false;
    const [isEditing,setEditing] = useState(isEditable);
    const editable = () => {
        setEditing(true);
    }
    const stopEditing = (cancel) => {
        setEditing(cancel);
    }
    let editableForm = <button onClick={editable}>Add New Expense</button>
    if(isEditing){
        editableForm = <ExpenseForm onSaveExpenseData={getData} onCancel={stopEditing}></ExpenseForm>
    }
    return (
        <div className="new-expense">
            {editableForm}
        </div>
    );
}
export default NewExpense
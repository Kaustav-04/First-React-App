import React,{useState} from "react";
import Expenses from "./components/Expenses/Expenses.js";
import NewExpense from "./components/NewExpense/NewExpense.js";

const DummyExpensesArray = [
  { id:'e1', title: 'car', price: '3000', date: new Date(2022, 3, 21) },
  { id:'e2', title: 'bike', price: '1500', date: new Date(2022, 4, 21) },
  { id:'e3', title: 'belt', price: '30', date: new Date(2022, 8, 21) }
];
function App() {
  
  const [NewExpensesArray, setExpenseArray] = useState(DummyExpensesArray);
  const getNewData = (Data) =>{
    setExpenseArray((prevState) =>{
      return [Data, ...prevState];
    });
  }
  return (
    <div>
      <NewExpense NewData={getNewData}/>
      <Expenses Array={NewExpensesArray}></Expenses>
    </div>
  );
}

export default App;

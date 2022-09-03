import Expenses from "./components/Expenses/Expenses.js";
import NewExpense from "./components/NewExpense/NewExpense.js";


function App() {
  const ExpensesArray = [
    { title: 'car', price: '$3000', date: new Date(2022, 3, 21) },
    { title: 'bike', price: '$1500', date: new Date(2022, 4, 21) },
    { title: 'belt', price: '$30', date: new Date(2022, 8, 21) }
  ];
  const getNewData = (Data) =>{
    console.log(Data.title ,"in App.js");
  }
  return (
    <div>
      <NewExpense NewData={getNewData}/>
      <Expenses Array={ExpensesArray}></Expenses>
    </div>
  );
}

export default App;

// import React from "react";
import Expenses from "./components/Expenses/Expenses";
// import Users from './components/Users';
//import NumberFilter from './components/NumberFilter';
import NewExpense from "./components/NewExpense/NewExpense";

function App() {

  const expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    {
      id: "e2",
      title: "New TV",
      amount: 799.49,
      date: new Date(2021, 2, 12),
    },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];

  const addExpenseHander = (expense) => {
    console.log(expense);
    console.log('App.js');
  }

  return (
    <div>
      {/* {element} */}
      <NewExpense expensePointer={addExpenseHander}/>
      <Expenses item={expenses}/>
    </div>
  );

  // If we did not use JSX, this is how we would be returning on the App.js, but it is harder to read and implement
  // return React.createElement(
  //   'div', 
  //   {}, 
  //   React.createElement('h2', {}, 'Lets get started'), 
  //   React.createElement(Expenses, {item: expenses})
  // );
}

export default App;

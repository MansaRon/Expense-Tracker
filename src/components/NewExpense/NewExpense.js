import React from "react";
import '../NewExpense/NewExpense.css';
import ExpenseForm from "./ExpenseForm";

// function newExpense() {}

const NewExpense = (props) => {

    function SaveExpenseData (enteredData) {
        // This pulls out all the data from the props and add in a new ID for the object 
        const expenseData = {
            ...enteredData,
            id: Math.random().toString()
        }
        props.expensePointer(expenseData);
    }
    
    return (
        <div className="new-expense">
            <ExpenseForm onSaveData={SaveExpenseData}/>
        </div>
    )
}

export default NewExpense; 
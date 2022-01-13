import React, {useState} from "react";
import '../NewExpense/NewExpense.css';
import ExpenseForm from "./ExpenseForm";

// function newExpense() {}

const NewExpense = (props) => {

    const [currentState, newState] = useState(false);

    function SaveExpenseData (enteredData) {
        // This pulls out all the data from the props and add in a new ID for the object 
        const expenseData = {
            ...enteredData,
            id: Math.random().toString()
        }
        props.expensePointer(expenseData);
        newState(false);
    }

    const startEditing = () => {
        newState(true);
    }

    const stopEditing = () => {
        newState(false);
    }
    
    return (
        <div className="new-expense">
            {!currentState && <button onClick={startEditing}>Add New Expense</button>}
            {currentState && <ExpenseForm onSaveData={SaveExpenseData} cancelEditing={stopEditing} />}
        </div>
    )
}

export default NewExpense; 
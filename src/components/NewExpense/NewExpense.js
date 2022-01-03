import React from "react";
import '../NewExpense/NewExpense.css';
import ExpenseForm from "./ExpenseForm";

// function newExpense() {}

const NewExpense = () => {
    return (
        <div className="new-expense">
            <ExpenseForm/>
        </div>
    )
}

export default NewExpense; 
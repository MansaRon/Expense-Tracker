import React, {useState} from "react";
import '../NewExpense/ExpenseForm.css';

const ExpenseForm = (props) => {

    const [enteredTitle, setTitle] = useState('');
    const titleChangeHandler = (event) => {
        setTitle(event.target.value);
    }

    const [enteredAmount, setAmount] = useState('');
    function amountChangeHandler(event) {
        setAmount(event.target.value);
    }

    const [enteredDate, setDate] = useState('');
    const dateChangeHandler = (event) => {
        setDate(event.target.value);
    }

    const submitHandler = (event) => {
        event.preventDefault();

        if (enteredTitle === "") {
            alert('Please enter a title...');
        }
        else if (enteredAmount === "") {
            alert('Please enter an amount...');
        }
        else if (enteredDate === "") {
            alert('Please enter a date...');
        }
        else {
            const expenseData = {
                title: enteredTitle,
                amount: enteredAmount,
                date: new Date(enteredDate)
            }
            // Clears user input
            props.onSaveData(expenseData);
            setTitle('');
            setDate('');
            setAmount('');
            console.log(props);
        }

    }

    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" value={enteredTitle} onChange={titleChangeHandler}/>
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="text" value={enteredAmount} min="0.01" step="0.01" onChange={amountChangeHandler} />
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date"value={enteredDate}  min="2019-01-01" max="2022-12-31" onChange={dateChangeHandler}/>
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="submit">Add Expense</button>
            </div>
        </form>
    )
}

export default ExpenseForm;
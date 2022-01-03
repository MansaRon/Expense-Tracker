import './ExpenseItems.css';
import './ExpenseDate';
import ExpenseDate from '../Expenses/ExpenseDate';
import Card from '../UI/Card';
import React, { useState } from 'react';
// import ExpenseAmount from './ExpenseAmount';

// A component (Custom) in React is Javascript function
// Can only have 1 root element per return statement/snippet
// Can use a div within a div

// Props - Passing data via properties

function ExpenseItem(props) {

    // react hook, array destructing, always returns 2 elements
    const [title, setTitle] = useState(props.title);

    function clickMe() {
        setTitle('Updated!');
        console.log('CLick Me');
    }


    const [amount, newAmount] = useState(props.amount);
    const changePrice = () => {
        newAmount('459.76');
    }

    return (
    <Card className="expense-item"> 
        {/* <ExpenseDate date={props.date}></ExpenseDate> */}
        {/* Can return component like this if you have no content between the tags to enter */}
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
            <h2>{ title }</h2>
            <div className="expense-item__price">R{amount}</div>
            {/* <ExpenseAmount amount={props.amount} /> */}
        </div>
        <button onClick={clickMe}>Change Title</button>
        <button className='btn btn-primary' onClick={changePrice}>Change Price</button>

    </Card>
    );
}

export default ExpenseItem;
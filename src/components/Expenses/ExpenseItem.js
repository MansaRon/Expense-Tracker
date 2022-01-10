import './ExpenseItems.css';
import './ExpenseDate';
import ExpenseDate from '../Expenses/ExpenseDate';
import Card from '../UI/Card';
import React from 'react';
// import ExpenseAmount from './ExpenseAmount';

// A component (Custom) in React is Javascript function
// Can only have 1 root element per return statement/snippet
// Can use a div within a div

// Props - Passing data via properties

function ExpenseItem(props) {

    return (
    <Card className="expense-item"> 
        {/* <ExpenseDate date={props.date}></ExpenseDate> */}
        {/* Can return component like this if you have no content between the tags to enter */}
        <ExpenseDate date={ props.date } />
        <div className="expense-item__description">
            <h2>{ props.title }</h2>
            <div className="expense-item__price">R{ props.amount }</div>
        </div>
    </Card>
);

}

export default ExpenseItem;
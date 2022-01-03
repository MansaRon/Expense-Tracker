import './ExpenseAmount.css';

function ExpenseAmount(props) {
    const amount = props.amount;

    return (
        <div className="expenses">R{ amount }</div>
    )
}

export default ExpenseAmount;
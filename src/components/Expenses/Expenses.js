import react, {useState} from "react";
import Card from "../UI/Card";
import ExpenseItem from "../Expenses/ExpenseItem";
import './Expenses.css';
import ExpensesFilter from "./ExpenseFilter";

const Expenses = (props) => {

    const [filteredYear, setFilteredYear] = useState('2020')

    const filterChanger = (selectedYear) => {
        console.log('Expeses.Js');
        console.log(selectedYear);
        setFilteredYear(selectedYear);
    }

    return (
        <div>
        <Card className="expenses">
            <ExpensesFilter selectedYear={filteredYear} onChangeFilter={filterChanger}></ExpensesFilter>
            <ExpenseItem title={props.item[0].title} amount={props.item[0].amount} date={props.item[0].date}></ExpenseItem>
            <ExpenseItem title={props.item[1].title} amount={props.item[1].amount} date={props.item[1].date}></ExpenseItem>
            <ExpenseItem title={props.item[2].title} amount={props.item[2].amount} date={props.item[2].date}></ExpenseItem>
            <ExpenseItem title={props.item[3].title} amount={props.item[3].amount} date={props.item[3].date}></ExpenseItem>
        </Card>
        </div>
    )

}

export default Expenses;
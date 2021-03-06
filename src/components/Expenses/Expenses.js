import React, {useState} from "react";
import Card from "../UI/Card";
import './Expenses.css';
import ExpensesFilter from "./ExpenseFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {

    const [filteredYear, setFilteredYear] = useState('2020');
    
    const filteredExpenses = props.item.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear;
    });

    const filterChanger = (selectedYear) => {
        setFilteredYear(selectedYear);
    }

    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter selectedYear={filteredYear} onChangeFilter={filterChanger}></ExpensesFilter>
                <ExpensesChart expenses = {filteredExpenses}/>
                {/* Add keys when mapping out an item on your list */}
                {/* Conditional listing (Output list depending on a condition) */}
                <ExpensesList item = {filteredExpenses} />
            </Card>
        </div>
    )

}

export default Expenses;
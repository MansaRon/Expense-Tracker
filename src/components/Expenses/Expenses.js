import react, {useState} from "react";
import Card from "../UI/Card";
import ExpenseItem from "../Expenses/ExpenseItem";
import './Expenses.css';
import ExpensesFilter from "./ExpenseFilter";

const Expenses = (props) => {

    const [filteredYear, setFilteredYear] = useState('2020');
    
    const filteredExpenses = props.item.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear;
    });

    const filterChanger = (selectedYear) => {
        console.log('Expeses.Js');
        console.log(props.items);
        setFilteredYear(selectedYear);
    }
 
    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter selectedYear={filteredYear} onChangeFilter={filterChanger}></ExpensesFilter>
            
                {/* Add keys when mapping out an item on your list */}
                {filteredExpenses.map((expense, index) =>  <ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date}/> )}

            </Card>
        </div>
    )

}

export default Expenses;
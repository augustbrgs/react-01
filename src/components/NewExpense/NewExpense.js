import "./NewExpense.css";
import './ExpenseForm'
import ExpenseForm from "./ExpenseForm";
function NewExpense(){

    return(
        <div className="new-expense">
            <ExpenseForm />
        </div>
    );
}
export default NewExpense;
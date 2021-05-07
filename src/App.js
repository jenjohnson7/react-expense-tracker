import React, {useState} from 'react';
import ExpenseItem from './components/ExpenseItem/ExpenseItem';
import NewExpense from './components/NewExpense/NewExpense';
import classes from './components/ExpenseItem/Expenses.css';
import Card from './components/Card';
import ExpenseFilter from './components/ExpenseFilter/ExpenseFilter';
import ExpensesChart from './components/ExpensesChart/ExpensesChart';

const DUMMY_EXPENSES = [
	{
	  id: 'e1',
	  title: 'Pizza',
	  amount: 94.12,
	  date: new Date(2020, 7, 14),
	},
	{ id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
	{
	  id: 'e3',
	  title: 'Car Insurance',
	  amount: 294.67,
	  date: new Date(2021, 2, 28),
	},
	{
	  id: 'e4',
	  title: 'New Desk (Wooden)',
	  amount: 450,
	  date: new Date(2021, 5, 12),
	},
];

const App = () => {
	const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
	const [filterYear, setFilterYear] = useState('2021');

	let expenses_elements = expenses
		.filter(elt => elt.date.getFullYear() === parseInt(filterYear))
		.map(elt => {
			return <ExpenseItem date={elt.date} title={elt.title} amount={elt.amount} key={elt.id}/>
		});

	const addExpenseHandler = (expenseData) => {
		setExpenses( (prevExpenses) => {
			return [expenseData, ...prevExpenses];
		});
	};

	const filterChangedHandler = (filterValue) => {
		setFilterYear(filterValue);
	}

	// ternary version of expenses_elements conditional display
	// {expenses_elements.length === 0 ? (<p>No expenses found</p>) : (expenses_elements)}
	return (
		<div>
			  <h2>Save your money!</h2>
			  <NewExpense
			  onSaveExpenseData={addExpenseHandler}/>
			  <Card className="expenses">
			  <ExpenseFilter
			  onFilterChange={filterChangedHandler} selectedYear={filterYear}/>
			  <ExpensesChart expenses={expenses_elements}/>
			  {expenses_elements.length === 0 && (<h2 className="expenses-list__fallback">No expenses found.</h2>)}
			  {expenses_elements.length > 0 && (<ul className="expenses-list">{expenses_elements}</ul>)}
			  </Card>
		</div>
	);
}

export default App;

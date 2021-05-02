import React, {useState} from 'react';
import ExpenseItem from './components/ExpenseItem/ExpenseItem';
import NewExpense from './components/NewExpense/NewExpense';
import classes from './components/ExpenseItem/Expenses.css';
import Card from './components/Card';
import ExpenseFilter from './components/ExpenseFilter/ExpenseFilter';

const App = () => {
	const expenses = [
	    {
	      id: 'e1',
	      title: 'Toilet Paper',
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

	let expenses_elements = expenses.map(elt => {
		return <ExpenseItem date={elt.date} title={elt.title} amount={elt.amount} key={elt.id}/>
	});

	const addExpenseHandler = (expenseData) => {
		console.log("expense data to add in app.js")
		console.log(expenseData);
		// expenses.append(expenseData);
	};

	const [filterYear, setFilterYear] = useState('2021');

	const filterChangedHandler = (filterValue) => {
		console.log("year selected in the dropdown, printed app.js");
		console.log(filterValue);
		setFilterYear(filterValue);
		// expenses.filter(year=filterValue);
	}

	return (
		<div>
			  <h2>Save your money!</h2>
			  <NewExpense
			  onSaveExpenseData={addExpenseHandler}/>
			  <Card className="expenses">
			  <ExpenseFilter
			  onFilterChange={filterChangedHandler} selectedYear={filterYear}/>
			  {expenses_elements}
			  </Card>
		</div>
	);
}

export default App;

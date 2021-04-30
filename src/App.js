import React from 'react';
import ExpenseItem from './components/ExpenseItem/ExpenseItem';
import classes from './components/ExpenseItem/Expenses.css';
import Card from './components/Card';

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
		return <ExpenseItem date={elt.date} title={elt.title} amount={elt.amount} id={elt}/>
	})

	return (
		<div>
			  <h2>Save your money!</h2>
			  <Card className="expenses">{expenses_elements}</Card>
		</div>
	);
}

export default App;

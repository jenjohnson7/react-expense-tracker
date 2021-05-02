import React, { useState } from 'react';
import classes from './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from '../Card';

const ExpenseItem = (props) => {
	const [title, setTitle] = useState(props.title);
	// react hook starts with 'use'.
	// useState makes variable rerender the component
	// returns 2 items
		// the variable
		// a function to update the variable
	// it only uses props.title the first time it's rendered.
	// later times it is rerendered, ir remembers which one it should be.

	const changeTitleHandler = () => {
		setTitle('Updated value');
		console.log(title); // still the old one??
		// setTitle 'schedules' the update
		// updated value will show up next time the component is rerendered
		// only this instance of ExpenseItem is re-evaluated
	};

	return (
		<Card className="expense-item">
			<ExpenseDate date={props.date}/>
			<div className="expense-item__description">
				<h2>{title}</h2>
				<div className="expense-item__price">{props.amount}</div>
			</div>
			<button onClick={changeTitleHandler}>Change Title</button>
		</Card>
	);
}

export default ExpenseItem;

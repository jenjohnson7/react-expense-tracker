import React, {useState} from 'react';
import './NewExpenseForm.css';

const NewExpenseForm = (props) => {
	// separate states
	const [enteredTitle, setEnteredTitle] = useState('');
	const [enteredAmount, setEnteredAmount] = useState('');
	const [enteredDate, setEnteredDate] = useState('');

	// single state
	// const [userInput, setUserInput] = useState({
		// enteredTitle: '',
		// enteredAmount: '',
		// enteredDate: '',
	// });

	const titleChangedHander = (event) => {
		// separate states
		setEnteredTitle(event.target.value);

		// single state - general form
		// setUserInput({
			// for a single state, use spread operator to retain other 2 values that aren't being changed
			// ... userInput,
			// then overwrite with the new value
			// enteredTitle: event.target.value,
		// });

		// single state - if the new state relies on the old state - use the function form
		// guanrantees that we're operating on the most recent state snapshot, considering that setState 'schedules' updates and doesn't actually update
		// setUserInput((prevState) => {
			// return {...prevState, enteredTitle: event.target.value}
		// });
	}

	const amountChangedHander = (event) => {
		setEnteredAmount(event.target.value);
	}

	const dateChangedHandler = (event) => {
		setEnteredDate(event.target.value);
	}

	const submitHandler = (event) => {
		// default: browser sends request to server + reloads
		// how to prevent?
		event.preventDefault();

		// construct object
		const expenseData = {
			title: enteredTitle,
			amount: +enteredAmount,
			date: new Date(enteredDate) // parse date string
		}

		// in NewExpense.js
		// passing pointer to saveExpenseDataHandler function to the NewExpenseForm as a prop called onSaveExpenseData
		// therefore we can actually use that function here
		props.onSaveExpenseData(expenseData);

		// clear values out
		setEnteredTitle('');
		setEnteredAmount('');
		setEnteredDate('');
		props.hideAddExpense();
	}

	return(
		<form className="new-expense" onSubmit={submitHandler}>
			<div className="new-expense__controls">
				<div className="new-expense__control">
					<label>Title</label>
					<input type='text'
					onChange={titleChangedHander}
					value={enteredTitle}/>
				</div>
				<div className="new-expense__control">
					<label>Amount</label>
					<input type='number'
					min="0.01"
					step="0.01"
					onChange={amountChangedHander}
					value={enteredAmount}/>
				</div>
				<div className="new-expense__control">
					<label>Date</label>
					<input type='date'
					min='2019-01-01'
					max='2022-12-31'
					onChange={dateChangedHandler}
					value={enteredDate}/>
				</div>
			</div>
			<div>
				<div className="new-expense__actions">
					<button type="button" onClick={props.hideAddExpense}>Cancel</button>
					<button type="submit">Add Expense</button>
				</div>
			</div>
		</form>
	);
};

export default NewExpenseForm;

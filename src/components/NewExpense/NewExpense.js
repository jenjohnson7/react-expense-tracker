import React from 'react';
import './NewExpense.css';
import NewExpenseForm from './NewExpenseForm';

const NewExpense = (props) => {
	const saveExpenseDataHandler = (enteredExpenseData) => {
		const expenseData = {
			...enteredExpenseData,
			id: Math.random().toString()
		};

		props.onSaveExpenseData(expenseData);
	};

	return(
		<div>
		<NewExpenseForm
		onSaveExpenseData={saveExpenseDataHandler}/>
		</div>
	);
};

export default NewExpense;

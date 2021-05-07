import React, {useState} from 'react';
import './NewExpense.css';
import NewExpenseForm from './NewExpenseForm';

const NewExpense = (props) => {

	const [showAddForm, setShowAddForm] = useState(false);

	const saveExpenseDataHandler = (enteredExpenseData) => {
		const expenseData = {
			...enteredExpenseData,
			id: Math.random().toString()
		};

		props.onSaveExpenseData(expenseData);
	};

	const addFormHandler = () => {
		setShowAddForm(true);
	}

	const hideFormHandler = () => {
		setShowAddForm(false);
	}

	return(
		<div>
		{!showAddForm ?
			<div className="new-expense">
				<div className="new-expense__actions">
					<button onClick={addFormHandler}>Add Expense</button>
				</div>
			</div>
		:
		<NewExpenseForm
		onSaveExpenseData={saveExpenseDataHandler}
		hideAddExpense={hideFormHandler}/>
		}
		</div>
	);
};

export default NewExpense;

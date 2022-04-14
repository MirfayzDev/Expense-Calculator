import './ExpenseForm.css'
import {useState} from "react";

function ExpenseForm({onSaveExpenseData, onCancel}) {
    const [enteredTitle, setEnteredTitle] = useState('')
    const [enteredAmount, setEnteredAmount] = useState('')
    const [enteredDate, setEnteredDate] = useState('')

    const titleChangeHandler = event => {
        setEnteredTitle(event.target.value)
    }

    const amountChangeHandler = event => {
        setEnteredAmount(event.target.value)
    }

    const dateChangeHandler = event => {
        setEnteredDate(event.target.value)
    }

    const submitHandler = (event) => {
        event.preventDefault()
        if (enteredTitle && enteredAmount && enteredDate) {
            const expenseData = {
                title: enteredTitle,
                amount: +enteredAmount,
                date: new Date(enteredDate),
            }
            onSaveExpenseData(expenseData)
        }

        setEnteredTitle('')
        setEnteredAmount('')
        setEnteredDate('')
        event.target[0].blur()
        event.target[1].blur()
        event.target[2].blur()
    }

    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className={'new-expense__control'}>
                    <label htmlFor="">Title</label>
                    <input onChange={titleChangeHandler} value={enteredTitle} type="text"/>
                </div>
                <div className={'new-expense__control'}>
                    <label htmlFor="">Amount</label>
                    <input onChange={amountChangeHandler} value={enteredAmount} type="number" min={'0.01'} step={'0.01'}/>
                </div>
                <div className={'new-expense__control'}>
                    <label htmlFor="">Date</label>
                    <input onChange={dateChangeHandler} value={enteredDate} type="date" min={'2019-01-01'} max={'2022-12-31'}/>
                </div>
            </div>
            <div className={'new-expense__actions'}>
                <button type="button" onClick={onCancel}>Cancel</button>
                <button type={"submit"}>Add Expense</button>
            </div>
        </form>
    )
}

export default ExpenseForm
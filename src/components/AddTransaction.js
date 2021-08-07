import React, {useState, useContext} from 'react';
import { GlobalContext } from '../context/GlobalState';

export const AddTransaction = () => {
    const [date, setDate] = useState('');
    const [text, setText] = useState('');
    const [amount, setAmount] = useState('');
    const {addTransaction} = useContext(GlobalContext);

    const onSubmit = e => {
        e.preventDefault();

        const newTransaction = {
            id: Math.floor(Math.random() * 1000000),
            date,
            text,
            amount: +amount
        }

        addTransaction(newTransaction);

    }

    return (
        <>
            <h3>Add new transaction</h3>
            <form onSubmit={onSubmit} >
                <div className="form-control">
                    <label htmlFor="date">Date</label>
                    <input type="text" value={date} onChange={(e) => setDate(e.target.value)} placeholder="Enter date..." />
                </div>
                <div className="form-control">
                    <label htmlFor="text">Text</label>
                    <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter text..." />
                </div>
                <div className="form-control">
                    <label htmlFor="amount">Amount</label>
                    <input type="text" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Enter amount...(+/-)" />
                </div>
                <button className="btn">Add Transaction</button>
            </form>
            
        </>
    )
}

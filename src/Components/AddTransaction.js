import React, { useContext, useState } from 'react';

import { GlobalContext } from '../Context/GlobalState';

export const AddTransaction = () => {

    const [description, setDescription] = useState('');
    const [transactionAmount, setTransactionAmount] = useState(0);
    const { addTransaction } = useContext(GlobalContext);

    const onSubmit = (e) => {
        e.preventDefault();

        const newTransaction = {
            id: new Date().getTime(),description,transactionAmount: +transactionAmount
        }
        addTransaction(newTransaction)
    }
    return(
        <div>
            <h3>Add New Transaction</h3>
            <form onSubmit={onSubmit}>
                <div className="form-control">
                    <label htmlFor="description">
                        Description
                    </label>
                    <input type="text" id="description" 
                    onChange={(e)=> setDescription(e.target.value)}
                    value={description} placeholder="Details of Transactions" />
</div>
                    <div className="form-control">
                    <label htmlFor="transactionamount">
                        Transaction Amount
                    </label>
                    <input type="number" id="transactionamount" 
                    onChange={(e)=> setTransactionAmount(e.target.value)}
                    value={transactionAmount} placeholder="Dollar value of Transaction" />
                </div>
                <button className="btn">Add Transaction</button>
            </form>
        </div>
    )
}
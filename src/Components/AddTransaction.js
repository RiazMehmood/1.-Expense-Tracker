import React, { useState } from 'react';

export const AddTransaction = () => {

    const [description, setDescription] = useState('');
    const [transactionAmount, setTransactionAmount] = useState(0);

    return(
        <div>
            <h3>Add New Transaction</h3>
            <form>
                <div className="form-control">
                    <label htmlfor="description">
                        Description
                    </label>
                    <input type="text" id="description" 
                    onChange={(e)=> setDescription(e.target.value)}
                    value={description} placeholder="Details of Transactions" />
</div>
                    <div className="form-control">
                    <label htmlfor="transactionamount">
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
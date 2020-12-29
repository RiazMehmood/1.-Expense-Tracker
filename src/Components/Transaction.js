import React, { useContext } from 'react';

import { GlobalContext } from '../Context/GlobalState';

export const Transaction = ({ transaction }) => {

    const { delTransaction } = useContext(GlobalContext); 
    const sign = transaction.transactionAmount > 0 ? '+' : '-';
    const transactionType = transaction.transactionAmount > 0 ? 'plus' : 'minux';

    return (
        <li className={transactionType}>
            {transaction.description}
            <span>{sign}${Math.abs(transaction.transactionAmount)}</span>
            <button className="delete-btn" onClick={()=>delTransaction(transaction.id)}>x</button>
        </li>
    )
}
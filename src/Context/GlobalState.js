import React, { createContext, useReducer } from 'react';

import AppReducer from './AppReducer';

const iState = {
    transactions: []
}

export const GlobalContext = createContext(iState);


export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, iState);

    function delTransaction(id){
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload: id
        });
    }
    function addTransaction(transaction){
        dispatch({
            type: 'ADD TRANSACTION',
            payload: transaction
        })
    }
    return (

        <GlobalContext.Provider value={{
            transactions: state.transactions, delTransaction, addTransaction
        }}>
            {children}
        </GlobalContext.Provider>
    )
}
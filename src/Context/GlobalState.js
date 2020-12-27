import React, { createContext, useReducer } from 'react';

import AppReducer from './AppReducer';

const initialState = {
    transaction: [
        {id: 1, description: "Project 1 income", transactionAmount: 1000},
        {id: 2, description: "Project 2 income", transactionAmount: 2000},
        {id: 3, description: "Project 3 income", transactionAmount: 3000},
        {id: 4, description: "Project 4 income", transactionAmount: 4000}
    ]
}

export const GlobalState = createContext(initialState);


export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);
    return (
        <GlobalContext.Provider value={{
            transactions: state.transactions
        }}>
            {children}
        </GlobalContext.Provider>
    )
}
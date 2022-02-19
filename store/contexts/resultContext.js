import { createContext, useContext } from "react";

const ResultContext = createContext()

const initialValue = [
    {
        label: 'Mean',
        value: 0.00000,
    },
    {
        label: 'Median',
        value: 0.00000,
    },
    {
        label: 'Std Deviation',
        value: 0.00000,
    },
    {
        label: 'Mode',
        value: 0.00000,
    },
]

export const ResultProvider = ({ children }) => {
    return (
        <ResultContext.Provider value={{initialValue}}>
            { children }
        </ResultContext.Provider>
    )
}

export const useResultContext = () => {
    return useContext(ResultContext)
}
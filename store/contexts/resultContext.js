import { createContext, useContext, useState, useReducer, useEffect, useMemo } from "react";
import reducer from "../reducers/resultReducer";

const ResultContext = createContext()

const initialValue = {
    data: [],
    results:  [
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
}

// const sort = (array) => {
//     const sortedArr = mergeSort(array)
//     return sortedArr
//     console.log()
// }

export const ResultProvider = ({ children }) => {

    // const [data, sortData] = useState()
    // const { data: { data: data1234 } } = useFetch('/api/data1234')

    // const sortedArr = useMemo(() => data1234 && sort(data1234), [data1234])

    const [state, dispatch] = useReducer(reducer, initialValue)


    return (
        <ResultContext.Provider value={{...state}}>
            { children }
        </ResultContext.Provider>
    )
}

export const useResultContext = () => {
    return useContext(ResultContext)
}
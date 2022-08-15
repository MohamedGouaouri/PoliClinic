import {createContext, useContext, useState} from "react";
import {useFetch} from "../hooks/useFetch";
import {BASE_URL} from "../config/constants";


export const AppContext = createContext({})

export const AppProvider = ({children}) => {
    const [data] = useFetch(BASE_URL + "/data")

    return <AppContext.Provider value={data}>
        {children}
    </AppContext.Provider>
}


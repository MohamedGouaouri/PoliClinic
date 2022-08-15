import {createContext} from "react";
import {useFetch} from "../hooks/useFetch";
import {BASE_URL} from "../config/constants";


export const PatientContext = createContext(null)

export const PatientProvider = ({children}) => {
    const [data] = useFetch(BASE_URL + "/patients")
    // const deleteItem = (id) => {
    //     const newData = data.filter((e) => e.id !== id)
    //     // setData(newData)
    // }
    return <PatientContext.Provider value={data}>
        {children}
    </PatientContext.Provider>
}


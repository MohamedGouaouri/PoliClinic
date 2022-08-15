import {useEffect, useState} from "react";


export const useFetch = (url) => {
    let [data, setData] = useState({})
    let abortController = new AbortController()

    useEffect(() => {
        fetch(url, {
            signal: abortController.signal
        }).then(resp => {
            return resp.json()
        }).then(data => {
            setData(data)
        })
        return () => {
            abortController.abort()
        }
    }, [url])
    return [data, setData];
}
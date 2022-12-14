import React, {useEffect, useRef, useState} from "react";
import {LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, Area, AreaChart} from 'recharts';
import {data} from "../data/chart";
import styled from "styled-components";

const Chart = () => {
    const ref = useRef(null)

    const [height, setHeight] = useState(0)
    const [width, setWidth] = useState(0)

    useEffect(() => {
        setHeight(ref.current.clientHeight)
        setWidth(ref.current.clientWidth)

    }, [])

    const ChartElement = styled.div`
      background-color: white;
      border-radius: 1rem;
      box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1);
      padding: 2rem 0;
      margin: 1rem;
      flex: 1 1 auto;
    `
    return <ChartElement ref={ref}>

        <AreaChart width={width} height={height * 0.8} data={data}
                   margin={{ top: 10, right: 30, left: 0, bottom: 0 }}

        >
            <defs>
                <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
                </linearGradient>
                <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#82ca9d" stopOpacity={0}/>
                </linearGradient>
            </defs>
            <XAxis dataKey="name" />
            <YAxis />
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip />
            <Area type="monotone" dataKey="uv" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
            <Area type="monotone" dataKey="pv" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" />
        </AreaChart>
    </ChartElement>
}

export default Chart
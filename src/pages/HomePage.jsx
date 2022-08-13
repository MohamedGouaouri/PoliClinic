import React from "react";
import styled from "styled-components";
import NavBar from "../components/NavBar";
import Greeting from "../components/Greeting";
import InfoBox from "../components/InfoBox";
import Chart from "../components/Chart";


const Home = styled.div`
  height: 100%;
  width: 80%;
  background-color: var(--clr-background);
  display: flex;
  flex-direction: column;
`

const HomePage = () => {
    return (
        <Home>
            <NavBar />
            <Greeting user={"Amir"}/>
            <div style={{
                margin: "1rem 0",
                display: "flex",
                justifyContent: "space-around",

            }}>
                <InfoBox
                    label={"Total Patients"}
                    value={"24,908"}
                    color={"rgba(177,226,173,0.51)"}
                />

                <InfoBox
                    label={"Total Doctors"}
                    value={"24,908"}
                    color={"rgba(238,176,129,0.51)"}
                />

                <InfoBox
                    label={"Total Staff"}
                    value={"24,908"}
                    color={"rgba(87,149,228,0.51)"}
                />

            </div>

            <Chart />
        </Home>
    )
}

export  default HomePage
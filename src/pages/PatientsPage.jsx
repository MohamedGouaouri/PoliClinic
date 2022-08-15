import React, {useContext} from "react";
import styled from "styled-components";
import NavBar from "../components/NavBar";
import Greeting from "../components/Greeting";
import InfoBox from "../components/InfoBox";
import Chart from "../components/Chart";
import {AppContext} from "../context/AppContext";
import BasicTable from "../components/PatientsTable";


const Patients = styled.div`
  height: 100%;
  width: 80%;
  background-color: var(--clr-background);
  display: flex;
  flex-direction: column;
`

const PatientsPage = () => {
    const PatientsTableStyled = styled.div`
      //display: flex;
      //flex-direction: column;
      //align-items: center;
      //justify-content: center;
      //flex: 1 1 auto;
      margin: 2rem 1rem 0 1rem
    `
    return (
        <Patients>
            <NavBar/>
            <PatientsTableStyled>
                <BasicTable />
            </PatientsTableStyled>
        </Patients>
    )
}

export  default PatientsPage
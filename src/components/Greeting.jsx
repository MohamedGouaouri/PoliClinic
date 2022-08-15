import React, {useState} from 'react'
import styled from "styled-components";
import {FaPlus} from "react-icons/fa";
import {Alert} from "@mui/material";


const Greeting = ({user}) => {

    const [alertOpened, setAlertOpened] = useState(false)
    if (alertOpened) {
        setTimeout(() => {
            setAlertOpened(false)
        }, 2000)
    }

    const Wrapper = styled.div`
      display: flex;
      flex-direction: column;
      align-items: center;
    `

    const GreetingElement = styled.div`
      width: 100%;
      margin: 1rem 0;
      display: flex;
    `

    const Heading = styled.h4`
      padding: 0;
      margin: 0;
    `

    const Welcome = styled.div`
      color: var(--clr-light-text);
      font-weight: 600;
    `
    const Button = styled.button`
      margin-left: auto;
      display: flex;
      background-color: var(--clr-primary);
      color: white;
      justify-content: center;
      align-items: center;
      border-radius: 1rem;
      padding: 1rem 2rem;
      margin-right: 1rem;
    `
    return (
        <Wrapper >
            {
                alertOpened && <Alert severity="success" style={{
                    width: "50%",
                    textAlign: "center",
                    margin: "1rem 0 0 0"
                }} onClose={() => {setAlertOpened(false)}} >This is a success alert — check it out!</Alert>
            }
            <GreetingElement>
                <div style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    marginLeft: "1rem"

                }}>
                    <Heading>
                        Poli Overview
                    </Heading>
                    <Welcome >
                        Welcome back, {user}
                    </Welcome>
                </div>
                <Button onClick={() => {setAlertOpened(true)}}>
                    <FaPlus style={{
                        marginRight: "1rem"
                    }
                    }/>
                    <div>
                        Register Patient
                    </div>
                </Button>
            </GreetingElement>
        </Wrapper>

    )

}

export default Greeting
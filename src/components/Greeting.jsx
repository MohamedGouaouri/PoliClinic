import React from 'react'
import styled from "styled-components";
import {FaPlus} from "react-icons/fa";


const Greeting = ({user}) => {
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
    return <GreetingElement>
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
        <Button >
            <FaPlus style={{
                marginRight: "1rem"
            }
            }/>
            <div>
                Register Patient
            </div>
        </Button>
    </GreetingElement>
}

export default Greeting
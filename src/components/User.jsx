import React from 'react'
import styled from "styled-components";
import profile from '../assets/images/profile.png'

const User = ({username, role}) => {
    const UserBoxElement = styled.div`
      padding: 0.2rem 1rem;
      border-radius: 1rem;
      margin: 0.5rem 0.5rem 1rem auto;
      background-color: var(--clr-background);
      display: flex;
      align-items: center;
      justify-content: flex-start;
    `
    const RoundedImage = styled.img`
      height: 48px;
      width: 48px;
      border-radius: 50%;
      margin-right: 1rem;
    `
    const UserName = styled.h4`
      padding: 0;
      margin: 0;
    `

    const Role = styled.div`
      color: var(--clr-light-text);
      font-weight: 600;
    `
    return (
        <UserBoxElement>
            <RoundedImage src={profile} />
            <div style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center"
            }}>
                <UserName>
                    {username}
                </UserName>
                <Role>
                    {role}
                </Role>
            </div>
        </UserBoxElement>
    )
}

export default User
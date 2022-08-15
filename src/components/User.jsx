import React, {useEffect, useRef, useState} from 'react'
import styled, {css} from "styled-components";
import profile from '../assets/images/profile.png'
import useWindowDimensions from "../hooks/window";
import getWindowDimensions from "../hooks/window";

const User = ({username, role}) => {

    const [open, setOpen] = useState(false)


    const UserBoxElementWrapper = styled.div`
      margin: 0.5rem 0.5rem 1rem auto;
      &:hover{
        cursor: pointer;
      }
    `

    const UserBoxElement = styled.div`
      display: flex;
      align-items: center;
      justify-content: flex-start;
      border-radius: 1rem;
      padding: 0.2rem 1rem;
      background-color: var(--clr-background);


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
       <UserBoxElementWrapper>
           <UserBoxElement onClick={() => setOpen(!open)}>

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
           {open && <DropDownMenu />}
       </UserBoxElementWrapper>
    )
}

const DropDownMenu = () => {
    const DropDownMenuStyled = styled.ul`
      list-style-type: none;
      margin: 0;
      padding: 0;
      display: flex ;
      flex-direction: column;
      box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1);
      border-radius: 1rem;
      background-color: white;
      position: absolute;
      top: 80px;
      width: 300px;
      transform: translateX(-40%);
      overflow: hidden;
    `

    return (
        <DropDownMenuStyled>
            <DropDownMenuItem
                label={"Profile"}
            />
            <DropDownMenuItem
                label={"Text"}
            />
            <DropDownMenuItem
                label={"Logout"}
            />
        </DropDownMenuStyled>
    )
}

const DropDownMenuItem = ({label}) => {

    const DropDownMenuItemStyled = styled.li`
      text-align: center;
      transition: background-color 500ms;
      padding: 0.5rem;
      font-weight: 600;
      color: var(--clr-light-text);

      &:hover {
        background-color: #e3f0ff;
      }
    `

    return (
        <DropDownMenuItemStyled>
            {label}
        </DropDownMenuItemStyled>
    )
}


export default User
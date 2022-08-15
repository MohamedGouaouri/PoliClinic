import React, {useContext} from 'react'
import styled from "styled-components";
import SearchBar from "./SearchBar";
import User from "./User";
import {AppContext} from "../context/AppContext";

const NavBar = () => {
    const data = useContext(AppContext)

    const NavBarElement = styled.div`
      width: 100%;
      background-color: white;
      display: flex;
      align-items: center;
    `
    return (
        <NavBarElement>
            <SearchBar />
            <User
                username={data['user'] && `${data['user']['firstName']} ${data['user']['lastName']}`}
                role={"Chef Doctor"}
            />
        </NavBarElement>
    )
}

export default NavBar
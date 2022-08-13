import React from 'react'
import styled from "styled-components";
import SearchBar from "./SearchBar";
import User from "./User";

const NavBar = () => {
    const NavBarElement = styled.div`
      width: 100%;
      background-color: white;
      display: flex;
    `
    return (
        <NavBarElement>
            <SearchBar />
            <User
                username={"Amir Bouras"}
                role={"Chef Doctor"}
            />
        </NavBarElement>
    )
}

export default NavBar
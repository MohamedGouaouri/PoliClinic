import React from 'react'
import styled from "styled-components";
import {FaSearch} from "react-icons/fa";


const SearchBar = () => {
    const SearchElement = styled.div`
      display: flex;
      padding: 1rem 2rem;
      margin: 1rem 2rem;
      border-radius: 2rem;
      border: 1px var(--clr-light-text) solid;
      justify-content: center;
      align-items: center;
    `
    const Input = styled.input`
      width: 100%;
      height: 100%;
    `
    return (
        <SearchElement>
            <FaSearch style={{
                color: "var(--clr-light-text)",
                fontSize: "1.5rem"
            }}/>
            <Input placeholder={"Search ..."}/>
        </SearchElement>
    )
}

export default SearchBar
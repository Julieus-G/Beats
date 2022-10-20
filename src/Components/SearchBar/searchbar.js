import React from "react";
import { SearchDiv } from "../../pages/home/home.styles";
import { H1 } from "./searchbar.styles";

function SearchBar(){
    return(
        <>
            <H1> Hey🤩, Welcome to my beats Store!</H1>
            <SearchDiv type="text" placeholder="Search for..."/>
        </>
    )
}

export default SearchBar;
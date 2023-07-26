import React from 'react';
import styled from "styled-components";

const Ul = styled.ul``;

const Navbar = () => {
    return (
        <Ul>
            <li>Home</li>
            <li>Dos</li>
            <li>Buy me a coffee</li>
            <li>About us</li>
        </Ul>
    );
};

export default Navbar;
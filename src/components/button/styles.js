import styled from "styled-components";

export const Button = styled.button`
    
    color: #000000;
    text-decoration: none;
    font-size: 30px;
    font-weight: 600;
    position: relative;
    background: transparent;
    border: none;
    cursor: pointer;
    
    &::after {
        content: " ";
        width: 0%;
        height: 4px;
        background-color: #ffffff;
        position: absolute;
        bottom: 0;
        left: 0;
        transition: 0.5s ease-in-out;
    }

    &:hover::after {
        width: 100%;
    }

`
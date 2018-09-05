import styled from "styled-components";

export const LinkButton = styled.div`
    width: 100px;
    padding: 5px;
    color: #9eb3ff;
    border: 2px solid #9eb3ff;
    padding-bottom: 10px;
    text-align: center; 
    margin: 15px auto;
    border-radius: 30px;
    cursor: pointer;
    transition: all .1s ease-in-out;
    &:hover {
        color: white;
        background-color: transparent;
        border-color: white;
        cursor: pointer;
    }
    &:active {
        transform: scale(1.05);
        background-color: white;
        color: #9eb3ff;
    }

`;
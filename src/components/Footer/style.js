import styled from 'styled-components';
import media from '../styled-media-queries';

export const About = styled.div`
    width: 60vw;
    margin-left: auto;
    margin-right: auto; 
`;

export const TeamList = styled.ul`
    display: grid;
    grid-template-columns: 450px 450px;
    align-content: center;
    grid-gap: 30px;
    justify-content: center;
    justify-items: center;
    text-decoration: no1.5e;
    list-style-type: none;
    padding: 0;
    color: white;
    transition: all .5 linear;

     ${media.big`
      grid-template-columns: 450px;
     `};
`;

export const Li = styled.li`
    width: 400px;
    height: 170px;
    background-color: black;
    padding: 20px;
    border: solid 1px white;
    border-radius: 20px;
    transition: all .1s linear;

    &:hover{
      transform: scale(1.3);
      z-index: 10;
    }
`;

export const Name = styled.div`
    font-size: 24px;
    text-shadow: 1px 1px #9eb3ff;
`;

export const Description = styled.div`
    margin-top: 10px;
`;

export const GitHub = styled.div`
    font-size: 20px;
    margin-top: 20px;
    color: rgb(94, 94, 255);
`;

export const Label = styled.div`
    width: 600px;
    margin-left: auto;
    margin-right: auto;
    padding: 20px;
    border: solid 1px white;
    color: white;
    font-size: 24px;
    letter-spacing: 5px;
    text-shadow: 1px 1px #9eb3ff;
    border-radius: 20px;
    text-align: center;
    vertical-align: middle;
    transition: all .2s linear;

    &:hover {
        background: white;
        color: black;
    }

    ${media.big`
      width: 300px;  
    `};

    ${media.middle`
      width: 250px;
    `};
`;
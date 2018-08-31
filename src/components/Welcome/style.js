import styled from 'styled-components';
import media from '../styled-media-queries';

export const Container = styled.div`
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 100vh;
    min-height: 500px;
    min-width: 320px;
    font-size: 16px;
    background-color: #000;
    background-position: cover;

    ${media.tablet`
      display: block;
      margin-top: 180px;
    `}
`;

export const Inscription = styled.p`
    margin: 0;
    color: #9eb3ff;
    font-size: 50px;
    letter-spacing: 5px;
    margin-bottom: 10px;
    text-align: center;

    ${media.tablet`
      font-size: 40px; 
    `}

      ${media.phablet`
      font-size: 25px;
    `}
`;

export const Category = styled.div`
    height: 30px;
    width: 200px;
    margin: 10px;
    padding: 10px;
    padding-bottom: 10px;
    display:inline-block;
    text-align: center;
    font-weight: 400;
    border-radius: 30px;
    border: 1px solid #9eb3ff;
    color: #9eb3ff;
    animation: category-move .5s 1.05s ease-in-out forwards;
    opacity: 0;
    transition: all .3s ease-in-out;
    
    &:hover{
        color: white;
        background-color: transparent;
        border-color: white;
        cursor: pointer;
    }

     ${media.tablet`
      height: 25px;
      width: 150px;
      font-size: 20px;
      padding-bottom: 15px;
    `}
`;

export const ListCategory = styled.ul`
    display: grid;
    grid-template-columns: repeat(3, 250px);
    justify-content: center;
    justify-items: center;
    text-align: center;
    list-style-type: none;
    font-size: 1.25em;
    padding:0;
    letter-spacing: 2px;

     ${media.tablet`
      grid-template-columns: repeat(2, 200px);
    `}

    ${media.phablet`
      grid-template-columns: 200px;
    `}
`;

export const CategoriesWrapper = styled.div`
    width: 100vw;
    height: 20vh;
`;

export const Span = styled.span`
     display: inline-block;
     margin: 5px;
     animation-fill-mode: forwards;
     animation-timing-function: linear;
     animation-name: show;
     animation-duration: .05s;
     opacity: 0;
`;
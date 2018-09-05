import styled from 'styled-components';

export const UXinfo = styled.div `
    color: rgba(255,255,255,0.5);
    text-transform: uppercase;
    width: 80%;
    margin: 10px 0;
    text-align: center;

    span {
        color: #9eb3ff;
    }
`;

export const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    width: 100%;
    margin: 0 auto;
    overflow: hidden;

    .loading {
        height: 100vh;
        width: 100vw;
        color: #9eb3ff;
        text-align: center;
        font-size: 80px;
        margin-top: 200px;
    }

    .dot{
        width: 25px;
        height: 25px;
        margin: 10px;
        display: inline-block;
        background-color: #9eb3ff;
        border-radius: 50%;
        animation: dot-move 1s infinite linear;
    }

    .dot1{
        animation-delay: 0;
    }

    .dot2{
        animation-delay: .2s;
    }

    .dot3{
        animation-delay: .4s;
    }

    @keyframes dot-move {
        from {
            transform: translateY(30px);
        }
        50%{
            transform: translateY(0px);
        }
        to{
            transform: translateY(30px);
        }
    }

    .sorry {
        font-size: 0.8rem;
    }
`;

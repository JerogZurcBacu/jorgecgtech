import styled from "styled-components";

export const SwitchContiner = styled.div`
    width: 100%;
    background-color: ${({ theme }) => theme.bgc};
    transition: 0.5s all ease-in;
`;

export const SwitchWrapper = styled.div`
    max-width: 1300px;
    margin: auto;
    padding-top: 2.5rem; 
    padding-left: 4.5rem;
    display: flex;
    justify-content: space-between;
`;

export const SwitchBGC = styled.div`
    position: relative;
    width: 60px;
    height: 30px;
    border-radius: 30px;
    background-color: ${({ theme }) => theme.toggle};
    transition: 1s all ease-in;
    svg {
        position: absolute;
        fill: ${({ theme }) => theme.text};
    }
    #sol {
        left: -2.3rem;
        font-size: 1.8rem;
    }
    #luna {
        left: 4.2rem;
        font-size: 1.8rem;
    }
`;

export const ButtonSwitch = styled.button`
    position: absolute;
    cursor: pointer;
    bottom: 4px;
    left: ${({ position }) => (position ? "34px" : "5px")};
    width: 22px;
    height: 22px;
    border: none;
    border-radius: 50%;
    background-color: #fff;
    transition: 0.4s all ease-in;
    outline: none;
`;


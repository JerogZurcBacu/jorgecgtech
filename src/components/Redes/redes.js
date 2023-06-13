import styled from "styled-components";

export const SocialContiner = styled.div`
    width: 150px;
    margin-right: 2rem;
    display: flex;
    justify-content: flex-end;
    a {
        margin-left: 10px;
    }
    svg {
        font-size: 1.4rem;
    }
    div {
        width: 30px;
        height: 30px;
        border-radius: 30%;
        display: flex;
        justify-content: center;
        align-items: center;    
    }
`;
export const CirculoAzulRed = styled.div`
    background-color: #00FFFF;
    svg {
        fill: #FF00FF;
    }
`;
export const CirculoRosaRed = styled.div`
    background-color: #FF00FF;
    svg {
        fill: #00FFFF;
    }
`;
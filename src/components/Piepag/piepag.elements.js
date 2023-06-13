import styled from "styled-components";

export const LogoContainer = styled.div `
    widht: 100%;
    padding-top: 10vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    #pie_txt {
        font-size: 1.2rem;
        color: ${({ theme }) => theme.text};
        svg {
            font-size: 1.4rem; 
        }
    } 
`;
import styled from "styled-components";
import bgimg from "../../imagenes/Maqueta_White1.png";

export const CoverContainer = styled.div`
    width: 100%;
    justify-content: center;
    background-color: ${({ theme }) => theme.bgc};
    transition: 0.5s all ease-in;
`;

export const CoverWrapper = styled.div`
    width: 100%;
    padding: 6rem 0 0 0 ;
    margin: auto;
    max-width: 1300px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    background:url(${bgimg}); 
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 35% center;
    @media (min-width: 700px) {
        background-size: contain; 
    }
`;

export const InfoContainer = styled.div`
    width: 90%;
    margin: auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    word-wrap: break-word;
    .subtitulos {
        width: 100%;
        font-size: 12rem;
        margin: 0;
        line-height: 11rem;
        color: ${({ theme }) => theme.text};
        @media (min-width: 700px) {
            font-size: 14rem;
          }
    }
    .span_contorno {
        -webkit-text-stroke: 2px ${({ theme }) => theme.text};
        color: transparent;
    }
    #bioserv_title {
        font-size: 11rem;
    }
    #contacto_title {
        font-size: 11rem;
    }
    svg {
        font-size: 1.5rem;
        margin: auto;
        fill: ${({ theme }) => theme.text};
    }

    p {
        color: ${({ theme }) => theme.text};
        margin: 0;
        font-size: 5.8rem;
        font-weight: 700;
    }
    #holamundo {
        width: 100%;
    }
    #yo {
        font-size: 2rem;
        font-weight: 400;
    }
    ul {
        margin: 3rem 0 0 -1.1rem;
        list-style: none;
        li {
            margin-top: 1rem;
            a {
                text-decoration:none;
                p {
                    font-size: 1rem; 
                }
            }
        }    
    }

    h1 {
        margin: 0;
        width: 100%;
        color: ${({ theme }) => theme.text};
        font-weight: 700;
        font-size: 7rem;
    }
`;

export const NombreContainer = styled.div `
    widht: 100%;
    display: flex;
    flex-wrap: wrap;
    h1 {
        width: 100%;
        @media (min-width: 700px) {
            font-size: 9rem;
            width: auto;
          }
    }
    #cgdes {
        width: 100%;
        @media (min-width: 700px) {
            width: 60%;
          }
    }
`;
import styled from "styled-components";

export const ContContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    .sub_secundario {
        widht: 100%;
        font-size: 3rem;
        margin: 1.8rem auto;
        color: ${({ theme }) => theme.text};
    }
    .info_txt {
        font-size: 1.1rem;
    }
    #redes_contacto {
        margin: 25px; 
        width: 100%;
        justify-content: center;
        svg {
            font-size: 3rem;
            fill: #23374D;
        }
        div {
            width: 70px;
            height: 70px;
            border-radius: 30%;
        }
    }
`;
export const Bioboton = styled.div`
    width: 80%;
    height: 50px;
    margin-top: 30px;
    border-radius: 20px;
    background-color: #00FFFF;
    display: flex;
    justify-content: center;
    #boton_txt {
        font-size: 1rem;
        margin: auto;
        color: #23374D;
    }
    a {
        text-decoration:none;
        color: #23374D;
    }
    @media (min-width: 700px) {
        width: 25%; 
    }
`;
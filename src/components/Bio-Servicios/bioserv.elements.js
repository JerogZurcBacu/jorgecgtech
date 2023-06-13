import styled from "styled-components";
import cara from "../../imagenes/cara.png";

export const BioContainer = styled.div`
    width: 100%;
    margin-top: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    .sub_secundario {
        font-size: 1.8rem;
        @media (min-width: 700px) {
            width: 55%;
            font-size: 3rem;
          }
    }
    #proximamente_img {
        width: 40%;
        margin: -70px auto 0 auto;
        @media (min-width: 700px) {
            width: 20%;
            margin: -100px auto 0 180px;
          } 
    }
    #papeles {
        width: 85%;
        @media (min-width: 700px) {
            width: 55%;
          }
    }
`;

export const BioInfo = styled.div`
    width: 100%;
    .info_txt {
        margin: 15px auto;
        font-size: 1.1rem;
    }
    @media (min-width: 700px) {
        #descrpcion1,#descrpcion2 {
            width: 50%;
            margin-left: 0;
        }
      }
    
`;

export const Bioservicios = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    @media (min-width: 700px) {
        justify-content: space-around;
      }
`;
export const Bioservsub = styled.div`
    width: 150px;
    margin: 0 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
    img {
        width: 100%;
    }
    h5 {
        font-size: 1.5rem;
        width: 100%;
        color: ${({ theme }) => theme.text};
    }
    #serv_txt {
        font-size: 1.1rem;
    }
    @media (min-width: 700px) {
        width: 20%;
      }
`;

export const Biodescarga = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media (min-width: 700px) {
        width: 50%;
        flex-direction: row;
        #papeles {
            width: 50%;
            margin: 0 25px;
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
        font-size: 2.5rem;
    }
    a {
        text-decoration:none;
    }
    @media (min-width: 700px) {
        width: 60%;
      }
`;
export const BioCara = styled.div`
    display: none;
    @media (min-width: 700px) {
        position: absolute;
        top: 3200px;
        right: 0;
        width: 300px;
        height: 800px;
        border-radius: 500px 0 0 500px;
        background-color: green;
        background:url(${cara}); 
        background-repeat: no-repeat;
        background-size: cover;
        display: flex;

      }
`;
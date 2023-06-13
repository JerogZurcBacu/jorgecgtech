import React from "react";
import {
    CoverContainer,
    CoverWrapper,
    InfoContainer,
    NombreContainer,
} from "./Cover.elements";
import cgdes from "../../imagenes/cgdes.png";
import cgdes_b from "../../imagenes/cgdes_b.png";

const Cover = (props) => {

    return (
        <>
            <CoverContainer>
                <CoverWrapper>
                    <InfoContainer>
                        <p id="holamundo">Hola mundo!</p>
                        <p id="yo">yo soy...</p>
                        <NombreContainer>
                            <h1>Jorge</h1>
                            <img src= {props.theme === 'light' ? cgdes : cgdes_b} alt="Desarrollador Web" id="cgdes" />
                        </NombreContainer>
                    </InfoContainer>
                </CoverWrapper>
            </CoverContainer>
        </>
    );
};
export default Cover;
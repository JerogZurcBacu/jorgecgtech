import React from "react";
import { CoverContainer} from "../cover/Cover.elements";
import { LogoContainer } from "./piepag.elements";
import logo_w from "../../imagenes/logo_w.png";
import logo_b from "../../imagenes/logo_b.png";
import {GiEvilLove } from "react-icons/gi";

const Piepag = (props) => {

    let evil = <GiEvilLove id="evilh"/>

    return (
        <>
            <CoverContainer>
                    <LogoContainer>
                        <p id="pie_txt">Hecho con {evil} por</p>
                        <img src={props.theme === 'light' ? logo_w : logo_b} alt="logo" />
                    </LogoContainer>
            </CoverContainer>        
        </>
    );
};

export default Piepag;
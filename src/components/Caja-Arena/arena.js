import React from "react";
import {
    CoverContainer,
    CoverWrapper,
    InfoContainer,
} from "../cover/Cover.elements";
import {
    CajaContainer,
} from "../Caja-Arena/arena.elements";

const Arena = (props) => {
    return (
        <>
            <CoverContainer>
                <CoverWrapper>
                    <InfoContainer>
                        <h2 id="caja_arena" className="subtitulos">Caja<br />de<br />Are<br />na</h2>
                        <CajaContainer>
                            
                        </CajaContainer>
                    </InfoContainer>
                </CoverWrapper>
            </CoverContainer>        
        </>
    );
};

export default Arena;
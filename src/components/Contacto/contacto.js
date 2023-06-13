import React from "react";
import {
    CoverContainer,
    CoverWrapper,
    InfoContainer,
} from "../cover/Cover.elements";
import {
    ContContainer,
    Bioboton,
} from "../Contacto/contacto.elements";
import {SocialContiner, CirculoAzulRed, CirculoRosaRed,} from '../Redes/redes';
import { AiOutlineMail } from "react-icons/ai";
import { BsInstagram, BsTiktok, BsFacebook } from "react-icons/bs";
import {RiGithubLine} from "react-icons/ri";
import {ImLinkedin2} from "react-icons/im";

const Contacto = (props) => {

    let mail = <AiOutlineMail id="mail" />
    let log_git =  <RiGithubLine id="git"/>;
    let log_link =  <ImLinkedin2 id="link"/>;
    let log_inst =  <BsInstagram id="inst"/>;
    let log_tik =  <BsTiktok id="tik"/>;
    let log_face = <BsFacebook id="face"/>;

    return (
        <>
            <CoverContainer>
                <CoverWrapper>
                    <InfoContainer>
                        <h2 id="contacto_title" className="subtitulos">Contac to</h2>
                        <ContContainer>
                            <h4 className="sub_secundario">¿Te interesó mi trabajo?</h4>
                            <h4 className="sub_secundario">¡Platiquemos!</h4>
                            <p className="info_txt">No importa el medio con el que te sientas más cómodo. Podemos charlar a través de cualquiera de mis redes sociales o correo electrónico</p>
                            <Bioboton>
                                {mail}
                                <p id="boton_txt"><a href="mailto:hola.jorge.c@jorgecg.tech">hola.jorge.c@jorgecg.tech</a> </p>
                            </Bioboton>
                            <SocialContiner id="redes_contacto">
                                <a href="https://github.com/JerogZurcBacu" rel="noreferrer" target="_blank">
                                    <CirculoAzulRed>
                                        {log_git}
                                    </CirculoAzulRed>
                                </a>
                                <a href="https://www.linkedin.com/in/jerogzurc/" rel="noreferrer" target="_blank">
                                    <CirculoRosaRed>
                                        {log_link}
                                    </CirculoRosaRed>
                                </a>
                                <a href="https://www.facebook.com/profile.php?id=100092444424452" rel="noreferrer" target="_blank">
                                    <CirculoAzulRed>
                                        {log_face}
                                    </CirculoAzulRed>
                                </a>
                                <a href="https://instagram.com/elsenorito_jorge" rel="noreferrer" target="_blank">
                                    <CirculoRosaRed>
                                        {log_inst}
                                    </CirculoRosaRed>
                                </a>
                                <a href="https://www.tiktok.com/@elsenorito_jorge" rel="noreferrer" target="_blank">
                                    <CirculoAzulRed>
                                        {log_tik}
                                    </CirculoAzulRed>
                                </a>
                            </SocialContiner>
                        </ContContainer>
                    </InfoContainer>
                </CoverWrapper>
            </CoverContainer>        
        </>
    );
};

export default Contacto;
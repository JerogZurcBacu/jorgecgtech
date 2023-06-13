import React from "react";
import {
    CoverContainer,
    CoverWrapper,
    InfoContainer,
} from "../cover/Cover.elements";
import {ProyContainer,
        ProyImgContainer,
        ProyTxtContainer,
} from "./proyectos.elements";
import itgas from "../../imagenes/itgas.png";
import aguanat from "../../imagenes/aguanat.png";
import siliclab from "../../imagenes/siliclab.png";
import gadark from "../../imagenes/gadark.png";
import sendengo from "../../imagenes/sendengo.png";

const Proyectos = (props) => {
    return (
        <>
            <CoverContainer>
                <CoverWrapper>
                    <InfoContainer>
                        <h2 id="subtitulo" className="subtitulos">Proyectos</h2>
                        <ProyContainer>
                            <ProyImgContainer className="izq">
                                <img src={itgas} alt="Proyecto" />
                            </ProyImgContainer>
                            <ProyTxtContainer>
                                <h3>It-Gas</h3>
                                <p className="texto_proy">Sitio web - Diseño y desarrollo completo del sitio web de ItGas. 100% Responsivo.</p> 
                                
                                <p className="texto_proy">Empresa de Tecnologías de la información líder en el mercado nacional e internacional en la industria gasolinera.</p>
                                <a href="http://itgas.com.mx/" rel="noreferrer" target="_blank">Ver mas -&gt;</a>
                            </ProyTxtContainer>
                        </ProyContainer>
                        <ProyContainer>
                            <ProyImgContainer className="der">
                                <img src={aguanat} alt="Proyecto" />
                            </ProyImgContainer>
                            <ProyTxtContainer>
                                <h3>Aguanat</h3>
                                <p className="texto_proy">Sitio web - Diseño y desarrollo completo del sitio web de Aguanat. 100% Responsivo.</p>
                                <p className="texto_proy">Franquicia de despachadoras automáticas de agua en Querétaro.</p>
                                <a href="https://www.aguanat.com/" rel="noreferrer" target="_blank">Ver mas -&gt;</a>
                            </ProyTxtContainer>
                        </ProyContainer>
                        <ProyContainer>
                            <ProyImgContainer className="izq">
                                <img src={siliclab} alt="Proyecto" />
                            </ProyImgContainer>
                            <ProyTxtContainer>
                                <h3>SilicLab</h3>
                                <p className="texto_proy">Ecommerce - Diseño y desarrollo completo del sitio web de SilicLab. 100% Responsivo.</p>
                                <p className="texto_proy">Tienda en línea de productos y accesorios relacionados con el mundo 4/20.</p>
                                <a href="https://siliclab.mx/" rel="noreferrer" target="_blank">Ver mas -&gt;</a>
                            </ProyTxtContainer>
                        </ProyContainer>
                        <ProyContainer>
                            <ProyImgContainer className="der">
                                <img src={gadark} alt="Proyecto" />
                            </ProyImgContainer>
                            <ProyTxtContainer>
                                <h3>Gadark</h3>
                                <p className="texto_proy">Sitio web - Diseño y desarrollo completo del sitio web de Gadark. 100% Responsivo.</p>
                                <p className="texto_proy">Empresa 100% mexicana, con más de 10 años de experiencia en el Mantenimiento y recarga de extintores, señalización en materia de protección civil y corporativa.</p>
                                <a href="https://gadark.mx/" rel="noreferrer" target="_blank">Ver mas -&gt;</a>
                            </ProyTxtContainer>
                        </ProyContainer>
                        <ProyContainer>
                            <ProyImgContainer className="izq">
                                <img src={sendengo} alt="Proyecto" />
                            </ProyImgContainer>
                            <ProyTxtContainer>
                                <h3>Sendengo</h3>
                                <p className="texto_proy">Sitio web – Colaboración en el diseño y desarrollo del sitio web de Sendengo. 100% Responsivo.</p>
                                <p className="texto_proy">Strat-up mexicana - Plataforma de asignación tecnológica en donde puedes enviar o conseguir cargas.</p>
                                <a href="https://sendengo.com/" rel="noreferrer" target="_blank">Ver mas -&gt;</a>
                            </ProyTxtContainer>
                        </ProyContainer>
                    </InfoContainer>
                </CoverWrapper>
            </CoverContainer>
        </>
    );
};

export default Proyectos;
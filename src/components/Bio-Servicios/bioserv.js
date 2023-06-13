import React from "react";
import {
    CoverContainer,
    CoverWrapper,
    InfoContainer,
} from "../cover/Cover.elements";
import {
    BioContainer,
    BioInfo,
    Bioservicios,
    Bioboton,
    Biodescarga,
    Bioservsub,
    BioCara,
} from "../Bio-Servicios/bioserv.elements";
import proximamente_w from "../../imagenes/proximamente_w.png";
import proximamente_b from "../../imagenes/proximamente_b.png";
import papeles from "../../imagenes/papeles.png";
import serv_img_1 from "../../imagenes/serv_img_1.png";
import serv_img_2 from "../../imagenes/serv_img_2.png";
import serv_img_3 from "../../imagenes/serv_img_3.png";
import serv_img_4 from "../../imagenes/serv_img_4.png";

const Bioserv = (props) => {
    return (
        <>
            <CoverContainer>
                <CoverWrapper>
                    <InfoContainer>
                        <h2 id="bioserv_title" className="subtitulos">Bio<span className="span_contorno">/</span><br />Servicios</h2>
                        <BioContainer>    
                            <p className="sub_secundario"><span className="span_contorno">Soy</span> Téc. Sup. en BigData, <span className="span_contorno">y desarrollador</span> Fornt End <span className="span_contorno">/</span> Full Stack</p>
                            <img src= {props.theme === 'light' ? proximamente_w : proximamente_b} alt="Desarrollador Web" id="proximamente_img" />
                            <BioInfo>
                                <BioCara>

                                </BioCara>
                                <p className="info_txt" id="descrpcion1">Por cierto, mi nombre es Jorge Cruz García, tengo 29 años y vivo en Hidalgo, México.</p>
                                <p className="info_txt" id="descrpcion2">Soy desarrollador web freelance enfocado principalmente en Front End y en proceso de aprendizaje de Back End para convertirme en todo un Full Stack.</p>
                                <h4 className="sub_secundario"><span className="span_contorno">-Servicios-</span></h4>
                                <p className="info_txt">Tengo experiencia en empresas de diferentes tamaños, desde grandes corporaciones hasta startups.</p> 
                                <p className="info_txt">Ayudo a resolver problemas en sitios web, ya sea mediante rediseños, nuevas características o lanzamientos.</p> 
                                
                                <p className="info_txt">He colaborado tanto en entornos presenciales como remotos, trabajando con CEOs y con diseñadores y desarrolladores en sistemas.</p> 
                                <p className="info_txt">Estoy listo para asumir nuevos desafíos y utilizar mi experiencia en la construcción y lanzamiento de productos para ayudar a mis clientes a alcanzar sus objetivos en línea.</p>
                                <Bioservicios>
                                    <Bioservsub>
                                        <img src={serv_img_1} alt="serv_img"/>
                                        <h5>Diseño Web</h5>
                                        <p id="serv_txt">Diseño web profesional y atractivo que impulsa tu presencia en línea y maximiza la experiencia del usuario.</p>
                                    </Bioservsub>
                                    <Bioservsub>
                                        <img src={serv_img_2} alt="serv_img"/>
                                        <h5>Desarrollo Web</h5>
                                        <p id="serv_txt">Desarrollo web de alta calidad, eficiente y 100% personalizado para tener una presencia unica.</p>
                                    </Bioservsub>
                                    <Bioservsub>
                                        <img src={serv_img_3} alt="serv_img"/>
                                        <h5>Admn. Web</h5>
                                        <p id="serv_txt">Administración profesional de sitios web para garantizar su funcionamiento óptimo y actualizaciones regulares de contenido.</p>
                                    </Bioservsub>
                                    <Bioservsub>
                                        <img src={serv_img_4} alt="serv_img"/>
                                        <h5>Branding</h5>
                                        <p id="serv_txt">Creación de una identidad de marca única y memorable que refleje los valores y personalidad de tu empresa.</p>
                                    </Bioservsub>
                                </Bioservicios>
                                <h4 className="sub_secundario"><span className="span_contorno">-CV-</span></h4>
                                <p className="info_txt">¿Quieres saber más? Que acaso eres… un… ¿Un reclutador?</p> <p className="info_txt">¿Quieres un resumen de mis habilidades, experiencia laboral, educación y logros profesionales? Aquí tienes:</p>
                                <Biodescarga>
                                    <img src={papeles} alt="papeles" id="papeles"/>
                                    <Bioboton>
                                    <a href="https://github.com/JerogZurcBacu/jorgecg-2023/raw/main/jorgecg_2023/src/imagenes/CV_JorgeCG.pdf">
                                        <p id="boton_txt">Descargar</p>
                                        </a>
                                    </Bioboton>
                                </Biodescarga>
                            </BioInfo>    
                        </BioContainer>    

                    </InfoContainer>
                </CoverWrapper>
            </CoverContainer>
        </>
    );
};

export default Bioserv;
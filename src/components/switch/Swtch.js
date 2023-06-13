import React, { useState } from "react";
import {
    SwitchContiner,
    SwitchWrapper,
    SwitchBGC,
    ButtonSwitch,
} from './Switch.elements';
import {SocialContiner, CirculoAzulRed, CirculoRosaRed,} from '../Redes/redes';
import { BsSun, BsMoon, BsInstagram, BsTiktok, BsFacebook } from "react-icons/bs";
import {RiGithubLine} from "react-icons/ri";
import {ImLinkedin2} from "react-icons/im";

const Switch = (props) => {

    let sol = <BsSun id="sol"/>;
    let luna =  <BsMoon id="luna"/>;
    let log_git =  <RiGithubLine id="git"/>;
    let log_link =  <ImLinkedin2 id="link"/>;
    let log_inst =  <BsInstagram id="inst"/>;
    let log_tik =  <BsTiktok id="tik"/>;
    let log_face = <BsFacebook id="face"/>;

    const [position, setPosition] = useState(false);

    const changeMode = () => {
        if (props.theme === 'light') {
            props.setTheme('dark');
            changePosition();
        } else {
            props.setTheme('light');
            changePosition();
        }
    }

    const changePosition = () => {
        setPosition(!position);
    };

    return (
        <>
            <SwitchContiner>
                <SwitchWrapper>
                    <SwitchBGC>
                    {sol}
                        <ButtonSwitch 
                            onClick={() => changeMode()}
                            position={position}    
                        ></ButtonSwitch>
                    {luna}
                    </SwitchBGC>
                    <SocialContiner>
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
                </SwitchWrapper>
            </SwitchContiner>
        </>
    )
};

export default Switch; 
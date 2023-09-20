import React from 'react';
import style from "./Skills.module.css";
import html from "./icon/html.svg";
import css from "./icon/css.svg";
import javascript from "./icon/JavaScript.svg";
import figma from "./icon/Figma.svg";
import react from "./icon/react-2.svg";
import github from "./icon/githab.svg";
import git from "./icon/git.svg";



const Skills = () => {
    return (
        <div className={style.homeSkills} id='skills'>
            <h1>Skil<span>ls</span></h1>
            <div className={style.skills}>
                <img src={html}/>
                <img src={css}/>
                <img src={javascript}/>
                <img src={react} style={{width:"80px"}}/>
                <img src={figma}/>
                <img src={github}/>
                <img src={git}/>
            </div>
        </div>
    );
}

export default Skills;

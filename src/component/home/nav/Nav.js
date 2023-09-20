import React from 'react';
import style from './Nav.module.css'

const Nav = () => {
    return (
        <>
            <div className={style.nav}>

        <h1 style={{fontFamily:"-moz-initial", color:'white'}}>Jo</h1>

                <div id='link'>
                <a href='#home'>Home</a>
                <a href='#about'>About</a>
                <a href='#skills'>Skills</a>
                <a href='#works'>Works</a>
                <a href='#explanations'>Explanations</a>
                </div>

                <a href='https://yousef-eid.netlify.app' id='cv' >
                <button style={{breakAfter:'none'}}>Show CV</button>
                </a>
            </div>
        </>
    );
}

export default Nav;

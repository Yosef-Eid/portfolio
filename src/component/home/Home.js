import React from 'react';
import style from "./Home.module.css";
import Nav from './nav/Nav';
import  background from './img/Group 1199.png'
import  me from './img/IMG_7498.JPEG'
import  gmail from './icon-social/Social=Gmail,Style=Original.svg'

const Home = () => {
    return (
        <>
            <img src={background} style={{width:"100%", height:'100vh', position:"absolute", zIndex:"1", left:'0', top:'60px'}}/>
            
            <div className={style.home} id='home'>
            <Nav/>
            <div className={style.imgMe}></div>
            <p className={style.name}>Yousef Eid</p>
            <div className={style.jobs}>
                <p>Frontend web</p>
                <p>developer</p>
            </div>

            <div className={style.icon}>
                <a href="https://www.facebook.com/profile.php?id=100079286477497&mibextid=ZbWKwL"><ion-icon name="logo-facebook" style={{color:'white', background:'#1877F2'}}></ion-icon></a>
                <a href="https://www.linkedin.com/in/yousef-eid-080b75290/"><ion-icon name="logo-linkedin" style={{color:'white', background:'#1877F2'}}></ion-icon></a>
                <a href="https://api.whatsapp.com/send?phone=01155975885"><ion-icon name="logo-whatsapp" style={{color:'white', background:'#25D366'}}></ion-icon></a>
                <a href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox"><ion-icon name="logo-github" style={{color:'#231E1B', background:'white'}}></ion-icon></a>
                <a href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox"><img src={gmail} className={style.gmail}/></a>
            </div>
            </div>
        </>
    );
}

export default Home;

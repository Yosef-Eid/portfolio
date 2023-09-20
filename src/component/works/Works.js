import React from 'react';
import style from "./Works.module.css";
import arrow from "./img-my-works/Arrow_alt_lright_alt.svg";
import todo from "./img-my-works/Screenshot 2023-09-12 194504.png";

import curser  from "./img-my-works/curser.png";
import edCircle  from "./img-my-works/Cover.png";
import imgClick  from "./img-my-works/img-click.png";
import web  from "./img-my-works/web.png";
import hover  from "./img-my-works/hover.png";
import singUp  from "./img-my-works/singUp.png";
import training  from "./img-my-works/training.png";
import imgCss  from "./img-my-works/img-css.png";


const Works = () => {

let open = (e) => {
    // e.target.parentElement

}





    return (
        <div className={style.father} id='works'>
            <h1 style={{color:'white', fontSize:'55px'}}>my <span style={{color:'#00D9E3', fontSize:'55px'}}>works</span></h1>
        <div className={style.works}>
            <div className={style.card}>
                <img src={curser} className={style.todo} onClick={open}/>
                <p className={style.title}>Todo List</p>
                <p className={style.title2}>To-Do List is a simple tool for keeping on top of your daily tasks </p>
                <div className={style.bottomCard}>
                <div><a href='https://github.com/Yosef-Eid/Course'>view code <img src= {arrow}/> </a></div>
                <a href='https://yosef-eid.github.io/Course/' className={style.bottom}>Live Preview</a>
                </div>
            </div>
            <div className={style.card}>
                <img src={edCircle} className={style.todo}/>
                <p className={style.title}>Ed circle</p>
                <p className={style.title2}>up your skills to advance your career path</p>
                <div className={style.bottomCard}>
                <div><a href='https://github.com/Yosef-Eid/Ed-Circal'>view code <img src= {arrow}/> </a></div>
                <a href='https://yosef-eid.github.io/Ed-Circal/' className={style.bottom}>Live Preview</a>
                </div>
            </div>
            <div className={style.card}>
                <img src={imgClick} className={style.todo}/>
                <p className={style.title}>Open Img</p>
                <p className={style.title2}>A simple idea to enlarge the image when you click on it</p>
                <div className={style.bottomCard}>
                <div><a href='https://github.com/Yosef-Eid/img'>view code <img src= {arrow}/> </a></div>
                <a href='https://yosef-eid.github.io/img/' className={style.bottom}>Live Preview</a>
                </div>
            </div>
            <div className={style.card}>
                <img src={web} className={style.todo}/>
                <p className={style.title}>Web Design</p>
                <p className={style.title2}>Get to know agents around the world</p>
                <div className={style.bottomCard}>
                <div><a href='https://github.com/Yosef-Eid/Web-Design'>view code <img src= {arrow}/> </a></div>
                <a href='https://yosef-eid.github.io/Web-Design/' className={style.bottom}>Live Preview</a>
                </div>
            </div>
            <div className={style.card}>
                <img src={hover} className={style.todo}/>
                <p className={style.title}>Hover</p>
                <p className={style.title2}>Swirling all over the body</p>
                <div className={style.bottomCard}>
                <div><a href='https://github.com/Yosef-Eid/Hover'>view code <img src= {arrow}/> </a></div>
                <a href='https://yosef-eid.github.io/Hover/' className={style.bottom}>Live Preview</a>
                </div>
            </div>
            <div className={style.card}>
                <img src={singUp} className={style.todo}/>
                <p className={style.title}>Sing Up</p>
                <p className={style.title2}>Login page using name, email and password</p>
                <div className={style.bottomCard}>
                <div><a href='https://github.com/Yosef-Eid/singUp-page'>view code <img src= {arrow}/> </a></div>
                <a href='https://singup-page-5ce56.web.app/' className={style.bottom}>Live Preview</a>
                </div>
            </div>
            <div className={style.card}>
                <img src={training} className={style.todo}/>
                <p className={style.title}>training</p>
                <p className={style.title2}>Component: You can choose between countries easily</p>
                <div className={style.bottomCard}>
                <div><a href='https://github.com/Yosef-Eid/webket-training'>view code <img src= {arrow}/> </a></div>
                <a href='https://yosef-eid.github.io/webket-training/' className={style.bottom}>Live Preview</a>
                </div>
            </div>
            <div className={style.card}>
                <img src={imgCss} className={style.todo}/>
                <p className={style.title}>Open-img-css</p>
                <p className={style.title2}>The image is enlarged when clicked using HTML CSS only</p>
                <div className={style.bottomCard}>
                <div><a href='https://github.com/Yosef-Eid/Open-Image-'>view code <img src= {arrow}/> </a></div>
                <a href='https://yosef-eid.github.io/Open-Image-/' className={style.bottom}>Live Preview</a>
                </div>
            </div>
        </div>
        </div>
    );
}

export default Works;

import React from 'react';
import  style  from "./About.module.css";
import stk from './doodle items.svg'

const About = () => {
    return (
        <div className={style.about} id='about'>
            <div><h1>About</h1> <h1>me</h1></div>
            <div className={style.p}>
                <p>
                    I'm Yousef Eid from Egypt, a passionate and highly skilled front-end developer
                    With a strong foundation in web development. With a background in both design and coding,
                    I bring a unique blend of creativity and technical expertise to every project I undertake.
                    Whether you are looking to create a visually stunning website, or an attractive web application,
                    Or improving the overall user experience of your existing digital assets,
                    I am willing to contribute my expertise to your projects. Explore my portfolio to see some of my
                    work and contact me to discuss how I can help turn your web development ideas into reality
                </p>

                <img src={stk} /* style={{ height:'300px'}} *//>

            </div>
        </div>
    );
}

export default About;

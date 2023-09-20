import React from 'react';
import style from './Heder.module.css';
import edapit from "./edapit.svg";
import pank from "./pank.svg";
import stack from "./stack.svg";
import figma from "./figma.svg";

const Heder = () => {

    let date = new Date()
    date.getMonth()
    return (
        <div className={style.heder}>
            <p>{date.getFullYear()}   yosefeid@gmail.com</p>
                <a href='https://edabit.com/user/9qAq9AqiPQTa3mgxf'>Edapit <img src={edapit}/> </a>
                <a href='https://www.hackerrank.com/domains/tutorials/10-days-of-javascript'>HackerRank <img src={pank}/></a>
                <a href='https://stackoverflow.com/users/20879903/yosef-eid'>stack overFLow <img src={stack}/></a>
                <a href='https://www.figma.com/@yosefeid'>figma <img src={figma}/></a>
        </div>
    );
}

export default Heder;

import React from 'react';
import './Explanations.css'
import local from "./img/local.jpg";
import json from "./img/json.jpg";
import functions from "./img/functions.jpg";

const Explanations = () => {
    return (
        <div id='explanations'>

            <h1>Explanations</h1>
            
            <div className='cards'>

                <a href='https://www.facebook.com/photo/?fbid=300296089289938&set=a.106364675349748&locale=ar_AR' className='card' ><img src={local}/></a>
                <a href='https://www.facebook.com/photo/?fbid=304379912214889&set=a.106364675349748&locale=ar_AR' className='card' ><img src={json}/></a>
                <a href='https://www.facebook.com/photo/?fbid=302905502362330&set=a.302905555695658&locale=ar_AR' className='card' ><img src={functions}/></a>
                
            </div>
        </div>
    );
}

export default Explanations;
